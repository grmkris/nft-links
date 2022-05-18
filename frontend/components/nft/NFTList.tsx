import React from 'react'
import {useNfts} from "../../hooks/useNfts";
import NftCard from "./NftCard";

function NFTList() {
  const {data} = useNfts();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 space-y-4 justify-items-center">
      {data.data.map((nft, index) => {
        return (
          <div key={index}>
            <NftCard nft={nft}/>
          </div>
        )
      })}
    </div>
  )
}

export default NFTList
