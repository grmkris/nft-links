import { task } from "hardhat/config";
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import base58 from "bs58";
import {CMS} from "../types";

export const Actions = {
  CREATE_SPACE : "0x01",
  CREATE_POST: "0x02",
  DELETE_POST: "0x03",
  NEW_COMMENT : "0x04",
  DELETE_COMMENT : "0x05"
}


task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address + " - " + "Balance: " + hre.ethers.utils.formatEther(await account.getBalance()));
  }
});

task("init-space", "Initializes a space")
  .setAction(async (arge, hre) => {
    const { ethers, deployments } = hre;
      const accounts: SignerWithAddress[] = await ethers.getSigners()
      const { get } = deployments

      const cmsAddress = (await get('CMS')).address
      console.log(`CMS address: ${cmsAddress}`);
      const contractFactory = await ethers.getContractFactory('CMS')
      const cms = await contractFactory.attach(cmsAddress).connect(accounts[0]) as CMS

      // init space
      console.log(`Initializing space`)
      const tx = await cms.stateChange([Actions.CREATE_SPACE])
      console.log(`Transaction hash:`, tx.hash)
})

task("create-post", "Creates a post")
  .addParam("space", "The space to create the post in")
  .addParam("content", "Content url")
  .setAction(async (args, hre) => {
    const { ethers, deployments } = hre;
      const accounts: SignerWithAddress[] = await ethers.getSigners()
      const { get } = deployments

      const cmsAddress = (await get('CMS')).address
      console.log(`CMS address: ${cmsAddress}`);
      const contractFactory = await ethers.getContractFactory('CMS')
      const cms = await contractFactory.attach(cmsAddress).connect(accounts[0]) as CMS

    // convert ipfs hash QmasyU5YNZdA3suigZCsmyBJHWnWMBE87SmaPtK7aBztD3 to 1220 ba52754618c8f8d5779f2b6338e6b87fb6734f6532016c0e2d07c96e9e16058e
    const ipfsHashesBinary = [args.content].map(ipfsHashB58 => base58.decode(ipfsHashB58));
    const ipfsHashesDecoded = ipfsHashesBinary.map(ipfsHashBinary => new Buffer(ipfsHashBinary).toString('hex'));
    const ipfsHashes = ipfsHashesDecoded.map(ipfsHashDecoded => ipfsHashDecoded.slice(4, ipfsHashDecoded.length))


      // create post
      const request = Actions.CREATE_POST + args.space + ipfsHashes[0]
      console.log(`Creating post, request: ${request}`)
      const tx = await cms.stateChange([request])
      console.log(`Transaction hash:`, tx.hash)
  }
)

task("delete-post", "Deletes a post")
  .addParam("post", "The post to delete")
  .setAction(async (args, hre) => {
    const { ethers, deployments } = hre;
      const accounts: SignerWithAddress[] = await ethers.getSigners()
      const { get } = deployments

      const cmsAddress = (await get('CMS')).address
      console.log(`CMS address: ${cmsAddress}`);
      const contractFactory = await ethers.getContractFactory('CMS')
      const cms = await contractFactory.attach(cmsAddress).connect(accounts[0]) as CMS

      const request = Actions.DELETE_POST + args.post
      console.log(`Deleting post, request: ${request}`)
      const tx = await cms.stateChange([request])
      console.log(`Transaction hash:`, tx.hash)
  }
)

task("new-comment", "Creates a comment")
  .addParam("post", "The post to comment on")
  .addParam("content", "Content url")
  .setAction(async (args, hre) => {
    const { ethers, deployments } = hre;
      const accounts: SignerWithAddress[] = await ethers.getSigners()
      const { get } = deployments

      const cmsAddress = (await get('CMS')).address
      console.log(`CMS address: ${cmsAddress}`);
      const contractFactory = await ethers.getContractFactory('CMS')
      const cms = await contractFactory.attach(cmsAddress).connect(accounts[0]) as CMS

      // convert ipfs hash QmasyU5YNZdA3suigZCsmyBJHWnWMBE87SmaPtK7aBztD3 to 1220 ba52754618c8f8d5779f2b6338e6b87fb6734f6532016c0e2d07c96e9e16058e
      const ipfsHashesBinary = [args.content].map(ipfsHashB58 => base58.decode(ipfsHashB58));
      const ipfsHashesDecoded = ipfsHashesBinary.map(ipfsHashBinary => new Buffer(ipfsHashBinary).toString('hex'));
      const ipfsHashes = ipfsHashesDecoded.map(ipfsHashDecoded => ipfsHashDecoded.slice(4, ipfsHashDecoded.length))

      // create post
      const request = Actions.NEW_COMMENT + args.post + ipfsHashes[0]
      console.log(`Creating comment, request: ${request}`)
      const tx = await cms.stateChange([request])
      console.log(`Transaction hash:`, tx.hash)
  }
)