import React from 'react';
import Layout from '../../components/layout/Layout';
import { useAccount, useConnect, useSignMessage } from 'wagmi';
import axios from 'axios';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { toast } from 'react-toastify';
import { CheckIcon } from '@heroicons/react/solid';
import { useQueryClient } from 'react-query';
import { LinkedWalletList } from '@/settings/LinkedWalletList';
import { useWallets } from 'hooks/useWallets';

function Index() {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const { accessToken } = useUser();
  const [{}, signMessage] = useSignMessage();
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const { data: linkedWallets } = useWallets();
  const queryCache = useQueryClient();

  const linkWithAccount = async (address: string) => {
    const result = await axios.get('api/wallet/link', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        address,
      },
    });
    console.log(result);
    // popup metamask and ask to sign a message
    // if signed, call api to link account
    // if not signed, do nothing
    signMessage({ message: result.data.nonce }).then(async ({ data }) => {
      const result = await axios.post(
        'api/wallet/validate',
        {
          address: address,
          signedNonce: data,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('result', result);
      if (result.status === 200) {
        toast.success('Account linked!');
        await queryCache.invalidateQueries('linked-wallet-list');
      } else {
        toast.error('Could not link account!');
      }
    });
  };

  const renderWalletAccountConnection = () => {
    console.log(accountData.address);
    console.log(linkedWallets);
    if (accountData && linkedWallets) {
      return (
        <div className='flex items-center gap-2'>
          <button className='btn btn-secondary' onClick={disconnect}>
            Disconnect
          </button>
          {!linkedWallets.data.some((element) => element.wallet === accountData.address) ? (
            <button
              className='btn btn-primary'
              onClick={() => linkWithAccount(accountData.address)}
            >
              Link with account
            </button>
          ) : (
            <div className='flex items-center'>
              <CheckIcon className='mr-2 h-4 w-4' />
              <span>Wallet linked</span>
            </div>
          )}
        </div>
      );
    }
  };

  const renderWalletInformation = () => {
    return (
      accountData && (
        <div>
          {accountData.ens?.name
            ? `${accountData.ens?.name} (${accountData.address})`
            : accountData.address}
          <div>Connected to {accountData.connector.name}</div>
        </div>
      )
    );
  };

  const renderContent = () => {
    return (
      <div>
        {!accountData && (
          <div className='card m-2 max-w-prose bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>Wallet connection</h2>
              <p>Link wallet to your account</p>
              <div>
                <div className={'btn-group'}>
                  {connectData.connectors.map((connector) => (
                    <button
                      className={'btn btn-primary'}
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
          </div>
        )}
        {accountData && (
          <div className='card m-2 max-w-prose bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>Wallet information</h2>
              {renderWalletInformation()}
              <div className='card-actions'>{renderWalletAccountConnection()}</div>
            </div>
          </div>
        )}
        <LinkedWalletList />
      </div>
    );
  };

  return <Layout>{renderContent()}</Layout>;
}

export default Index;
