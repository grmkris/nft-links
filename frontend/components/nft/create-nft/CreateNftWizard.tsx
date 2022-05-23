import { useWizard, Wizard } from 'react-use-wizard';
import React, { useState } from 'react';
import CreateNftStep1Metadata from './CreateNftStep1Metadata';
import CreateNftStep2SelectImage from './CreateNftStep2SelectImage';
import CreateNftStep3Config from './CreateNftStep3Config';
import { NftModel } from '../../../model/nftModel';
import {
  FastForwardIcon,
  RewindIcon,
  UploadIcon,
} from '@heroicons/react/solid';
import CreateNftStep4Finish from './CreateNftStep4Finish';

export default function CreateNftWizard() {
  const [nftMetadata, setNftMetadata] = useState<NftModel>({
    title: '',
    description: '',
    image: '',
  });
  const [createNftForm, setCreateNftForm] = useState<{
    metadata: string;
    active: boolean;
    selectedBlockchain: string;
    amount: number;
  }>({
    metadata: '',
    active: false,
    selectedBlockchain: '',
    amount: 0,
  });

  return (
    <div className='flex w-full flex-col items-center space-y-3'>
      <Wizard startIndex={0} footer={<Footer />} header={<Header />}>
        <CreateNftStep1Metadata
          setCreateNftForm={setCreateNftForm}
          createNftForm={createNftForm}
          setNftMetadata={setNftMetadata}
          nftMetadata={nftMetadata}
        />
        <CreateNftStep2SelectImage
          setCreateNftForm={setCreateNftForm}
          createNftForm={createNftForm}
          setNftMetadata={setNftMetadata}
          nftMetadata={nftMetadata}
        />
        <CreateNftStep3Config
          setCreateNftForm={setCreateNftForm}
          createNftForm={createNftForm}
        />
        <CreateNftStep4Finish
          setCreateNftForm={setCreateNftForm}
          createNftForm={createNftForm}
        />
      </Wizard>
    </div>
  );
}

const Header = () => {
  const { activeStep } = useWizard();
  return (
    <div className={'mt-4 flex flex-col items-center'}>
      <ul className='btn-group steps'>
        <li className={'step step-primary'}>Create metadata</li>
        <li className={activeStep >= 1 ? 'step step-primary' : 'step'}>
          Select image
        </li>
        <li className={activeStep >= 2 ? 'step step-primary' : 'step'}>
          Configure NFT
        </li>
        <li className={activeStep >= 3 ? 'step step-primary' : 'step'}>
          Finish
        </li>
      </ul>
    </div>
  );
};
const Footer = () => {
  const {
    nextStep,
    previousStep,
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
  } = useWizard();

  // return Text + icon
  function renderNextButtonText() {
    switch (activeStep) {
      case 0:
        return (
          <>
            Next <FastForwardIcon className={'h-4'} />{' '}
          </>
        );
      case 1:
        return (
          <>
            Upload <UploadIcon className={'h-4'} />{' '}
          </>
        );
      case 2:
        return <>Create NFT 🎉</>;
      case 3:
        return <>Finish 🏁</>;
    }
  }

  return (
    <div className={'flex w-full max-w-2xl flex-col items-center'}>
      <div className='btn-group m-2 grid w-4/5 grid-cols-2'>
        <button
          className={'btn btn-primary'}
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          <RewindIcon className={'h-4'} />
          Back
        </button>
        <button
          className={'btn btn-primary'}
          onClick={() => nextStep()}
          disabled={isLoading || isLastStep}
        >
          {renderNextButtonText()}
        </button>
      </div>
    </div>
  );
};
