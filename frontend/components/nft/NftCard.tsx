import { IPFS_GATEWAY } from '../../utils/constants';
import React, { useMemo, useState } from 'react';
import { NftModel } from '../../model/nftModel';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import * as isIpfs from 'is-ipfs';
import { definitions } from 'types/database';

function NftCard(props: { nft: definitions['nfts'] }) {
  const nft = props.nft;
  const [nftMetadata, setNftMetadata] = useState<NftModel>();
  const [isMetadataFail, setIsMetadataFail] = useState(false);

  const getMetadataFromIpfs = async (metadata: string): Promise<NftModel> => {
    // TODO add loading indicator somehow
    try {
      const response = await fetch(`${IPFS_GATEWAY}${metadata}`);
      const json = await response.json();
      return { metadata, ...json };
    } catch {
      return null;
    }
  };

  useMemo(() => {
    const getData = async () => {
      console.log('fetching metadata from ipfs', nft);
      if (!isIpfs.cid(nft.metadata)) {
        setIsMetadataFail(true);
      }
      const metadata = await getMetadataFromIpfs(nft.metadata);
      setNftMetadata(metadata);
    };
    getData();
  }, [nft]);

  if (!nftMetadata && !isMetadataFail) {
    return <Skeleton height={200} />;
  }
  return (
    <div className='card max-w-lg cursor-pointer border-accent bg-base-200 shadow-2xl transition-all duration-500 hover:border'>
      {!isMetadataFail && (
        <figure className={'avatar'}>
          {nftMetadata.image ? (
            <Image
              className={'mask mask-hexagon-2'}
              width={200}
              height={200}
              src={IPFS_GATEWAY + nftMetadata.image}
              alt={nftMetadata.title}
            />
          ) : (
            <Image
              className={'mask mask-hexagon-2'}
              width={200}
              height={200}
              src='https://fakeimg.pl/200x200/?text=Notavailable&font=lobster'
              alt={nftMetadata.title}
            />
          )}
        </figure>
      )}

      <div className='card-body'>
        {!isMetadataFail && (
          <article className='prose'>
            <h1 className='card-title'>
              {nftMetadata.title}
              <div className='badge badge-secondary'>Active</div>
            </h1>
            <p>{nftMetadata.description}</p>
          </article>
        )}
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Limit: {nft.limit}</div>
          <div className='badge badge-outline'>Claimed: {nft.limit - 5}</div>
          <div className='badge badge-outline'>
            Created: {new Date(nft.created_at).toDateString()}
          </div>
          <div className='badge badge-outline'>{nft.metadata}</div>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
