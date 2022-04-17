import React from 'react'
import NavbarMobile from '../navbar/NavbarMobile'
import NavbarLoginInfo from '../navbar/NavbarLoginInfo'

function SiteHeaderInfo() {
  return (
    <>
      <div className="sticky top-0 z-50  hidden  h-16  w-full flex-row justify-items-end space-y-3 border-b-2 bg-white px-8 py-6 xl:flex">
        <NavbarLoginInfo />
      </div>

      <div className="xl:hidden">
        <NavbarMobile />
      </div>
    </>
  )
}

export default SiteHeaderInfo
