import React from 'react';
import { useNfts } from 'hooks/useNfts';
import Layout from '@/layout/Layout';
import NFTList from '@/nft/NFTList';
import NFTListSkeleton from '@/nft/NFTListSkeleton';

function NFT() {
  const { isLoading } = useNfts();

  return (
    <Layout>
      <div className='card card-side m-4 rounded-xl bg-base-300 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>
            Your <span className='text-accent underline'>Coupons</span>
          </h2>
        </div>
      </div>

      {!isLoading ? <NFTList /> : <NFTListSkeleton skeletonCount={10} />}
    </Layout>
  );
}

export default NFT;
