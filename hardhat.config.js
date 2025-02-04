require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

// Task to print accounts and balances
task("accounts", "Prints the list of accounts", async (_, hre) => {
  const { ethers } = hre;

  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    const address = await account.getAddress();
    const balance = await ethers.provider.getBalance(address);

    console.log("This is my account ID:", account);
    console.log(`${address}: ${ethers.formatEther(balance)} ETH`);
  }
});



// Task to get Chain ID
task("chain-id", "Prints the current chain ID", async (_, hre) => {
  const network = await hre.ethers.provider.getNetwork();
  console.log(`Chain ID: ${network.chainId}`);
});

module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "sepolia", // ✅ Ropsten hata diya, Sepolia use kar raha hoon
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/67f306136ef04efb86d07b8cb8120516",
      accounts: ["7ca24c84e0627d4e228640625dd6fb7cca2660a46b573ad30a5013136683b671"],
    },
  },
};


