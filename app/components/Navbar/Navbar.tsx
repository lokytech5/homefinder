import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import DesktopMenu from './DesktopMenu'
import Drawer from './Drawer'

const Navbar = () => {
  return (
    <div className='drawer'> 
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">
      <div className="navbar bg-neutral text-primary-content">
      <div className="flex-none lg:hidden">
        <HamburgerMenu/>
    </div>
    <div className="flex-1">
      <Link href="/home" className="btn btn-ghost normal-case text-xl">GeoHomeFinder</Link>
    </div>
         
          {/* <ThemeToggle/> */}
         <DesktopMenu/> 
      <div className="flex-none">
          {/* <Cart/>
          <UserMenu/> */}
      </div>
    </div>
    </div>
    
    <Drawer/>
  
    </div>
  )
}

export default Navbar