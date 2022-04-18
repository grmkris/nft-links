import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import NavbarLoginInfo from './NavbarLoginInfo'
import { UserIcon } from '@heroicons/react/outline'
import ToggleTheme from './ToggleTheme'

function NavbarMobile() {
  return (
    <div className="supports-backdrop-blur:bg-white/9 navbar sticky top-0 z-50  border-b-2 border-slate-900/10 bg-white text-gray-600 backdrop-blur transition-colors duration-500  dark:border-slate-50/[0.06] dark:border-slate-900  dark:bg-slate-900 dark:text-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-white p-2 shadow dark:border-slate-50/[0.06] dark:bg-slate-900"
          >
            <Menu />
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href={'/'} passHref>
          <div className="btn btn-ghost text-xl normal-case">NFT Link</div>
        </Link>
      </div>
      <div className="navbar-end">
        <ToggleTheme />

        <div className="dropdown dropdown-end">
          <label tabIndex={1} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <UserIcon className="h-5 w-5" />
              <span className="badge indicator-item badge-xs badge-primary" />
            </div>
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu rounded-box menu-compact mt-3  border-2 bg-white px-5 shadow dark:border-slate-50/[0.06] dark:bg-slate-900"
          >
            <NavbarLoginInfo />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobile
