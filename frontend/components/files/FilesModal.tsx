import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import { PencilIcon, PlusIcon } from '@heroicons/react/solid';
import ImageUpload from '../nft/ImageUpload';

export const FilesModal = (props: {
  group?: { name: string; description: string; image: string };
}) => {
  return (
    <>
      <label htmlFor='file-upload-modal' className='btn btn-primary m-auto w-2/3 md:m-0 md:w-1/3'>
        {props.group ? <PencilIcon className={'h-5 w-5'} /> : <PlusIcon className={'h-5 w-5'} />}
      </label>
      <input type='checkbox' id='file-upload-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h2 className={'mb-2 text-2xl'}>Upload new file</h2>
          <ImageUpload />
          <label htmlFor='file-upload-modal' className='btn btn-primary btn-block mt-2'>
            Close
          </label>
        </div>
      </div>
    </>
  );
};
