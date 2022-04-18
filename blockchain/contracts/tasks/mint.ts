import { task } from "hardhat/config";
import { NftLink } from "../types";


task("create", "Mints NFT with provided metadata URI to the provided address")
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


task("metadata", "Gets metadata of the NFT with provided id")
  .addParam("id", "id of the nft")
  .setAction(async  ({ id }, { ethers, deployments}) => {
    const { get } = deployments;
  const contractAddress = (await get("NftLink")).address;
  const nftLink = await ethers.getContractAt(
    "NftLink",
    contractAddress
  ) as NftLink;
  const result = await nftLink.tokenURI(id);
  console.log(result);
});
