import CreateNFTLayout from '../../../components/layout/CreateNFTLayout'
import { CodeIcon, TerminalIcon } from '@heroicons/react/outline'

function Info() {
  return (
    <CreateNFTLayout>
      <div className="mt-8 grid grid-cols-1 justify-center gap-12 py-4 text-center md:grid-cols-2 md:px-12 ">
        <div className="flex flex-col space-y-3 rounded-lg border-2 border-opacity-25 bg-white p-5 hover:bg-slate-50">
          <div className="flex justify-center space-x-4 font-bold text-indigo-600">
            <div className="text-lg">Smart contract</div>
            <CodeIcon className="mt-1 h-6 w-6" />
          </div>

          <hr />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur
              aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis
              dolor, nostrum nihil quaerat est, doloremque mollitia possimus.
            </p>
          </div>

          <div className="text-sm text-green-500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>

          <div>
            <button className="rounded-lg bg-indigo-500 py-2 px-12 text-white hover:bg-indigo-600 md:px-24">
              Generate contract
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-3 rounded-lg border-2 border-opacity-25 bg-white p-5 hover:bg-slate-50">
          <div className="flex justify-center space-x-4 font-bold text-cyan-600">
            <div className="text-lg">NFT Minting</div>
            <TerminalIcon className="mt-1 h-6 w-6" />
          </div>

          <hr />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur
              aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis
              dolor, nostrum nihil quaerat est, doloremque mollitia possimus.
            </p>
          </div>

          <div className="text-sm text-green-500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>

          <div>
            <button className="rounded-lg bg-cyan-500 px-24 py-2 text-white hover:bg-cyan-600">
              Mint NFT
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-3 rounded-lg border-2 border-opacity-25 bg-white p-5 hover:bg-slate-50">
          <div className="flex justify-center space-x-4 font-bold text-amber-600">
            <div className="text-lg">Dummy text 1</div>
            <CodeIcon className="mt-1 h-6 w-6" />
          </div>

          <hr />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur
              aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis
              dolor, nostrum nihil quaerat est, doloremque mollitia possimus.
            </p>
          </div>

          <div className="text-sm text-green-500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>

          <div>
            <button className="rounded-lg bg-amber-500 px-24 py-2 text-white hover:bg-amber-600">
              Mint NFT
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-3 rounded-lg border-2 border-opacity-25 bg-white p-5 hover:bg-slate-50">
          <div className="flex justify-center space-x-4 font-bold text-pink-600">
            <div className="text-lg">Dummy text 2</div>
            <CodeIcon className="mt-1 h-6 w-6" />
          </div>

          <hr />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur
              aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis
              dolor, nostrum nihil quaerat est, doloremque mollitia possimus.
            </p>
          </div>

          <div className="text-sm text-green-500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>

          <div>
            <button className="rounded-lg bg-pink-500 px-24 py-2 text-white hover:bg-pink-600">
              Mint NFT
            </button>
          </div>
        </div>
      </div>
    </CreateNFTLayout>
  )
}

export default Info
