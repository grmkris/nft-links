import React, { useState } from 'react';
import { PhotographIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ClipboardCopyIcon } from '@heroicons/react/solid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { useQueryClient } from 'react-query';
import { useFilePicker } from 'use-file-picker';

const ImageUpload = (props: {
  onFileSelected?: (pickedFile: string) => void;
}) => {
  const { accessToken } = useUser();
  const [fileIpfsHash, setFileIpfsHash] = useState();
  const queryClient = useQueryClient();

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: true,
    limitFilesConfig: { max: 1 },
    // minFileSize: 0.1, // in megabytes
    maxFileSize: 50,
  });

  const uploadToServer = async () => {
    const body = new FormData();
    body.append('file', filesContent[0].content);
    const result = await axios.post('/api/ipfs/upload', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(result);
    if (result.data.error) {
      toast.error(result.data.error.message);
      return;
    }
    toast.info('File uploaded to IPFS, hash: ' + result.data.data[0].id);
    setFileIpfsHash(result.data.data[0].id);
    if (props.onFileSelected) {
      props.onFileSelected(result.data.data[0].id);
    }
    await queryClient.invalidateQueries('files');
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {errors && <div>{errors}</div>}
      <div className='flex flex-col items-center hover:cursor-pointer'>
        <div
          className={`mx-2 flex flex h-[340px] w-full flex-col items-center rounded-lg bg-gray-50 bg-neutral p-5 shadow-2xl`}
          onClick={() => {
            console.log('clicked');
            openFileSelector();
          }}
        >
          {filesContent.length > 0 ? (
            filesContent.map((file, index) => (
              <Image
                key={index}
                width={300}
                height={300}
                src={file.content}
                alt='Preview'
                className='rounded-lg'
              />
            ))
          ) : (
            <div className='mt-20 grid place-items-center'>
              <PhotographIcon className='h-20 w-20' />
              <p className='w-full text-center'>Please pick an image</p>
              <p className='w-2/3 text-center text-xs'>
                Image must be in format .jpg, .jpeg or .png
              </p>
            </div>
          )}
        </div>
      </div>
      {filesContent.length > 0 && !fileIpfsHash && (
        <label
          className={'btn btn-secondary mt-2 w-full'}
          onClick={() => uploadToServer()}
        >
          <PhotographIcon className='mr-2 h-6 w-6' />
          Upload
        </label>
      )}
      {filesContent.length > 0 && fileIpfsHash && (
        <CopyToClipboard text={fileIpfsHash}>
          <div
            className={'btn btn-outline truncate'}
            onClick={() =>
              toast.info('Copied to clipboard', { autoClose: 500 })
            }
          >
            {' '}
            <ClipboardCopyIcon className='w-6' /> {fileIpfsHash}
          </div>
        </CopyToClipboard>
      )}
    </>
  );
};

export default ImageUpload;
