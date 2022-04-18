import CreateNFTLayout from '../../../components/layout/CreateNFTLayout'
import { CodeIcon, TerminalIcon } from '@heroicons/react/outline'

function Info() {
  const nftInfo = [
    {
      title: 'Smart contract',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <CodeIcon className="mt-1 h-6 w-6" />,
      color: 'indigo'
    },
    {
      title: 'NFT Minting',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <TerminalIcon className="mt-1 h-6 w-6" />,
      color: 'cyan'
    },
    {
      title: 'Dummy text 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <CodeIcon className="mt-1 h-6 w-6" />,
      color: 'amber'
    },
    {
      title: 'Dummy text 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <CodeIcon className="mt-1 h-6 w-6" />,
      color: 'pink'
    }
  ]

  return (
    <CreateNFTLayout>
      <div className="mt-8 grid grid-cols-1 justify-center gap-12 py-4 text-center md:grid-cols-2 md:px-12 ">
        {nftInfo.map((nft, index) => (
          <div className="flex flex-col space-y-3 rounded-lg border-2 border-opacity-25 bg-white p-5 hover:bg-slate-50 dark:border-slate-500 dark:bg-gray-700">
            <div
              className={`flex justify-center space-x-4 font-bold text-${nft.color}-600 dark:text-${nft.color}-400`}
            >
              <div className="text-lg">{nft.title}</div>
              {nft.icon}
            </div>

            <hr className="dark:border-slate-500" />

            <div>
              <p className="dark:text-gray-300">{nft.description}</p>
            </div>

            <div className="text-sm text-green-500 dark:text-green-600">
              <p>{nft.bottomText}</p>
            </div>

            <div>
              <button
                className={`rounded-lg bg-${nft.color}-500 py-2 px-12 text-white hover:bg-${nft.color}-600 dark:bg-${nft.color}-700 dark:hover:bg-${nft.color}-800 md:px-24`}
              >
                {nft.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </CreateNFTLayout>
  )
}

export default Info
