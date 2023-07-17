const contract_orderContract = artifacts.require("OrderContract");

module.exports = function (deployer) {
  deployer.deploy(
    contract_orderContract,
    "0xD0e6C524dcb133F60ea6f7Bb0eE2e255C7537783",
    "0x5EADaDa5Ea651D6CbfCC7BF801eB2743464c813a"
  );
};
