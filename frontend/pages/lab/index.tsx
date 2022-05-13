import LabLayout from '../../components/layout/LabLayout'
import {CodeIcon, TerminalIcon} from '@heroicons/react/outline'
import {GiftIcon} from "@heroicons/react/solid";
import Link from "next/link";

function Info() {
  const cards = [
    {
      title: 'Reward system',
      description:
        'Create a reward system for tasks that you want to do. You can reward your users with tokens or other assets.',
      buttonText: 'Reward system',
      icon: <GiftIcon className="mt-1 h-6 w-6"/>,
      color: 'indigo',
      link: 'lab/rewards'
    },
    {
      title: 'NFT creation',
      description:
        'Create a NFT that you want to sell or distribute. You can reward your users with tokens or other assets.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate NFTs',
      icon: <CodeIcon className="mt-1 h-6 w-6"/>,
      color: 'indigo',
      link: 'lab/nfts/create'
    },
    {
      title: 'NFT Minting',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <TerminalIcon className="mt-1 h-6 w-6"/>,
      color: 'cyan',
      link: 'rewards/create'
    },
    {
      title: 'Dummy text 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <CodeIcon className="mt-1 h-6 w-6"/>,
      color: 'amber',
      link: 'rewards/create'
    },
    {
      title: 'Dummy text 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <CodeIcon className="mt-1 h-6 w-6"/>,
      color: 'pink',
      link: 'rewards/create'
    }
  ]

  return (
    <LabLayout>
      <div className="grid grid-cols-1 justify-center gap-12 py-4 text-center md:grid-cols-2 md:px-12 ">
        {cards.map((nft, index) => (
          <div
            className="card bg-base-200 shadow-xl"
            key={index}
          >
            <div className="card-body">
              <div className={`card-title`}>
                {nft.title}{nft.icon}
              </div>
              <p>{nft.description}</p>
              <div className="card-actions justify-end">
                <Link href={nft.link}>
                  <button className="btn btn-primary">{nft.buttonText}</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LabLayout>
  )
}

export default Info
