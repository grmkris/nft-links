import React from 'react'
import NavigationBar from '../navbar/NavigationBar'
import SiteHeaderInfo from './SiteHeaderInfo'

interface LayoutProps {
  children: React.ReactNode
  headerTitle?: React.ReactNode
}

function Layout({ children, headerTitle }: LayoutProps) {
  return (
    <>
      <NavigationBar />

      <div id="container_dashboard" className="bg-white">
        <SiteHeaderInfo headerTitle={headerTitle} />
        {children}
      </div>
    </>
  )
}

export default Layout
