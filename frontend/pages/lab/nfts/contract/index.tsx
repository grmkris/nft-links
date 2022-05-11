import React from 'react'
import CreateNFTLayout from '../../../../components/layout/LabLayout'
import { CubeIcon } from '@heroicons/react/outline'

function Contract() {
  return (
    <CreateNFTLayout>
      <div className="mt-8 grid grid-cols-1  justify-center gap-12 px-12 py-4 text-center md:grid-cols-2">
        <div className="flex flex-col space-y-12">
          <div className="text-3xl text-black dark:text-white">
            <h1>Generate contract</h1>
          </div>
          <div className="dark:text-gray-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus veniam qui
              id sint! Maxime illo expedita cum minus, autem eius unde dolor, magni maiores eaque
              ipsam quaerat, omnis laboriosam. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quam rem iure blanditiis consequuntur beatae laborum aliquam animi reiciendis
              eius voluptatibus quasi quae similique earum ullam culpa iste, quidem deleniti
              sapiente.
            </p>
          </div>

          <div>
            <button className="rounded-lg bg-green-500 px-12 py-4 text-white hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800">
              Button
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <CubeIcon className="h-96 w-96 " />
        </div>
      </div>
    </CreateNFTLayout>
  )
}

export default Contract
