import React from 'react';
import LabLayout from '@/layout/LabLayout';
import CreateNftWizard from '@/nft/create-nft/CreateNftWizard';

/**
 * Creating NFT works in multiple steps.
 * 1. User fills information about nfts metadata (title, description, image, additional json metadata)
 * 1.1 If image is not yet on ipfs, user can upload it
 * 2. User uploads nfts metadata to ipfs
 * 3. User selects on which blockchain to create nfts
 */

function CreateNFT() {
  return (
    <LabLayout>
      <div className='card mt-2 bg-base-200 shadow-xl'>
        <CreateNftWizard />
      </div>
    </LabLayout>
  );
}

export default CreateNFT;
