import React, {useEffect, useState} from 'react'
import {NftModel} from '../../model/nftModel'
import {IPFS_GATEWAY} from "../../utils/constants";
import {useNfts} from "../../hooks/useNfts";
import {toast} from "react-toastify";
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 space-y-4 justify-items-center">
      {nfts.map((nft, index) => (
        <div className="card card-compact bg-base-100 shadow-2xl w-96 border-accent hover:border transition-all duration-100 cursor-pointer" key={index}>
          <figure><img src={IPFS_GATEWAY + nft.image} alt={nft.title} onError={(e)=>{e.target["onerror"] = null; e.target["src"]="https://fakeimg.pl/350x200/?text=Not available&font=lobster"} }/></figure>
          <div className="card-body">
            <h2 className="card-title">
              {nft.title}
              <div className="badge badge-secondary">Active</div>
            </h2>
            <p>{nft.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Limit: {data.data.find(element => {
                return element.metadata === nft.metadata
              }).limit}</div>
              <div className="badge badge-outline">Claimed: {data.data.find(element => {
                return element.metadata === nft.metadata
              }).limit - 10 // TODO
                 }</div>
              <div className="badge badge-outline">Created: {new Date(data.data.find(element => {
                  return element.metadata === nft.metadata
                }).created_at ).toDateString()}</div>
            </div>
            <div className="btn-group justify-center">
              <button className="btn">Inspect</button>
              <CopyToClipboard text={window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + data.data.find(element => {
                return element.metadata === nft.metadata
              }).id}>
                <div className={"btn"} onClick={() => toast.info("Copied to clipboard", {autoClose:500})}>Copy</div>
              </CopyToClipboard>
              <button className="btn">Send</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTList
