require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const pvk = process.env.PVK;

module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.GOERLI_API}`,
      accounts: [pvk],
    },
  },
};
