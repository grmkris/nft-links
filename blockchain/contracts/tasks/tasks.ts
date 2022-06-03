import { task } from "hardhat/config";
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import {cms} from "../types/contracts";
import {CMS} from "../types";

export const Actions = {
  CREATE_SPACE : "0x01",
  NEW_COMMENT : "'0x02",
  DELETE_COMMENT : "0x03",
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
