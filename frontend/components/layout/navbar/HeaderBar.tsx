import React from 'react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { MenuIcon } from '@heroicons/react/solid';
import Image from 'next/image';

function HeaderBar() {
  const logoutHandler = async () => await supabaseClient.auth.signOut();

  return (
    <div className='navbar bg-base-200'>
      <label htmlFor='my-drawer-2' className='btn btn-ghost btn-circle drawer-button lg:hidden'>
        <MenuIcon className={'h-6'} />
      </label>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl normal-case'>EmanuelT2</a>
      </div>
      <div className='flex-none'>
        <div className='dropdown-end dropdown'>
          <label tabIndex={0} className='avatar btn btn-ghost btn-circle'>
            <Image
              className={'w-10 rounded-full'}
              src='/t2.png'
              layout={'fill'}
              alt={'Avatar'}
            />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
          >
            <li onClick={logoutHandler}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
