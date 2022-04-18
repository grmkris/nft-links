import React from 'react'
import NavigationBar from '../navbar/NavigationBar'
import SiteHeaderInfo from './SiteHeaderInfo'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <SiteHeaderInfo />

        <NavigationBar />

        <div id="container_dashboard" className="bg-base-100 overflow-y-scroll">
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
