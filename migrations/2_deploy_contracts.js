var ERC20 = artifacts.require("ERC20");
var MetaCoin=artifacts.require("MetaCoin");
var Context=artifacts.require("Context");
var SafeMath=artifacts.require("SafeMath");
var IERC20=artifacts.require("IERC20");
var Owner=artifacts.require("Owner");
var Secondary=artifacts.require("Secondary");

module.exports = function(deployer) {
  deployer.deploy(Owner,arg="d_value", coderType="uint256",value=10000);
  deployer.deploy(Secondary,arg="d_value", coderType="uint256",value=10000);
  deployer.deploy(MetaCoin,arg="d_value", coderType="uint256",value=10000);
  deployer.deploy(ERC20,arg="d_value", coderType="uint256",value=10000);
};
