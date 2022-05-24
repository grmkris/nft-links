import { CodeIcon, TerminalIcon } from '@heroicons/react/outline';
import { GiftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import LabLayout from '@/layout/LabLayout';

function Info() {
  const cards = [
    {
      title: 'Reward system',
      description:
        'Create a reward system for tasks that you want to do. You can reward your users with tokens or other assets.',
      buttonText: 'Open',
      icon: <GiftIcon className='mt-1 h-6 w-6' />,
      link: 'lab/rewards',
    },
    {
      title: 'Simple NFT',
      description:
        'Create and distribute your NFTs in a simple way, free for users to use. Useful for event tickets, digital souvenir, loyalty points etc...',
      buttonText: 'Open',
      icon: <CodeIcon className='mt-1 h-6 w-6' />,
      link: 'lab/nfts/create',
    },
    {
      title: 'NFT Manager',
      description:
        'Import or Deploy your own collection, create a space for collections, allow for advanced modifications to the contract and more... ',
      buttonText: 'Open',
      icon: <TerminalIcon className='mt-1 h-6 w-6' />,
      link: 'lab/nft-manager',
    },
    {
      title: 'Dummy text 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Open',
      icon: <CodeIcon className='mt-1 h-6 w-6' />,
      link: 'rewards/create',
    },
    {
      title: 'Dummy text 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
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

export default Info;
