import React from 'react'
import { nftModel } from '../../model/nftModel'
import Image from "next/image";

interface NFTListProps {
  dummyNFT: nftModel[]
}

function NFTList({ dummyNFT }: NFTListProps) {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {dummyNFT.map((nft) => (
        <div
          key={nft.nftTitle}
          className="my-2 flex w-full cursor-pointer  flex-col items-center justify-center space-y-2 rounded-xl border-2 border-slate-300 border-opacity-50 bg-slate-100 bg-gradient-to-b shadow-lg shadow-slate-300 transition-all duration-300 sm:w-3/4 md:w-5/6 md:justify-start md:hover:scale-110 lg:my-8  xl:w-[250px]"
        >
          <div className="w-full items-center rounded-lg bg-gradient-to-br from-blue-500 via-gray-500 to-rose-400 p-1 md:w-full">
            <Image
              layout={'fill'}
              src={nft.nftImage.url}
              className="h-72 w-full rounded-lg object-cover  xl:h-64"
              alt={nft.nftTitle}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-700">{nft.nftTitle}</h1>
          </div>

          <div className="px-3 pb-4 text-sm text-slate-500">{nft.nftDescription}</div>
        </div>
      ))}
    </div>
  )
}

export default NFTList