import React from 'react'
import {useNfts} from "../../hooks/useNfts";
import NftCard from "./NftCard";

function NFTList() {
  const {data} = useNfts();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 space-x-5 space-y-5 justify-items-center">
      {data.data.map((nft, index) => {
        return (
            <NftCard nft={nft} key={index}/>
        )
      })}
    </div>
  )
}

export default NFTList
