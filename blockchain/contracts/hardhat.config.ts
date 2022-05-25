import * as dotenv from "dotenv"

import type { HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import "@typechain/hardhat"
import "hardhat-deploy"
import "solidity-coverage"
import "hardhat-gas-reporter"
import "hardhat-contract-sizer"
import "./tasks/tasks"
import "./tasks/mint"
import {accounts, nodeUrl} from "./utils/network";

dotenv.config()

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
    rinkeby: {
      url: nodeUrl("rinkeby"),
      accounts: accounts("rinkeby"),
    },
    mainnet: {
      url: nodeUrl("mainnet"),
      accounts: accounts("mainnet"),
    },
    optimism_kovan: {
      url: nodeUrl("optimism_kovan"),
      accounts: accounts("optimism_kovan"),
    },
    optimism_ethereum: {
      url: nodeUrl("optimism_ethereum"),
      accounts: accounts("optimism_ethereum"),
      chainId: 80001,
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
    timeout: 200000, // 200 seconds max for running tests
  },
};

export default config;
