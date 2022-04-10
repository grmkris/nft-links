import React from "react";
import Layout from "../../components/Layout";
import {useAccount, useConnect} from "wagmi";


function Index() {


  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
  const [{ data: connectData, error: connectError }, connect] = useConnect()

  const linkWithAccount = (address: string) => {
    // TODO
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
