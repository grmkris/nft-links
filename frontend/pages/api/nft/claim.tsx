import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import {
  MNEMONIC,
  NEXT_PUBLIC_ETHEREUM_NODE_URL,
  NEXT_PUBLIC_NFT_LINK_NFT,
} from '../../../utils/constants';
import { supabaseServerClient } from '../../../utils/server/supabaseServer';

import NftLinkABI from '../../../utils/abis/NftLink.json';
import { NftLink } from 'types/contracts/NftLink';
import { definitions } from 'types/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    default:
    case 'POST': {
      try {
        const { address: recipientAddress, uuid } = req.body;
        const url = NEXT_PUBLIC_ETHEREUM_NODE_URL;
        const alchemyProvider = new ethers.providers.JsonRpcProvider(url);
        alchemyProvider.getBlockNumber().then((result) => {
          console.log('Current block number: ' + result);
        });
        // Signer
        const signer = new ethers.Wallet(ethers.Wallet.fromMnemonic(MNEMONIC), alchemyProvider);

        // get contract at NEXT_PUBLIC_NFT_LINK_NFT
        const nftLinkContract = new ethers.Contract(
          NEXT_PUBLIC_NFT_LINK_NFT,
          NftLinkABI.abi,
          signer
        ) as NftLink;

        // get token metadata from subabase
        const nftData = await supabaseServerClient.from('nfts').select('*').match({
          id: uuid,
        });

        if (!nftData.data) return res.status(404).send('NFT not found');
        const nft = nftData.data[0] as definitions['nfts'];

        const tx = await nftLinkContract.mintNFT(recipientAddress, nft.metadata);
        console.log(tx);
        return res.status(201).send(tx);
      } catch (e) {
        console.log(e);
        return res.status(500).send(e);
      }
    }
  }
}
