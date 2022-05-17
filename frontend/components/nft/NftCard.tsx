import {IPFS_GATEWAY} from "../../utils/constants";
import React, {useMemo, useState} from "react";
import {NftModel} from "../../model/nftModel";
import Skeleton from "react-loading-skeleton";

function NftCard(props: {nft: {id: string, created_at: string, metadata: string, limit: number, active: boolean, user: string}}) {
  const nft = props.nft;
  const [nftMetadata, setNftMetadata] = useState<NftModel>();

  const getMetadataFromIpfs = async (metadata: string): Promise<NftModel> => {
    // TODO add loading indicator somehow
    const response = await fetch(`${IPFS_GATEWAY}${metadata}`);
    const json = await response.json();
    return {metadata, ...json}
  }

  useMemo(async () => {
    console.log("fetching metadata from ipfs", nft);
    const metadata = await getMetadataFromIpfs(nft.metadata)
    setNftMetadata(metadata)
  }, [])

  if (!nftMetadata) {
    return <Skeleton height={200} />
  }
  return (


    <div className="card card-compact bg-base-100 shadow-2xl w-96 border-accent hover:border transition-all duration-100 cursor-pointer">
      <figure><img className={"mask mask-hexagon-2"} src={IPFS_GATEWAY + nftMetadata.image} alt={nftMetadata.title} onError={(e)=>{e.target["onerror"] = null; e.target["src"]="https://fakeimg.pl/350x200/?text=Not available&font=lobster"} }/></figure>
      <div className="card-body">
        <h2 className="card-title">
          {nftMetadata.title}
          <div className="badge badge-secondary">Active</div>
        </h2>
        <p>{nftMetadata.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Limit: {nft.limit}</div>
          <div className="badge badge-outline">Claimed: {nft.limit - 5}</div>
        </div>
          <div className="badge badge-outline">Created: {new Date(nft.created_at).toDateString()}</div>
        </div>
      </div>
  )
}

export default NftCard;