import React from 'react'
import NavbarMobile from '../navbar/NavbarMobile'
import NavbarLoginInfo from '../navbar/NavbarLoginInfo'

function SiteHeaderInfo() {
  return (
    <>
      <div className="supports-backdrop-blur:bg-white/95 sticky top-0 z-50  hidden h-16 w-full flex-row justify-items-end space-y-3 border-b-2 border-slate-900/10 bg-white px-8 py-6 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:border-slate-900 dark:bg-slate-900 xl:flex ">
        <NavbarLoginInfo />
      </div>

      <div className="xl:hidden">
        <NavbarMobile />
      </div>
    </>
  )
}

export default SiteHeaderInfo
