var ERC20 = artifacts.require("ERC20");
var MetaCoin=artifacts.require("MetaCoin");
var Ownable=artifacts.require("Ownable");
var Secondary=artifacts.require("Secondary");

module.exports = function(deployer) {
  deployer.deploy(Ownable,arg="d_value", coderType="uint256",value=10000);
  deployer.deploy(Secondary,arg="d_value", coderType="uint256",value=10000);
  deployer.deploy(MetaCoin,arg="d_value", coderType="uint256",value=10000);
  deployer.deploy(ERC20,arg="d_value", coderType="uint256",value=10000);
};
