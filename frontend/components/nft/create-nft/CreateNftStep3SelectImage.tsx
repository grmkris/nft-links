import React from 'react';
import { useWizard } from 'react-use-wizard';
import ImageUpload from '../ImageUpload';
import { useFiles } from 'hooks/useFiles';
import Image from 'next/image';
import { IPFS_GATEWAY } from '../../../utils/constants';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { useQueryClient } from 'react-query';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

export default function CreateNftStep3SelectImage(props: {
  createNftForm;
  setCreateNftForm;
  nftMetadata;
  setNftMetadata;
}) {
  const { accessToken } = useUser();
  const { data: ipfsFiles, isLoading: isLoadingFiles, error: isErrorLoadingFiles } = useFiles();
  const { handleStep } = useWizard();
  const queryClient = useQueryClient();
  const { user } = useUser();

  const createNft = async () => {
    const toastId = toast.info('Uploading to server...', {
      position: 'top-right',
      isLoading: true,
    });
    const body = new FormData();
    body.append('json', JSON.stringify(props.nftMetadata));
    const metadataResult = await axios.post('/api/ipfs/upload', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(metadataResult);
    await toast.dismiss(toastId);
    if (metadataResult.data.error) {
      toast.error(metadataResult.data.error.message);
      return;
    }
    toast.info('Metadata created');
    props.setCreateNftForm({
      ...props.createNftForm,
      metadata: metadataResult.data.data[0].id,
    });
    console.log(props.createNftForm);
    const result = await supabaseClient.from('nfts').insert({
      metadata: metadataResult.data.data[0].id,
      limit: props.createNftForm.amount,
      active: props.createNftForm.active,
      chain: props.createNftForm.selectedBlockchain,
      name: props.nftMetadata.title,
      user: user.id,
    });
    toast.info('NFT Created', result);
    console.log(result);
    await queryClient.invalidateQueries('nfts');
    await queryClient.invalidateQueries('files');
  };

  handleStep(async () => {
    if (props.createNftForm.metadata !== '') {
      await toast.warn('Metadata empty, please fill in the metadata');
      return;
    }
    await createNft();
  });

  return (
    <div className='flex w-full flex-col items-center space-y-3'>
      <div>
        <ImageUpload
          onFileSelected={async (hash: string) => {
            await toast.info('TEST Uploading to IPFS...' + hash);
            props.setNftMetadata({
              ...props.nftMetadata,
              image: hash,
            });
          }}
        />
      </div>

      <div className='divider m-auto'>OR</div>

      <div className='grid w-full place-items-center'>
        <label
          className='cursor-pointer	rounded-full px-2 py-3  text-center font-bold text-accent underline decoration-accent decoration-2 underline-offset-2 hover:text-accent-focus  sm:w-1/3 md:w-1/2'
          htmlFor='image-selector-modal'
        >
          Pick from album
        </label>
      </div>
      <input type='checkbox' id='image-selector-modal' className='modal-toggle' />
      <label
        htmlFor='image-selector-modal'
        className='modal modal-bottom cursor-pointer sm:modal-middle'
      >
        <label className='modal-box relative bg-base-300' htmlFor=''>
          <h3 className='text-lg font-bold'>Select one of your uploaded images</h3>
          <div className='h-full '>
            <div className='flex flex-wrap'>
              {isLoadingFiles ? (
                <div className='flex h-full w-full items-center justify-center'>
                  <div className='spinner'></div>
                </div>
              ) : isErrorLoadingFiles ? (
                <div className='flex h-full w-full items-center justify-center'>
                  <div className='text-red-500'>{isErrorLoadingFiles}</div>
                </div>
              ) : (
                <div className='carousel-center carousel rounded-box max-w-md space-x-4 bg-neutral p-4'>
                  {ipfsFiles.data.map((file) => (
                    <div
                      className='carousel-item hover:cursor-pointer hover:opacity-80'
                      key={file.id}
                    >
                      <Image
                        alt={file.id}
                        onClick={() => {
                          props.setNftMetadata({
                            ...props.nftMetadata,
                            image: file.id,
                          });
                          console.log(props.nftMetadata);
                          document.getElementById('image-selector-modal').click();
                        }}
                        src={`${IPFS_GATEWAY} ${file.id}`}
                        width={200}
                        height={200}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}
