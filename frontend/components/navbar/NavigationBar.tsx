import React from 'react'
import Menu from './Menu'

function NavigationBar() {
  return (
    <header>
      <div className="fixed z-50 hidden h-screen w-64 bg-base-300 xl:block shadow-xl">
        <Menu />
      </div>
    </header>
  )
}

export default NavigationBar
