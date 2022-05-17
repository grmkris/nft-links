import React from 'react'
import {useNfts} from "../../hooks/useNfts";
import NftCard from "./NftCard";
import {toast} from "react-toastify";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function NFTList() {
  const {data} = useNfts();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 space-y-4 justify-items-center">
      {data.data.map((nft, index) => {
        return (
          <div key={index}>
            <NftCard nft={nft}/>
            <div className="btn-group justify-center">
              <button className="btn">Inspect</button>
              <CopyToClipboard text={window.location.href + "/" + nft.id}>
                <div className={"btn"} onClick={() => toast.info("Copied to clipboard", {autoClose: 500})}>Copy</div>
              </CopyToClipboard>
              <button className="btn">Send</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NFTList
