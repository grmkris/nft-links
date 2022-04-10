import React from "react";
import Layout from "../../components/Layout";
import {useAccount, useConnect, useSignMessage} from "wagmi";
import axios from "axios";
import {LinkedWalletList} from "../../components/settings/LinkedWalletList";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import { toast } from "react-toastify";


function Index() {

  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
  const { user, accessToken } = useUser()
  const [{ }, signMessage] = useSignMessage()
  const [{ data: connectData, error: connectError }, connect] = useConnect()

  const linkWithAccount = async (address: string) => {
    const result = await axios.get('api/wallet/link', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      params: {
        address
      }
    })
    console.log(result)
    // popup metamask and ask to sign a message
    // if signed, call api to link account
    // if not signed, do nothing
    signMessage({ message: result.data.nonce }).then(async ({data}) => {
      const result = await axios.post('api/wallet/validate', {
        address: address,
        signedNonce: data
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      })
      console.log('result', result)
      if (result.status === 200) {
        toast.success('Account linked!')
      } else {
        toast.error('Could not link account!')
      }
    })
  }

  const renderWalletAccountConnection = () => {
    if (accountData) {
      return (
        <div>
          <button className="btn" onClick={disconnect}>Disconnect</button>
          <button className="btn" onClick={() => linkWithAccount(accountData.address)}>
            Link with account
          </button>
        </div>
      )
    }
  }

  const renderWalletInformation = () => {
    return       accountData &&
      <div>
        {accountData.ens?.name
          ? `${accountData.ens?.name} (${accountData.address})`
          : accountData.address}
        <div>Connected to {accountData.connector.name}</div>
      </div>
  }

  const renderContent = () => {
    return (
      <div>
        {!accountData &&
          <div className="card bg-base-100 shadow-xl max-w-prose m-2">
            <div className="card-body">
              <h2 className="card-title">Wallet connection</h2>
              <p>Link wallet to your account</p>
              <div>
                <div className={"btn-group"}>
                  {connectData.connectors.map((connector) => (
                    <button className={"btn"}
                            disabled={!connector.ready}
                            key={connector.id}
                            onClick={() => connect(connector)}
                    >
                      {connector.name}
                      {!connector.ready && ' (unsupported)'}
                    </button>
                  ))}

                  {connectError && <div>{connectError?.message ?? 'Failed to connect'}</div>}
                </div>
              </div>
            </div>
          </div>}
        {
          accountData &&
          <div className="card bg-base-100 shadow-xl max-w-prose m-2">
            <div className='card-body'>
              <h2 className='card-title'>Wallet information</h2>
              {renderWalletInformation()}
              <div className="card-actions">
                {renderWalletAccountConnection()}
              </div>
            </div>
          </div>
        }
        {
          <div className="card bg-base-100 shadow-xl max-w-prose m-2">
            <div className="card-body">
              <h2 className="card-title">Linked wallets</h2>
              <div>
                {LinkedWalletList()}
              </div>
            </div>
          </div>
        }
      </div>
    );
  };

  return <Layout>
    {renderContent()}
  </Layout>;
}

export default Index;
