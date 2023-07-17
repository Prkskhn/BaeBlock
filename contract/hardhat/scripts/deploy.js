const hre = require("hardhat");

async function main() {
  const RiderNFT = await hre.ethers.getContractFactory("RiderNFT");
  const riderNFT = await RiderNFT.deploy();
  console.log("LOCK deployed to : ", riderNFT);
  console.log("LOCK deployed to : ", riderNFT.target);
  const StoreNFT = await hre.ethers.getContractFactory("StoreNFT");
  const storeNFT = await StoreNFT.deploy();
  console.log("LOCK deployed to : ", storeNFT);
  console.log("LOCK deployed to : ", storeNFT.target);
  const OrderContract = await hre.ethers.getContractFactory("OrderContract");
  const orderContract = await OrderContract.deploy(
    riderNFT.target,
    storeNFT.target
  );
  console.log("LOCK deployed to : ", orderContract);
  console.log("LOCK deployed to : ", orderContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
