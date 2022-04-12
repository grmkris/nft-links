import { useWallets } from '../../hooks/useWallets'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'

export const LinkedWalletList = () => {
  const { isLoading, error, data, isFetching } = useWallets()

  return (
    <div className="card m-2 max-w-prose bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Linked wallets</h2>
        {isLoading || (isFetching && <Skeleton enableAnimation={true} count={5} />)}
        {data && data.error || (error && <div>Error</div>)}
        {data && data.data.map((wallet) => (
          <div key={wallet.id}>
            <p>{wallet.wallet}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
