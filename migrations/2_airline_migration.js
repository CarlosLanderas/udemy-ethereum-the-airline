var Airline = artifacts.require("./Airline.sol");

module.exports = function(deployer) {
  deployer.deploy(Airline);
};
