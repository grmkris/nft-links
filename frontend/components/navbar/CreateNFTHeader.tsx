import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function CreateNFTHeader() {
  const router = useRouter()
  return (
    <div className="py-4 text-black md:px-12">
      <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-5 px-8 dark:bg-gray-700 dark:text-gray-300 md:flex-row">
        <div className="text-xl font-semibold">Mint NFTs</div>
        <div className="mt-4 flex w-full flex-col justify-around space-y-3 text-center text-lg text-gray-600 md:mt-0 md:w-3/4 md:flex-row md:space-x-4 md:space-y-0">
          <Link href="/nft/info" passHref>
            <div
              className={`rounded-lg dark:text-gray-200 md:w-1/3 ${
                router.pathname == '/nft/info'
                  ? 'bg-slate-200 text-cyan-400 dark:bg-slate-800 dark:text-cyan-500'
                  : ''
              } py-1 hover:bg-slate-300 hover:text-cyan-400 dark:hover:bg-slate-900`}
            >
              <button className="w-full text-base 2xl:text-xl">Info</button>
            </div>
          </Link>

          <Link href="/nft/contract" passHref>
            <div
              className={`rounded-lg dark:text-gray-200 md:w-1/3  ${
                router.pathname == '/nft/contract'
                  ? 'bg-slate-200 text-cyan-400 dark:bg-slate-800 dark:text-cyan-500'
                  : ''
              } py-1 hover:bg-slate-300 hover:text-cyan-400 dark:hover:bg-slate-900`}
            >
              <button className="w-full text-base 2xl:text-xl">Generate contract</button>
            </div>
          </Link>

          <Link href="/nft/create" passHref>
            <div
              className={`rounded-lg dark:text-gray-200 md:w-1/3  ${
                router.pathname == '/nft/create'
                  ? 'bg-slate-200 text-cyan-400 dark:bg-slate-800 dark:text-cyan-500'
                  : ''
              } py-1 hover:bg-slate-300 hover:text-cyan-400 dark:hover:bg-slate-900`}
            >
              <button className="w-full text-base 2xl:text-xl">Mint NFT</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateNFTHeader
