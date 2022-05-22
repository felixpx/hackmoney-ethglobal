// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IPool.sol";
contract MiraFundAccount  {
    address treasury; 
    address assetAddress; //Asset or token Address
    IERC20 assetContract;
    address depositController;
    IPool pool ; 
    bool isInitialized;
    uint256 depositorBalance;  //Doesn't include interest earned
    IERC20 aUSDC = IERC20(0xCdc2854e97798AfDC74BC420BD5060e022D14607);

   function  initialize(address _assetAddress,address _depositController) public {
      // require(msg.sender == depositController,"You are not authorized.");
       require(!isInitialized,"Already Initialized.");
       
       assetAddress = _assetAddress;
       assetContract = IERC20(assetContract);
       depositController  = _depositController;
       isInitialized = true;


    }


    function deposit(uint256 amount) external {
        require(msg.sender == depositController, "You are not authorized to call this function.");
        depositorBalance += amount;
    }


    function  withdraw(address depositor,uint256 amount) external {
      require(msg.sender == depositController, "You are not authorized to call this function.");
     // require(assetContract.balanceOf(address(this)) >= amount,"Not enough balance.");
       address poolAddress;


      //Get the pool adddress from AAVEE
       poolAddress = IPoolAddressesProvider(0x5343b5bA672Ae99d627A1C87866b8E53F47Db2E6).getPool();
      //aUSDC.transfer(msg.sender,amount);
      //aUSDC.approve(poolAddress,amount); 
      IPool(poolAddress).withdraw(assetAddress,amount,depositor);
      //assetContract.transfer(depositor,amount);
      depositorBalance -= amount;
    }

    function withdrawInterest() external {
      require(msg.sender == depositController, "You are not authorized to call this function.");
      require(assetContract.balanceOf(address(this)) > 0,"Not enough balance.");
      uint256 interest =  assetContract.balanceOf(address(this))-depositorBalance;
      require(interest > 0 ,"Not enough balance.");
      pool.withdraw(assetAddress,interest,treasury);

    }
   


}