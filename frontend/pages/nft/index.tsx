import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import NFTList from '../../components/nft/NFTList'
import NFTListSkeleton from '../../components/nft/NFTListSkeleton'
import CountUp from 'react-countup'
import {useNfts} from "../../hooks/useNfts";
import {IPFS_GATEWAY} from "../../utils/constants";
import {NftModel} from "../../model/nftModel";

function NFT() {
  const { data, isError, isLoading } = useNfts();

  return (
    <Layout>
      <div className="bg-gray-100 py-2">
        <div className="my-4 mx-2 flex flex-col space-y-5 rounded-xl bg-white py-4 shadow-xl md:mx-10">
          <div className="px-12 text-center text-2xl text-gray-700 md:text-4xl">
            <p>
              Your <span className="text-rose-400 underline underline-offset-2">NFT</span>{' '}
              Collection
            </p>
          </div>

          <hr className="opacity-50" />

          <div className="flex justify-between px-2 text-xl md:px-12">
            <div className="flex flex-col text-center">
              <div className="text-sm text-black md:text-2xl">Total Volume</div>
              <CountUp delay={1} end={9717901} className="text-purple-500" />
            </div>

            <div className="flex flex-col text-center">
              <div className="text-sm text-black md:text-2xl">Weekly Volume</div>
              <CountUp delay={1} end={72524} className="text-fuchsia-500" />
            </div>

            <div className="flex flex-col text-center">
              <div className="text-smtext-black md:text-2xl">Total NFT&apos;s</div>
              <CountUp delay={1} end={5215} className="text-cyan-500" />
            </div>
          </div>
        </div>

        {!isLoading? <NFTList /> : <NFTListSkeleton skeletonCount={10} />}
      </div>
    </Layout>
  )
}

export default NFT
