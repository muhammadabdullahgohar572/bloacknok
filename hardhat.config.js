require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async (_, hre) => {
  const {ethers} = hre; // ✅ Sahi tareeqa

  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    const address = await account.getAddress();
    const balance = await ethers.provider.getBalance(address);
    console.log(`${address}: ${ethers.formatEther(balance)} ETH`);
  }
});
// task("accounts", "Prints the list of accounts", async (_, hre) => {
//   const { ethers } = hre; // ✅ Ethers ko destructure kiya taake sab kuch accessible ho
//   const accounts = await ethers.getSigners();

//   for (const account of accounts) {
//     const address = await account.getAddress();
//     const balance = await ethers.provider.getBalance(address);
//     console.log(`${address}: ${ethers.formatEther(balance)} ETH`); // ✅ formatEther sahi tarah use kiya
//   }
// });

module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "ropston",
  networks: {
    hardhat: {},
    ropston: {
      url: "https://sepolia.infura.io/v3/67f306136ef04efb86d07b8cb8120516",
      accounts: ["7ca24c84e0627d4e228640625dd6fb7cca2660a46b573ad30a5013136683b671"]
    },
  },
};
