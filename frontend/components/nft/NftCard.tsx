import {IPFS_GATEWAY} from "../../utils/constants";
import React, {useMemo, useState} from "react";
import {NftModel} from "../../model/nftModel";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import {toast} from "react-toastify";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {ClipboardCopyIcon} from "@heroicons/react/solid";
import * as isIpfs from "is-ipfs"

function NftCard(props: { nft: { id: string, created_at: string, metadata: string, limit: number, active: boolean, user: string } }) {
  const nft = props.nft;
  const [nftMetadata, setNftMetadata] = useState<NftModel>();
  const [isMetadataFail, setIsMetadataFail] = useState(false)

  const getMetadataFromIpfs = async (metadata: string): Promise<NftModel> => {
    // TODO add loading indicator somehow
    try {
      const response = await fetch(`${IPFS_GATEWAY}${metadata}`);
      const json = await response.json();
      return {metadata, ...json}
    } catch {
      return null
    }
  }

  useMemo(() => {
    const getData = async () => {
      console.log("fetching metadata from ipfs", nft);
      if (!isIpfs.cid(nft.metadata)) {
        setIsMetadataFail(true)
      }
      const metadata = await getMetadataFromIpfs(nft.metadata)
      setNftMetadata(metadata)
    }
    getData()
  }, [])

  if (!nftMetadata && !isMetadataFail) {
    return <Skeleton height={200}/>
  }
  return (
    <div
      className="card lg:card-side bg-base-100 shadow-2xl border-accent hover:border transition-all duration-100 cursor-pointer">
      {!isMetadataFail && <figure className={"avatar"}>
        {nftMetadata.image ?
          <Image className={"mask mask-hexagon-2"} width={200} height={200} src={IPFS_GATEWAY + nftMetadata.image}
                 alt={nftMetadata.title}
          /> :
          <Image className={"mask mask-hexagon-2"} width={200} height={200}
                 src="https://fakeimg.pl/350x200/?text=Notavailable&font=lobster"
                 alt={nftMetadata.title}
          />
        }
      </figure>}

      <div className="card-body">
        {!isMetadataFail && <article className="prose">
          <h1 className="card-title">
            {nftMetadata.title}
            <div className="badge badge-secondary">Active</div>
          </h1>
          <p>{nftMetadata.description}</p>
        </article>
        }
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Limit: {nft.limit}</div>
          <div className="badge badge-outline">Claimed: {nft.limit - 5}</div>
          <div className="badge badge-outline">Created: {new Date(nft.created_at).toDateString()}</div>
          <div className="btn-group justify-center">
            <CopyToClipboard text={window.location.href + "/" + nft.id}>
              <div className={"btn btn-sm btn-circle"}
                   onClick={() => toast.info("Copied to clipboard", {autoClose: 500})}>
                <ClipboardCopyIcon className={"w-4"}/>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftCard;