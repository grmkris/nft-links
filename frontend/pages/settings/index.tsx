import React from 'react';
import Layout from '../../components/layout/Layout';
import { useAccount, useSignMessage } from 'wagmi';
import axios from 'axios';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { toast } from 'react-toastify';
import { CheckIcon } from '@heroicons/react/solid';
import { useQueryClient } from 'react-query';
import { LinkedWalletList } from '@/settings/LinkedWalletList';
import { useWallets } from 'hooks/useWallets';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GithubConnection } from '@/settings/github/GithubConnection';

function Index() {
  const { data: accountData } = useAccount();
  const { accessToken } = useUser();
  const { signMessageAsync } = useSignMessage();
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
    signMessageAsync({ message: result.data.nonce }).then(async (data) => {
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
    if (accountData && linkedWallets) {
      return (
        <div className='flex items-center gap-2'>
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

  const renderContent = () => {
    return (
      <div>
        <div className='card m-4 max-w-prose rounded-xl bg-base-300 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title text-primary'>Wallet information</h2>
            <div className='card-actions flex-col'>
              <ConnectButton />
              {renderWalletAccountConnection()}
            </div>
            <LinkedWalletList />
          </div>
        </div>

        <div className='card m-4 max-w-prose rounded-xl bg-base-300 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title text-primary'>Github information</h2>
            <GithubConnection />
          </div>
        </div>
      </div>
    );
  };

  return <Layout>{renderContent()}</Layout>;
}

export default Index;
