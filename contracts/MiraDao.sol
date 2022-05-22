// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/access/Ownable.sol";

import "https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IPool.sol";
import "https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IPoolAddressesProvider.sol";
import "Mira/MiraFundAccount.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MiraDAO is Ownable, KeeperCompatibleInterface {
   using EnumerableMap for EnumerableMap.AddressToUintMap;
    uint256 public epoch;
    uint256 public nextEpoch;
    uint256 feesToClaim;
    using Counters for Counters.Counter;

    Counters.Counter private _fundId;

    struct fundAccount {

        uint256 balance;
        address  interestAccount;
        mapping (address => uint256) depositors;
        
    }

    struct fund {
        string name;
        string[] project;
        fundAccount account;
        bool isValue;
    }

    
    
    mapping (uint256 => fund) funds;
    mapping (address => fundAccount) accounts;
    mapping (address => uint256) feesEarned;
    EnumerableMap.AddressToUintMap  deposits;

    address miraTokenAddress;
    address miraUSDCTokenAddress;
    address usdcAddress;

    IERC20 internal miraToken;
    IERC20 internal miraUSDCToken;
    IERC20 internal  usdcToken;
    IERC20 internal aUSDC=IERC20(0xCdc2854e97798AfDC74BC420BD5060e022D14607);
    uint256 public totalValueLocked;
    uint256 depositFeePercent=10;
    uint256 feePercent=9;
    uint256 treasuryPercent=1;
    address treasury;
    address accountImplementation;
    
   event FundCreated(uint256 fundId,string name,uint256 dateCreated);
   event ProjectAdded(uint256 fundId,uint256 projectId,string name,uint256 dateAdded);
   event ProjectUpdated(uint256 fundId,uint256 projectId,string name,uint256 dateUpdated);
   
   event Deposit(uint256 fundId,address depositor,uint256 dateDeposited,uint256 amount,uint256 balance);
   event FeesEarned(address depositor,uint256 amount,uint256 dateEarned);
   
   constructor (address mira,address miraUSDC,address usdc,uint256 _epoch){
        epoch = _epoch;
        nextEpoch = ((block.timestamp + epoch - 1) / epoch) * epoch;

        miraTokenAddress  = mira;
        miraUSDCTokenAddress = miraUSDC;
        usdcAddress = usdc;
        miraToken = IERC20(miraTokenAddress);
        miraUSDCToken  = IERC20(miraUSDCTokenAddress);
        usdcToken = IERC20(usdcAddress);
        accountImplementation = address(new MiraFundAccount());

   }

   

     /**
   * @dev Modifier isValidFund . Make sure its a valid fund 
   * @param   fundId  fund id
   **/	  
	  
    modifier isValidFund (uint256 fundId){
	
	  require(funds[fundId].isValue == true, "Invalid Fund ID.");
   _; 
 }
    function createFund(string calldata name) external onlyOwner {
        uint256 fundId = _fundId.current();
        funds[fundId].name = name;
        funds[fundId].isValue=true;
       address clone = Clones.clone(accountImplementation);

        MiraFundAccount(clone).initialize(usdcAddress,address(this));
        funds[fundId].account.interestAccount = clone;
        emit  FundCreated( fundId, name,block.timestamp);
        _fundId.increment();
       
           
    }

    function addProject(uint256 fundId,string calldata name) external onlyOwner isValidFund(fundId) {
        uint256 projectId = funds[fundId].project.length;
        funds[fundId].project[projectId] = name;
        emit ProjectAdded(fundId,projectId, name,block.timestamp);
     
    }


     function editProject(uint256 fundId,uint256 projectId,string calldata name) external onlyOwner isValidFund(fundId) {
       funds[fundId].project[projectId] = name;

        emit ProjectUpdated(fundId,projectId, name,block.timestamp);
     
    }


    
    function deposit(uint256 fundId,uint256 _amount) external isValidFund(fundId) {
       require(_amount > 0, "Amount must be greater than zero."); 
       require(usdcToken.balanceOf(msg.sender) >= _amount,"Not enough USDC balance.");

      usdcToken.transferFrom(msg.sender,address(this),_amount);
       //calculate deposit fee
       uint256 fee = ((_amount)/1000)*(depositFeePercent*10);
       uint256 userDeposit =  _amount-fee;
       address poolAddress;


      //Get the pool adddress from AAVEE
       poolAddress = IPoolAddressesProvider(0x5343b5bA672Ae99d627A1C87866b8E53F47Db2E6).getPool();
       usdcToken.approve(poolAddress,_amount);      
      //Deposit user funds into AAVE
       IPool(poolAddress).supply(usdcAddress,userDeposit,funds[fundId].account.interestAccount,0);              
       funds[fundId].account.balance += userDeposit;
       funds[fundId].account.depositors[msg.sender] +=userDeposit; 
       totalValueLocked += userDeposit;
        (bool success, bytes memory result) = miraUSDCTokenAddress.call(abi.encodeWithSignature("mintMiraUSDC(address,uint256)", msg.sender,userDeposit*10**12));
       require(success,"Mint Mira USDC not successful");
               MiraFundAccount(funds[fundId].account.interestAccount).deposit(_amount);

       
      //Calculate percentage to disburse as fees to protocol users
      uint256 feeToUsers = ((_amount)/1000)*(feePercent*10);
      emit Deposit(fundId,msg.sender,block.timestamp,userDeposit,funds[fundId].account.depositors[msg.sender]);
     
      uint256 _deposit;
      if (deposits.contains(msg.sender))
        _deposit = deposits.get(msg.sender);
      _deposit += userDeposit;
       deposits.set( msg.sender, _deposit);
         
    }

    function withdraw(uint256 fundId,uint256 _amount) external isValidFund(fundId) {
      require(_amount > 0, "Amount must be greater than zero."); 
      require(funds[fundId].account.depositors[msg.sender] >= _amount   ,"Not enough balance.");
      require(miraUSDCToken.balanceOf(msg.sender) >= _amount,"Not enough Mira USDC balance.");
      miraUSDCToken.transferFrom(msg.sender,address(this),_amount*10**12);
      
      miraUSDCToken.approve(miraUSDCTokenAddress,_amount);
      (bool success, bytes memory result) =  miraUSDCTokenAddress.call(abi.encodeWithSignature("burnMiraUSDC(address,uint256)", address(this),_amount*10**12));
      require(success,"Burn not successful.");
       address poolAddress;
       poolAddress = IPoolAddressesProvider(0x5343b5bA672Ae99d627A1C87866b8E53F47Db2E6).getPool();
       aUSDC.approve(poolAddress,_amount);      
      //Deposit user funds into AAVE
     

      MiraFundAccount(funds[fundId].account.interestAccount).withdraw(msg.sender,_amount);

       funds[fundId].account.depositors[msg.sender] -= _amount;
       funds[fundId].account.balance -= _amount;
       totalValueLocked -=_amount;
       
    }

    function withdrawFund(uint256 fundId) external isValidFund(fundId) {
       require(msg.sender == treasury && treasury != address(0),"You are not authorized to withdraw from this fund.");
       MiraFundAccount(funds[fundId].account.interestAccount).withdrawInterest();

    }

    function getFundValue(uint256 fundId) public view  isValidFund(fundId) returns(uint256){
       return(funds[fundId].account.balance);
    }


 function getUserFundValue(uint256 fundId) public view  isValidFund(fundId) returns(uint256){
       return(funds[fundId].account.depositors[msg.sender]);
    }

    function claimableRewards() external  view returns(uint256){
      return feesEarned[msg.sender] ;
    }


  function getFundAddress(uint256 fundId) external view isValidFund(fundId) returns(address){
     return(funds[fundId].account.interestAccount);
  }  

   function claimRewards() external {
      require(feesEarned[msg.sender] > 0 , "No rewards available.");  
       (bool success, bytes memory result) = miraUSDCTokenAddress.call(abi.encodeWithSignature("mintMiraUSDC(address,uint256)", msg.sender,feesEarned[msg.sender]));
       require(success,"Mint Mira USDC not successful");
       
   }


 function compoundRewards(uint256 fundId)  external isValidFund(fundId){
      require(feesEarned[msg.sender] > 0 , "No rewards available.");  
       address poolAddress;

      //Get the pool adddress from AAVEE
       poolAddress = IPoolAddressesProvider(0x5343b5bA672Ae99d627A1C87866b8E53F47Db2E6).getPool();
      uint256 userDeposit = feesEarned[msg.sender];
      //Deposit user funds into AAVE
       IPool(poolAddress).supply(usdcAddress,userDeposit,funds[fundId].account.interestAccount,0);              
       funds[fundId].account.balance += userDeposit;
       funds[fundId].account.depositors[msg.sender] +=userDeposit; 
       totalValueLocked += userDeposit;
        (bool success, bytes memory result) = miraUSDCTokenAddress.call(abi.encodeWithSignature("mintMIRAUSDC(address,uint256)", msg.sender,userDeposit));
       require(success,"Mint Mira USDC not successful");
               MiraFundAccount(funds[fundId].account.interestAccount).deposit(userDeposit);

       
      
      emit Deposit(fundId,msg.sender,block.timestamp,userDeposit,funds[fundId].account.depositors[msg.sender]);
      uint256 deposit = deposits.get(msg.sender);
      deposit += userDeposit;
       deposits.set( msg.sender, deposit);
       
   }

     function setMiraToken(address _token) external onlyOwner{
        miraToken = IERC20(_token);
        miraTokenAddress = _token;
    }


    function setMiraUSDCToken(address _token) external onlyOwner{
        miraUSDCToken = IERC20(_token);
        miraUSDCTokenAddress = _token;
    }  
  

   
    function setdepositFee(uint256 _depositFeePercent,uint256 _feeToUsersPercent,uint256 _treasuryPercent) external onlyOwner{
       require(_depositFeePercent < 100 ,"Percentage is too high.");
       require(_depositFeePercent > 0 ,"Percentage must be greater than zero.");
  
       require(_feeToUsersPercent+_treasuryPercent == _depositFeePercent,"Deposit % + Treasuray % must equal deposit fee %.");
       depositFeePercent = _depositFeePercent;
       feePercent = _feeToUsersPercent;
       treasuryPercent = _treasuryPercent;
    }   

   function setTreasury(address _treasury) external onlyOwner{
       treasury = _treasury;
   }


    function checkUpkeep(bytes calldata /* checkData */) external view override returns (bool upkeepNeeded, bytes memory performData ) {
      upkeepNeeded = block.timestamp >= nextEpoch && feesToClaim > 0;
      performData = bytes("");

    }

    function performUpkeep(bytes calldata /*performData*/) external {
      if(block.timestamp >= nextEpoch && feesToClaim > 0)
      {
         uint256 numOfDeposits = deposits.length();
         for(uint256 index=1; index <= numOfDeposits;index++)
         {
            (address depositor, uint256 udeposit) = deposits.at(index);
              uint256 percentage =  ((udeposit)*(1*10**6))/(feesToClaim) ;        
              uint256 earnings = percentage*feesToClaim;
              feesEarned[depositor] = earnings;
              emit FeesEarned(depositor,earnings,block.timestamp);
      
            }
         feesToClaim = 0;
      }

    }

    function setEpoch(uint256 _epoch) external onlyOwner {
       epoch = _epoch;
       nextEpoch = ((block.timestamp + epoch - 1) / epoch) * epoch;

    }
}