import React, {useEffect, useState} from 'react'
import {NftModel} from '../../model/nftModel'
import {IPFS_GATEWAY} from "../../utils/constants";
import {useNfts} from "../../hooks/useNfts";


function NFTList() {
  const [nfts, setNfts] = useState<NftModel[]>([])
  const {data} = useNfts();

  const getMetadataFromIpfs = async (metaDataArray: string[]): Promise<NftModel[]> => {
    // TODO add loading indicator somehow
    const metadatas = await Promise.all(metaDataArray.map(async (metadata) => {
      const response = await fetch(`${IPFS_GATEWAY}/${metadata}`)
      const json = await response.json()
      return {metadata, ...json}
    }))
    return metadatas
  }

  useEffect(() => {
    if (data) {
      console.log(data.data)
      const metaDataArray = (data.data.map(nft => nft.metadata))
      const getMetadata = async () => {
        const metadatas = await getMetadataFromIpfs(metaDataArray)
        setNfts(metadatas)
      }
      getMetadata()
    }
  }, [data])

  return (
    <div className="grid w-full grid-cols-1 justify-items-center px-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
      {nfts.map((nft, index) => (
        <div
          key={index}
          className="my-2 flex w-full cursor-pointer  flex-col items-center justify-center space-y-2 rounded-xl border-2 border-slate-300 border-opacity-50 bg-slate-100 bg-gradient-to-b shadow-lg shadow-slate-300 transition-all duration-300 sm:w-3/4 md:w-5/6 md:justify-start md:hover:scale-110 lg:my-8  xl:w-[250px]"
        >
          <div
            className="w-full items-center rounded-lg bg-gradient-to-br from-blue-500 via-gray-500 to-rose-400 p-1 md:w-full">
            <img
              src={IPFS_GATEWAY + nft.image}
              className="h-72 w-full rounded-lg object-cover  xl:h-64"
              alt={nft.title}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-700">{nft.title}</h1>
          </div>

          <div className="px-3 pb-4 text-sm text-slate-500">{nft.description}</div>

          <div className="grid grid-cols-2">
            <div className="stat">
              <div className="stat-title">Limit</div>
              <div className="stat-value">{data.data.find(element => {
                return element.metadata === nft.metadata
              }).limit}</div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success">Increase</button>
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Active</div>
              <div className="stat-value">{data.data.find(element => {
                return element.metadata === nft.metadata
              }).active ? "" : "" }</div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success">{data.data.find(element => {
                  return element.metadata === nft.metadata
                }).active ? "deactivate" : "activate" }</button>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default NFTList
