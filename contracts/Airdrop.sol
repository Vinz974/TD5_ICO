pragma solidity >=0.4.25 <0.7.0;

import "./IERC20.sol";
import "./Ownable.sol";

contract MultiLevelDistribution_AirDrop is Ownable {

    function MultiLevelDistribution(address _tokenAddr, address[] memory dests, uint256[] memory values)public onlyOwner returns (uint256) {
        uint256 i = 0;
        while (i < dests.length) {
           IERC20(_tokenAddr).transfer(dests[i], values[i]);
           i += 1;
        }
        return(i);
    }

    function AirDrop ( address receiver, uint256 value) public {
      address _tokenAddr = 0x54F5f129eC7A47Ce355088F213626a1E44adD72E; //address of my token
      IERC20(_tokenAddr).transfer(receiver, value);
  }

}