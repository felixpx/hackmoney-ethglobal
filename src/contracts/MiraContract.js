export const MiraAddress = ''
export const MiraABI = [
  'function deposit(uint256 fundId, uint256 _amount)',
  'function withdraw(uint256 fundId,uint256 _amount)',
  'function getFundValue(uint256 fundId) public view',
  'function getUserFundValue(uint256 fundId) public view',
  'function claimableRewards() external view',
  'function claimRewards() external',
  'function compoundRewards(uint256 fundId)',
]
