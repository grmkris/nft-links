import React from 'react';
import { useNfts } from 'hooks/useNfts';
import NftCard from './NftCard';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClipboardCopyIcon, GlobeAltIcon } from '@heroicons/react/solid';
import Link from 'next/link';

function NFTList() {
  const { data } = useNfts();

  return (
    <div className='m-5 grid grid-cols-1 justify-items-center space-x-5 md:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5'>
      {data.data.map((nft, index) => {
        return (
          <div className={'card'} key={index}>
            <NftCard nft={nft} />
            <div className='btn-group card-actions grid grid-cols-3'>
              <CopyToClipboard text={window.location.href + '/' + nft.id}>
                <div
                  className={'btn btn-sm'}
                  onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
                >
                  <ClipboardCopyIcon className={'w-4'} />
                </div>
              </CopyToClipboard>
              <Link href={'/claim/nfts/' + nft.id}>
                <a target='_blank' rel='noopener noreferrer' className={'btn btn-sm'}>
                  <GlobeAltIcon className={'w-4'} />
                </a>
              </Link>
              <Link href={window.location.href + '/' + nft.id}>
                <a className={'btn btn-sm'}>🪄</a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NFTList;
