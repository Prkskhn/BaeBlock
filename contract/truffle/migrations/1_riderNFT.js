const contract_riderNFT = artifacts.require("RiderNFT");

module.exports = function (deployer) {
  deployer.deploy(contract_riderNFT);
};
