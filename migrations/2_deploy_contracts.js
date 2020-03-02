var ERC20 = artifacts.require("ERC20");
var Nyvi=artifacts.require("Nyvi");


module.exports = function(deployer) {
  deployer.deploy(ERC20,arg="d_value", coderType="uint256",value=2);
  deployer.link(ERC20,Nyvi);
  deployer.deploy(Nyvi,arg="d_value", coderType="uint256",value=2);

};
