import {supabaseClient} from '@supabase/supabase-auth-helpers/nextjs';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import {Auth} from '@supabase/ui';

export default function AuthComponent() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  return (
    <div className='grid h-1/3 grid-cols-1 md:h-screen md:grid-cols-3 md:space-x-2 '>
      <div
        className='flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-indigo-900 via-indigo-500 to-rose-500 p-5 md:space-y-8 '>
        <div>
          <h1
            className='text-center text-lg font-bold text-gray-300 transition-all duration-300 hover:text-white md:text-4xl'>
            Welcome to EmanuelT2 Management System
          </h1>
          <h3 className=' text-center text-xs text-gray-400 transition-all duration-300 hover:text-white'>
            Sign in to continue to Dashboard
          </h3>
        </div>

        <div
          className=' rounded-lg bg-gradient-to-br from-violet-900 via-violet-500 to-orange-500 p-1  transition-all duration-300 hover:scale-105'>
          <div className=' relative h-56 w-56 rounded-lg md:h-72 md:w-64 lg:h-96 lg:w-96'>
            <Image
              layout={'fill'}
              src={
                '/t2.png'
              }
              alt='Lazy Lion'
            />
          </div>
        </div>
      </div>

      <div className={"col-span-2"}>
        <div className="grid place-items-center h-screen mx-2 lg:w-1/2 w-full lg:mx-auto">
          <Auth
            supabaseClient={supabaseClient}
            providers={['google', 'github', 'discord', 'twitter']}
            socialLayout='horizontal'
            socialButtonSize='xlarge'
            redirectTo={location}
          />
        </div>
      </div>
    </div>
  );
}
