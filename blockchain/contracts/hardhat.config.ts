import { config as dotEnvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import { accounts, nodeUrl } from "./utils/network";
dotEnvConfig();

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const MNEMONIC = process.env.MNEMONIC;

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        runs: 200,
        enabled: true,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    localhost: {
      url: nodeUrl("localhost"),
      accounts: accounts(),
    },
    rinkeby: {
      url: nodeUrl("rinkeby"),
      accounts: accounts("rinkeby"),
    },
    mainnet: {
      url: nodeUrl("mainnet"),
      accounts: accounts("mainnet"),
    },
    mumbai: {
      url: nodeUrl("mumbai"),
      accounts: accounts("mumbai"),
      chainId: 80001,
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./tests",
    deploy: "./deploy",
    root: "./",
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    enabled: !!process.env.REPORT_GAS,
    coinmarketcap: process.env.CMC_API_KEY,
    maxMethodDiff: 10,
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
  },
  mocha: {
    timeout: 0,
  },
};

export default config;
