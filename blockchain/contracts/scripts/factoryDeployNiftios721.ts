import {deployments, getChainId, getNamedAccounts, network} from "hardhat";
import { ethers } from "hardhat";
import {NiftiosERC721Factory} from "../types";

async function main() {
  const chainId = await getChainId();
  const accounts = await getNamedAccounts();
  const netWork = network.name;
  const niftiosERC721Factory = (await ethers.getContractFactory("NiftiosERC721Factory")).attach((await deployments.get("NiftiosERC721Factory")).address) as NiftiosERC721Factory;

  console.log(`Deployer: ${accounts.deployer}`);
  console.log(`Existing NiftiosERC721Factory address: ${niftiosERC721Factory.address}`);
  console.log(`Implementation of deployed contract: ${await niftiosERC721Factory.implementationAddress()}`);
  console.log(`Existing contract deployed by factory: ${await niftiosERC721Factory.NiftiosERC721Addresses(1)}`);
  const deployed = await niftiosERC721Factory.addNewErc721("HELLO_WORLD", "HWD", "baseUrl")
  console.log('New ERC721 contract deployed at', deployed);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
