import React from 'react';
import { ClipboardCopyIcon, PencilIcon, PlusIcon } from '@heroicons/react/solid';
import { CHAIN, getSubgraphFullname, graphCliCommand } from '@/graph/graph.utils';
import { toast } from 'react-toastify';
import { definitions } from 'types/database';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';

export const SubgraphActionsModal = (props: { subgraph: definitions['graph_projects'] }) => {
  const { subgraph } = props;
  const createCommand = `${graphCliCommand({
    type: 'create',
    chain: subgraph.chain as CHAIN,
  })} ${getSubgraphFullname(subgraph.workspace, subgraph.name)}`;
  const initCommand = `${graphCliCommand({
    type: 'init',
    chain: subgraph.chain as CHAIN,
  })} ${getSubgraphFullname(subgraph.workspace, subgraph.name)}`;
  const deployCommand = `${graphCliCommand({
    type: 'deploy',
    chain: subgraph.chain as CHAIN,
  })} ${getSubgraphFullname(subgraph.workspace, subgraph.name)}`;

  return (
    <>
      <label htmlFor='subgraph-actions-modal' className='btn btn-primary'>
        {subgraph ? <PencilIcon className={'h-5 w-5'} /> : <PlusIcon className={'h-5 w-5'} />}
      </label>
      <input type='checkbox' id='subgraph-actions-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box sm:w-11/12 sm:max-w-5xl'>
          <label
            htmlFor='subgraph-actions-modal'
            className='btn btn-circle btn-sm absolute right-2 top-2'
          >
            ✕
          </label>
          <div className='flex w-full flex-col'>
            <div className={'card rounded-box'}>
              <div>
                <CopyToClipboard text={createCommand}>
                  <button
                    className={'btn btn-sm m-2'}
                    onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
                  >
                    <ClipboardCopyIcon className='inline w-4' />
                    Init
                  </button>
                </CopyToClipboard>
                <div className='mockup-code'>
                  <pre data-prefix='$'>
                    <code>{initCommand}</code>
                  </pre>
                </div>
              </div>
              <div>
                <CopyToClipboard text={initCommand}>
                  <button
                    className={'btn btn-sm m-2'}
                    onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
                  >
                    <ClipboardCopyIcon className='inline w-4' /> Create
                  </button>
                </CopyToClipboard>
                <div className='mockup-code'>
                  <pre data-prefix='$'>
                    <code>{initCommand}</code>
                  </pre>
                </div>
              </div>
              <div>
                <CopyToClipboard text={deployCommand}>
                  <button
                    className={'btn btn-sm m-2'}
                    onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
                  >
                    <ClipboardCopyIcon className='inline w-4' /> Deploy
                  </button>
                </CopyToClipboard>
                <div className='mockup-code'>
                  <pre data-prefix='$'>
                    <code>{deployCommand}</code>
                  </pre>
                </div>
              </div>
            </div>
            <div className='divider'>OR</div>
            <div className='card rounded-box grid h-20 bg-base-300'>
              <h2 className={'p-2 text-xl'}>Self host</h2>
              <Link
                href={`https://github.com/graphprotocol/graph-node/blob/master/docker/docker-compose.yml`}
              >
                <a className='clip link-primary p-2' target={'_blank'}>
                  https://github.com/graphprotocol/graph-node/blob/master/docker/docker-compose.yml
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
