"use client"
import React, { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import DesktopMenu from './DesktopMenu'
import Drawer from './Drawer'
import useUserStore from '../store/useUserStore'
import UserMenu from './UserMenu'
import ThemeToggle from './ThemeToggle'
import Alerts from './Alerts'
import { CiSaveDown2 } from "react-icons/ci";


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  return (
    <div className='drawer'> 
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" checked={isDrawerOpen} onChange={() => setIsDrawerOpen(!isDrawerOpen)} />
    <div className="drawer-content flex flex-col">
      <div className="navbar bg-primary text-primary-content">
      <div className="flex-none lg:hidden">
        <HamburgerMenu/>
    </div>
    <div className="flex-1">
      <Link href="/home" className="btn btn-ghost normal-case text-xl">GeoHomeFinder</Link>
    </div>
         
          <ThemeToggle/>
          <Alerts/>
      <div className="flex-none">
      {isAuthenticated && (
    <>
      {/* Icon for Saved Searches - Consider using an appropriate icon */}
      <button className="btn btn-ghost btn-circle" onClick={() => {}}>
        <CiSaveDown2 size={20} className="hover:text-warning"/>
      </button>
      <DesktopMenu />
      <UserMenu />
    </>
  )}
      </div>
    </div>
    </div>
    
    <Drawer closeDrawer={() => setIsDrawerOpen(false)} />
  
    </div>
  )
}

export default Navbar