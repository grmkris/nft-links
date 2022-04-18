import React from 'react'
import Menu from './Menu'

function NavigationBar() {
  return (
    <header>
      <div className="fixed z-50 hidden h-screen w-64 border-r-2  bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:border-slate-50/[0.06]  dark:from-slate-900 dark:to-slate-900 xl:block">
        <Menu />
      </div>
    </header>
  )
}

export default NavigationBar
