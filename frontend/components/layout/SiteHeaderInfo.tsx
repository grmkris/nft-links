import React from 'react'
import NavbarMobile from '../navbar/NavbarMobile'
import NavbarLoginInfo from '../navbar/NavbarLoginInfo'

function SiteHeaderInfo() {
  return (
    <>
      <div className="supports-backdrop-blur:bg-white/95 sticky top-0 z-50 shadow-xl  hidden h-16 w-full flex-row justify-items-end space-y-3 px-8 py-6 backdrop-blur transition-colors duration-500 bg-base-300 xl:flex ">
        <NavbarLoginInfo />
      </div>

      <div className="xl:hidden">
        <NavbarMobile />
      </div>
    </>
  )
}

export default SiteHeaderInfo
