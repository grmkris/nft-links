import { useWallets } from '../../hooks/useWallets'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'
import { ClipboardCopyIcon } from '@heroicons/react/solid'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from "react-toastify";

export const LinkedWalletList = () => {
  const { isLoading, error, data, isFetching } = useWallets()

  return (
    <div className="card m-2 max-w-prose bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Linked wallets</h2>
        {isLoading || (isFetching && <Skeleton enableAnimation={true} count={5} />)}
        {(error || (data && data.error)  && <div>Error</div>)}
        {data &&
          data.data.map((wallet, index) => (
            <div key={index}>
              <CopyToClipboard text={wallet.wallet}>
                <div className={"btn btn-ghost"} onClick={() => toast.info("Copied to clipboard", {autoClose:500})}> <ClipboardCopyIcon className="w-6" /> {wallet.wallet}</div>
              </CopyToClipboard>
            </div>
          ))}
      </div>
    </div>
  )
}
