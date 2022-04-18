import React from 'react'
import Layout from '../../components/layout/Layout'
import NFTList from '../../components/nft/NFTList'
import NFTListSkeleton from '../../components/nft/NFTListSkeleton'
import CountUp from 'react-countup'
import { useNfts } from '../../hooks/useNfts'

function NFT() {
  const { isLoading } = useNfts()

  return (
    <Layout>
      <div className="bg-gray-100 py-2 dark:bg-slate-800">
        <div className="my-4 mx-2 flex flex-col space-y-3 rounded-xl bg-white py-4 shadow-xl shadow-secondary/5 dark:bg-gray-700  md:mx-10">
          <div className="px-5 text-center text-lg text-gray-700 dark:text-gray-300 sm:px-12 sm:text-left sm:text-2xl md:text-4xl">
            <p>
              Your <span className="text-secondary underline underline-offset-2">NFT</span>{' '}
              Collection
            </p>
          </div>

          <hr className="opacity-50" />

          <div className="flex flex-col justify-between divide-y px-2 text-xl sm:flex-row sm:divide-y-0 md:px-12 ">
            <div className="flex flex-col py-2 text-center">
              <div className="text-sm text-black dark:text-gray-400 md:text-2xl">Total Volume</div>
              <CountUp delay={1} end={9717901} className="text-purple-500 dark:text-purple-400" />
            </div>

            <div className="flex flex-col py-2 text-center">
              <div className="text-sm text-black dark:text-gray-400 md:text-2xl">Weekly Volume</div>
              <CountUp delay={1} end={72524} className="text-fuchsia-500 dark:text-fuchsia-400" />
            </div>

            <div className="flex flex-col py-2 text-center">
              <div className="text-sm text-black dark:text-gray-400 md:text-2xl">
                Total NFT&apos;s
              </div>
              <CountUp delay={1} end={5215} className="text-cyan-500 dark:text-cyan-400" />
            </div>
          </div>
        </div>

        {!isLoading ? <NFTList /> : <NFTListSkeleton skeletonCount={10} />}
      </div>
    </Layout>
  )
}

export default NFT
