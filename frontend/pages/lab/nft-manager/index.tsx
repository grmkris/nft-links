import LabLayout from '@/layout/LabLayout';
import { GiftIcon } from '@heroicons/react/solid';
import { CodeIcon, TerminalIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function NftManager() {
  const cards = [
    {
      title: 'Deploy ERC-721 Collection',
      description:
        'Deploy your own ERC-721 collection of NFTs to the blockchain, NFTs will be deployed through your own wallet so you will be full owner of it. You will also be be able to verify your contract and get a custom subgrah for it' +
        'https://github.com/hashlips-lab/nft-erc721-collection',
      buttonText: 'Open',
      icon: <GiftIcon className='mt-1 h-6 w-6' />,
      link: 'lab/rewards',
    },
    {
      title: 'Deploy ERC-1155 Collection',
      description:
        'Create and distribute your NFTs in a simple way, free for users to use. Useful for event tickets, digital souvenir, loyalty points etc...',
      buttonText: 'Open',
      icon: <CodeIcon className='mt-1 h-6 w-6' />,
      link: 'lab/nfts/create',
    },
    {
      title: 'Renting NFTs',
      description:
        'Make your NFTs available for renting, you can set a price and the owner will be able to pay you for the NFTs. You can also set a time period for the NFTs to be available for renting.',
      buttonText: 'Open',
      icon: <TerminalIcon className='mt-1 h-6 w-6' />,
      link: 'lab/nft-manager',
    },
    {
      title: 'Staking NFTs',
      description:
        'Make your NFTs available for staking, users will be able to lock the NFTs and earn a reward for it. You can also set a time period for the NFTs to be available for staking.',
      buttonText: 'Open',
      icon: <CodeIcon className='mt-1 h-6 w-6' />,
      link: 'rewards/create',
    },
    {
      title: 'Analytics',
      description:
        'Integrate analytics (https://docs.dune.com/) with NFTs and have an overview of your NFTs.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Open',
      icon: <CodeIcon className='mt-1 h-6 w-6' />,
      link: 'rewards/create',
    },
  ];

  return (
    <LabLayout>
      <div className='grid grid-cols-1 justify-center gap-12 py-4 text-center md:grid-cols-2 md:px-12 '>
        {cards.map((nft, index) => (
          <div className='card bg-base-200 shadow-xl' key={index}>
            <div className='card-body'>
              <div className={`card-title`}>
                {nft.title}
                {nft.icon}
              </div>
              <p>{nft.description}</p>
              <div className='card-actions justify-end'>
                <Link href={nft.link} passHref>
                  <button className='btn btn-primary'>{nft.buttonText}</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LabLayout>
  );
}

export default NftManager;
