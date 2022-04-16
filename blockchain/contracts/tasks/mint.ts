import { task } from "hardhat/config";
import { NftLink } from "../types";


task("mint", "Mints NFT with provided metadata URI to the provided address")
.addParam("metadata", "metadata of the nft")
.addParam("address", "address of the receiver")
  .setAction(async  ({ address, metadata }, { ethers, deployments}) => {
  const { get } = deployments;
  const contractAddress = (await get("NftLink")).address;
  const nftLink = await ethers.getContractAt(
    "NftLink",
    contractAddress
  ) as NftLink;
  const result = await nftLink.mintNFT(address, metadata);
  console.log(result);
});
