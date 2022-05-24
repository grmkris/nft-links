import { useWizard, Wizard } from 'react-use-wizard';
import React, { useState } from 'react';
import { NftModel } from '../../../model/nftModel';
import { FastForwardIcon, RewindIcon } from '@heroicons/react/solid';
import CreateNftStep4Finish from './CreateNftStep4Finish';
import CreateNftStep2Metadata from '@/nft/create-nft/CreateNftStep2Metadata';
import CreateNftStep3SelectImage from '@/nft/create-nft/CreateNftStep3SelectImage';
import CreateNftStep1Config from '@/nft/create-nft/CreateNftStep1Config';
import { useRouter } from 'next/router';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { toast } from 'react-toastify';
import { useQueryClient } from 'react-query';
import { useUser } from '@supabase/supabase-auth-helpers/react';

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
      <Wizard
        startIndex={0}
        footer={<Footer createNftForm={createNftForm} nftMetadata={nftMetadata} />}
        header={<Header />}
      >
        <CreateNftStep1Config setCreateNftForm={setCreateNftForm} createNftForm={createNftForm} />
        <CreateNftStep2Metadata
          setCreateNftForm={setCreateNftForm}
          createNftForm={createNftForm}
          setNftMetadata={setNftMetadata}
          nftMetadata={nftMetadata}
        />
        <CreateNftStep3SelectImage
          setCreateNftForm={setCreateNftForm}
          createNftForm={createNftForm}
          setNftMetadata={setNftMetadata}
          nftMetadata={nftMetadata}
        />
        <CreateNftStep4Finish setCreateNftForm={setCreateNftForm} createNftForm={createNftForm} />
      </Wizard>
    </div>
  );
}

const Header = () => {
  const { activeStep } = useWizard();
  return (
    <div className={'mt-4 flex flex-col items-center'}>
      <ul className='btn-group steps'>
        <li className={'step step-primary'}>Configure NFT</li>
        <li className={activeStep >= 1 ? 'step step-primary' : 'step'}>Metadata</li>
        <li className={activeStep >= 2 ? 'step step-primary' : 'step'}>Image</li>
        <li className={activeStep >= 3 ? 'step step-primary' : 'step'}>Finish</li>
      </ul>
    </div>
  );
};

const Footer = (props: { createNftForm; nftMetadata }) => {
  const { nextStep, previousStep, isLoading, isLastStep, isFirstStep, activeStep } = useWizard();
  const router = useRouter();

  async function finishWithWizard() {
    await router.push('/lab/nfts');
  }

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
            Next <FastForwardIcon className={'h-4'} />{' '}
          </>
        );
      case 2:
        return <>Create 🎉</>;
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
          onClick={() => (isLastStep ? finishWithWizard() : nextStep())}
          disabled={isLoading}
        >
          {renderNextButtonText()}
        </button>
      </div>
    </div>
  );
};
