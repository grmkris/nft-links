import { Auth } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AuthComponent() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    setLocation(window.location.href)
  })

  return (
    <div className="grid h-1/3 grid-cols-1 md:h-screen md:grid-cols-3 md:space-x-2 ">
      <div className="flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-indigo-900 via-indigo-500 to-rose-500 p-5 md:space-y-8 ">
        <div>
          <h1 className="text-center text-lg font-bold text-gray-300 transition-all duration-300 hover:text-white md:text-4xl">
            Welcome to NFT Link
          </h1>
          <h3 className=" text-center text-xs text-gray-400 transition-all duration-300 hover:text-white">
            Sign in to continue to Dashboard
          </h3>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-violet-900 via-violet-500 to-orange-500 p-1 transition-all duration-300 hover:scale-105">
          <Image
            src={
              'https://d1don5jg7yw08.cloudfront.net/filters:quality(70)/nft-images/20211003/Lazy_Lion_1633263209277.jpg'
            }
            alt="Lazy Lion"
            className=" relative h-56 w-56 rounded-lg md:h-72 md:w-64 lg:h-96 lg:w-96"
          />
        </div>
      </div>

      <div className="col-span-2">
        <div className="flex flex-col items-center justify-center bg-white p-5">
          <div className="w-full rounded-xl bg-gray-100 p-5 text-sm shadow-lg shadow-gray-200 md:text-base lg:order-2">
            Lorem, ipsum dolor sit amet consectetur{' '}
            <span className="text-semibold text-rose-500 underline decoration-2	underline-offset-2	">
              adipisicing elit.
            </span>{' '}
            Libero ducimus praesentium quod quae, obcaecati officiis et laudantium illo eius ad
            magnam, vitae ipsa repudiandae recusandae magni. Adipisci itaque fuga totam. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Assumenda unde tenetur esse optio quasi
            incidunt numquam repellat, earum, nisi officia qui cumque pariatur eligendi rem sapiente
            architecto iusto reiciendis. Unde?
          </div>
          <div className="mt-8 flex min-w-fit  flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:px-16 sm:py-4 md:px-8 lg:order-1  ">
            <Auth
              supabaseClient={supabaseClient}
              providers={['google', 'github', 'discord', 'twitter']}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
              redirectTo={location}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
