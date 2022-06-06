import React from 'react';
import HeaderBar from './navbar/HeaderBar';
import Menu from './navbar/Menu';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeaderBar />
      <div className='drawer-mobile drawer'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content h-screen overflow-y-scroll'>
          {children}
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'/>
          <ul className='menu w-80 overflow-y-auto bg-base-200 p-4 text-base-content'>
            <Menu />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Layout;
