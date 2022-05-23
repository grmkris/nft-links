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

export default function CreateNftStep2SelectImage(props: {
  createNftForm;
  setCreateNftForm;
  nftMetadata;
  setNftMetadata;
}) {
  const { accessToken } = useUser();
  const { data: ipfsFiles, isLoading: isLoadingFiles, error: isErrorLoadingFiles } = useFiles();
  const { handleStep } = useWizard();
  const queryClient = useQueryClient();

  const uploadToServer = async () => {
    const toastId = toast.info('Uploading to server...', {
      position: 'top-right',
      isLoading: true,
    });
    const body = new FormData();
    body.append('json', JSON.stringify(props.nftMetadata));
    const result = await axios.post('/api/ipfs/upload', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(result);
    await toast.dismiss(toastId);
    if (result.data.error) {
      toast.error(result.data.error.message);
      return;
    }
    toast.info('Metadata created');
    props.setCreateNftForm({
      ...props.createNftForm,
      metadata: result.data.data[0].id,
    });
    await queryClient.invalidateQueries('files');
  };

  // Async function
  handleStep(async () => {
    if (props.createNftForm.metadata !== '') {
      return;
    }
    await uploadToServer();
  });

  return (
    <div className='flex w-full flex-col items-center space-y-3'>
      <div>
        <ImageUpload />
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
