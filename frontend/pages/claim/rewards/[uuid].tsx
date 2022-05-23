import React, { useEffect, useRef, useState } from 'react';
import { supabaseServerClient } from '../../../utils/server/supabaseServer';
import Layout from '@/layout/Layout';
import NftCard from '@/nft/NftCard';
import { CheckCircleIcon, TableIcon } from '@heroicons/react/solid';
import { PhotographIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { definitions } from 'types/database';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps<
  definitions['reward_program'] & {
    reward_groups: Array<{
      groups: definitions['groups'] & { user_groups: Array<definitions['user_groups']> };
    }>;
  } & { reward_nft: Array<definitions['reward_nft'] & { nft: definitions['nfts'] }> }
> = async ({ query }) => {
  // Fetch data from external API
  const uuid = query.uuid;
  if (!uuid) {
    throw new Error('No uuid provided');
  }
  // get nfts information from supabase client, from from reward_program inner join  reward_group reward_nft
  const reward_program = await supabaseServerClient
    .from<
      definitions['reward_program'] & {
        reward_groups: Array<{
          groups: definitions['groups'] & { user_groups: Array<definitions['user_groups']> };
        }>;
      } & { reward_nft: Array<definitions['reward_nft'] & { nft: definitions['nfts'] }> }
    >('reward_program')
    .select(
      `
      *,
      reward_groups(groups(*, user_groups(*))),
      reward_nft(*, nft(*))
    `
    )
    .match({
      id: uuid,
    });

  // Pass data to the page via props
  const data = reward_program.data[0];
  return { props: data };
};

function ViewReward(data: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { accessToken } = useUser();
  const [file, setFile] = useState();
  const [claimedRewardStatus, setClaimedRewardStatus] = useState<{
    claimed: boolean;
    sum: number;
  }>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>();
  const filePickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const uploadToServer = async () => {
    const body = new FormData();
    body.append('file', file);
    const result = await axios.post('/api/reward/xlsx', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (result.data.error) {
      toast.error(result.data.error.message);
      return;
    }
    if (result.data.claimed) toast.success('Success! Task completed successfully.');
    else {
      toast.info('Not enough points');
    }
    setClaimedRewardStatus(result.data);
  };

  const pickFileHandler = () => {
    filePickerRef.current?.click();
  };

  const pickedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let pickedFile;
    if (
      (event.target as HTMLInputElement).files &&
      (event.target as HTMLInputElement).files.length === 1
    ) {
      pickedFile = (event.target as HTMLInputElement).files[0];
      setFile(pickedFile);
    } else {
      setPreviewUrl(null);
    }
  };
  return (
    <Layout>
      <div className='m-10 grid place-items-center'>
        <div className={'prose'}>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <p>Created: {new Date(data.created_at).toLocaleString()}</p>
        </div>
        <>
          <label
            htmlFor='file-upload-modal'
            className='btn btn-primary m-auto w-2/3 md:m-0 md:w-1/3'
            onClick={() => {
              console.log('asdf');
            }}
          >
            Claim
          </label>
          <input type='checkbox' id='file-upload-modal' className='modal-toggle' />
          <div className='modal modal-bottom sm:modal-middle'>
            <div className='modal-box'>
              <h2 className={'text-2xl'}>Upload new excel</h2>
              <>
                <div className='relative mx-auto my-8 w-full hover:cursor-pointer'>
                  <input
                    ref={filePickerRef}
                    className='hidden'
                    type='file'
                    accept='.xlsx'
                    onChange={pickedHandler}
                  />
                  <div
                    className={`m-auto flex h-[440px] max-w-md items-center rounded-lg bg-gray-50 p-5 shadow-2xl dark:bg-slate-700`}
                    onClick={pickFileHandler}
                  >
                    <div className='flex w-full flex-col items-center justify-center space-y-2'>
                      <TableIcon className='h-20 w-20' />
                      <p className='w-full text-center'>Please pick an excel file</p>
                      <p className='w-2/3 text-center text-xs text-gray-400'>
                        File must be .xlsx format
                      </p>
                    </div>
                  </div>
                </div>
                {previewUrl && !claimedRewardStatus && (
                  <label className={'btn btn-secondary'} onClick={() => uploadToServer()}>
                    <PhotographIcon className='mr-2 h-6 w-6' />
                    Upload
                  </label>
                )}
                {previewUrl &&
                  claimedRewardStatus &&
                  (!claimedRewardStatus.claimed ? (
                    <div className='alert alert-error shadow-lg'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 flex-shrink-0 stroke-current'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span>Error! Task failed failed.</span>
                      </div>
                    </div>
                  ) : (
                    <div className='alert alert-success shadow-lg'>
                      <div>
                        <CheckCircleIcon className={'w-6'} />
                        <span>Success! Task completed successfully.</span>
                      </div>
                    </div>
                  ))}
              </>
              <label htmlFor='file-upload-modal' className='btn btn-primary btn-block mt-2'>
                Close
              </label>
            </div>
          </div>
        </>
      </div>
      <div className='divider text-lg text-success'>Reward</div>
      <div className='grid place-items-center'>
        {data.reward_nft[0] && <NftCard nft={data.reward_nft[0].nft} />}
      </div>
    </Layout>
  );
}

export default ViewReward;
