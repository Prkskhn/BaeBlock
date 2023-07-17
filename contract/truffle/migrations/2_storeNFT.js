const contract_storeNFT = artifacts.require("StoreNFT");

module.exports = function (deployer) {
  deployer.deploy(contract_storeNFT);
};
