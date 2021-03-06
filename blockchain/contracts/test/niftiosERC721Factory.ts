import { ethers } from "hardhat";
import {NftLink, Niftios721ACloneFactory, NiftiosERC721Factory, NiftiosERC721V2} from "../types";
import {NiftiosERC721} from "../types";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { BigNumber } from "ethers";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Deploy NFTLink", () => {
  it("should deploy NFTLink", async () => {
    const signers = await ethers.getSigners();
    const nftLinkFactory = await ethers.getContractFactory("NftLink")
    const nftLink = await nftLinkFactory.deploy() as NftLink;
    await nftLink.deployed();
    expect(nftLink.address).to.properAddress;
    expect(await nftLink.symbol()).to.eq("NFTLINK");
  });
});

describe("Deploy ERC721Upgradeable", () => {
  it("should deploy ERC721Upgradeable", async () => {
    const signers = await ethers.getSigners();
    const ERC721Factory = await ethers.getContractFactory("Niftios721ACloneFactory");
    const erc721Factory = await ERC721Factory.deploy() as Niftios721ACloneFactory;
    await erc721Factory.deployed();

    const tx = await erc721Factory.addNewErc721("HELLO-WORLD", "HELLO", "asdfs")

    const erc721Address = await erc721Factory.NiftiosERC721Addresses(0)
    const erc721 = await ethers.getContractAt("NiftiosERC721V2", erc721Address) as NiftiosERC721V2
    const name = await erc721.name()
    expect(name).to.eq("HELLO-WORLD")

    const tx1 = await erc721Factory.addNewErc721("HELLO-WORLD1", "HELLO1", "asdfs")
    const erc721Address1 = await erc721Factory.NiftiosERC721Addresses(1)
    const erc7211 = await ethers.getContractAt("NiftiosERC721V2", erc721Address1) as NiftiosERC721V2
    const name1 = await erc7211.name()
    expect(name1).to.eq("HELLO-WORLD1")
    const erc20Name = await erc7211.name();
    const erc20Symbol = await erc7211.symbol();
    const owner = await erc7211.owner();
    console.log("factory address", erc721Factory.address)
    console.log('signer', signers[0].address);
    console.log('niftiosERC721.address', erc7211.address);
    console.log('niftiosERC721.owner', owner);
    await erc7211.airdrop([signers[1].address], [100])
    await erc7211.mint(10)

    const balance = await erc7211.balanceOf(signers[1].address)
    console.log('balance', balance)
    console.log("owner of ", await erc7211.ownerOf(10))
    const tokenId = await erc7211.tokenURI(10)
    console.log("tokenId", tokenId)
  });
});

describe("Deploy NiftiosERC721Factory", function () {
  it("Should return the NiftiosERC721Factory address after deployment", async function () {
    const signers = await ethers.getSigners();
    const NiftiosERC721Factory = await ethers.getContractFactory("NiftiosERC721Factory");
    const niftiosERC721Factory = await NiftiosERC721Factory.deploy() as NiftiosERC721Factory;
    await niftiosERC721Factory.deployed();

    expect(await niftiosERC721Factory.address).to.exist;

    const tx = await niftiosERC721Factory.addNewErc721("HELLO_WORLD", "HWD", "baseUrl");
    const NiftiosERC721Addresses = await niftiosERC721Factory.NiftiosERC721Addresses(0);

    const niftiosERC721 = await ethers.getContractAt("NiftiosERC721", NiftiosERC721Addresses) as NiftiosERC721;

    // const erc20Name = await niftiosERC721.name();
    // const erc20Symbol = await niftiosERC721.symbol();
    // const owner = await niftiosERC721.owner();
    // expect(erc20Name).to.equal("HELLO_WORLD");
    // expect(erc20Symbol).to.equal("HWD");
    // expect(owner).to.equal(await niftiosERC721Factory.address);

  });
});
