import { toast } from 'react-toastify';
import { ClipboardCopyIcon, XCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { definitions } from 'types/database';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { useGraphAuthTokens } from 'hooks/useGraphAuthTokens';
import Skeleton from 'react-loading-skeleton';
import { useQueryClient } from 'react-query';
import { AVAILABLE_CHAINS, CHAIN, graphCliCommand } from './graph.utils';

export default function GraphAuthTokens() {
  const { user } = useUser();
  const { data, isLoading, isError } = useGraphAuthTokens();
  const queryClient = useQueryClient();

  const generateNewToken = async (chain: CHAIN) => {
    const result = await supabaseClient
      .from<definitions['graph_auth_tokens']>('graph_auth_tokens')
      .insert({
        user_id: user.id,
        chain,
      });
    if (result.error) {
      toast.error(result.error.message);
    } else {
      await queryClient.invalidateQueries('graph_auth_tokens');
      toast.success(`New token generated!`);
    }
  };

  const deleteGraphToken = async (id: string) => {
    const result = await supabaseClient
      .from<definitions['graph_auth_tokens']>('graph_auth_tokens')
      .delete()
      .match({ id: id });

    if (result.error) {
      toast.error(result.error.message);
    } else {
      await queryClient.invalidateQueries('graph_auth_tokens');
      toast.success(`Token deleted!`);
    }
  };

  return (
    <div className='collapse rounded-xl bg-base-300 shadow-xl'>
      <input type='checkbox' />
      <div className='collapse-title text-xl font-medium'>Authentication token</div>
      <div className='collapse-content'>
        {isLoading && <Skeleton count={1} />}
        {isError && <div>Error</div>}
        <div className={'grid grid-cols-3 space-y-1'}>
          {data &&
            data.data.map((token: definitions['graph_auth_tokens']) => (
              <>
                <div className={'col-span-2'}>
                  <div>{token.chain}</div>
                  <CopyToClipboard text={token.id} key={token.id}>
                    <div
                      className={'badge badge-lg badge-ghost cursor-pointer hover:badge-info'}
                      onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
                    >
                      <ClipboardCopyIcon className='inline w-4' />
                      <span className={''}>{token.id}</span>
                    </div>
                  </CopyToClipboard>
                </div>

                <div
                  className={'tooltip tooltip-bottom'}
                  data-tip={`${graphCliCommand({
                    type: 'auth',
                    chain: token.chain as CHAIN,
                    tokenId: token.id,
                  })}`}
                >
                  <CopyToClipboard
                    text={`${graphCliCommand({
                      type: 'auth',
                      chain: token.chain as CHAIN,
                      tokenId: token.id,
                    })}`}
                    key={token.id + 'graph'}
                  >
                    <div
                      className={'btn btn-primary btn-sm'}
                      onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
                    >
                      <ClipboardCopyIcon className='inline w-4' />
                      <span className={''}>Graph auth</span>
                    </div>
                  </CopyToClipboard>
                  <button
                    className='btn btn-warning btn-circle btn-sm ml-2'
                    onClick={() => deleteGraphToken(token.id)}
                  >
                    <XCircleIcon className='inline w-4' />
                  </button>
                </div>
              </>
            ))}
          <div className={'col-span-3 mt-2'}>
            <div className='dropdown'>
              <label tabIndex={0} className='btn m-1'>
                Generate token
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow'
              >
                {AVAILABLE_CHAINS.map((chain) => (
                  <li key={chain}>
                    <a onClick={() => generateNewToken(chain)}>{chain}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={'col-span-3 mt-2'}>
            <div className='text-xl font-medium'>Install the CLI</div>
            <div className='flex w-full flex-col border-opacity-50'>
              <div className='mockup-code'>
                <pre data-prefix='$'>
                  <code>npm install -g @graphprotocol/graph-cli</code>
                </pre>
              </div>
              <div className='divider'>OR</div>
              <div className='mockup-code'>
                <pre data-prefix='$'>
                  <code>yarn global add @graphprotocol/graph-cli</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
