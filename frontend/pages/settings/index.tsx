import React from "react";
import Layout from "../../components/Layout";
import {useAccount, useConnect, useSignMessage} from "wagmi";
import {useSelector} from "react-redux";
import axios from "axios";


function Index() {

  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
  const [{ data, error, loading }, signMessage] = useSignMessage()
  const [{ data: connectData, error: connectError }, connect] = useConnect()
  const session = useSelector((state: any) => state.auth.session);

  const linkWithAccount = async (address: string) => {
    const result = await axios.get('api/wallet/link', {
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
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
      const result2 = await axios.post('api/wallet/validate', {
        address: address,
        signedNonce: data
      }, {
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        }
      })
      console.log(result2.data)
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
      </div>
    );
  };

  return <Layout>
    {renderContent()}
  </Layout>;
}

export default Index;
