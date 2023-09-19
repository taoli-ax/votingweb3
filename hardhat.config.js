require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const ALCHEMY_SOPELIA_TOKEN = process.env.ALCHEMY_SOPELIA_TOKEN
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths:{
    artifacts:"./client/src/artifacts/",
    cache:"./client/src/cache/"
  },
  networks:{
    hardhat:{
      chainId: 1337
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_SOPELIA_TOKEN}`,
      accounts: [WALLET_PRIVATE_KEY]  //0x2eC7677d70e2Ba2e14BfbAfC017DF25dE4f43dCE
    }
  }
  
};
