import React from 'react';
import CountUp from 'react-countup';
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
            Your <span className='text-accent underline'>NFTs</span>
          </h2>

          <div className='stats shadow'>
            <div className='stat'>
              <div className='stat-title'>Total Volume</div>
              <CountUp className='stat-value text-primary' delay={1} end={9717901} />
            </div>

            <div className='stat'>
              <div className='stat-title'>Weekly Volume</div>
              <CountUp delay={1} end={72524} className='stat-value text-accent' />
            </div>

            <div className='stat'>
              <div className='stat-title'>Total NFT&apos;s</div>
              <CountUp delay={1} end={5215} className='stat-value text-secondary' />
            </div>
          </div>
        </div>
      </div>

      {!isLoading ? <NFTList /> : <NFTListSkeleton skeletonCount={10} />}
    </Layout>
  );
}

export default NFT;
