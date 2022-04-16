import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Link from 'next/link'
import React from 'react'

function NavbarLoginInfo() {
  const { user } = useUser()

  const logoutHandler = async () => {
    await supabaseClient.auth.signOut()
  }

  return (
    <div className="flex w-full items-center justify-between">
      <div className="hidden xl:block">
        <Link href={'/'} passHref>
          <div className="btn btn-ghost text-xl normal-case">NFT Link</div>
        </Link>
      </div>

      <div className="flex flex-col  items-center space-x-3 space-y-3 p-5 xl:flex-row  xl:space-y-0 xl:p-0">
        <p className="text-center text-base text-gray-400">
          Logged in as <span className="font-semibold text-black">{user?.email}</span>
        </p>
        <button
          className="rounded-full bg-indigo-500 px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-400 hover:text-black"
          onClick={logoutHandler}
        >
          Sign out
        </button>
      </div>
    </div>
  )
}

export default NavbarLoginInfo
