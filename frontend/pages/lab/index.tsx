import { CodeIcon } from '@heroicons/react/outline';
import { GiftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import LabLayout from '@/layout/LabLayout';

function Info() {
  const cards = [
    {
      title: 'Promotion system',
      description:
        'Create a promotion system for tasks that you want to do. You can reward your users with tokens or other assets.',
      buttonText: 'Open',
      icon: <GiftIcon className='mt-1 h-6 w-6' />,
      link: 'lab/rewards',
    },
    {
      title: 'Coupon Creator',
      description:
        'Create and distribute new reward coupons for your users. You can use the coupon to reward them with tokens or other assets.',
      buttonText: 'Open',
      icon: <CodeIcon className='mt-1 h-6 w-6' />,
      link: 'lab/nfts/create',
    }
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
