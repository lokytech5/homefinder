import Link from 'next/link'
import React from 'react'
import useUserStore from '../store/useUserStore';

interface DrawerProps {
  closeDrawer: () => void;
}

const Drawer = ({closeDrawer}: DrawerProps) => {
  const { isAuthenticated, logout } = useUserStore(state => ({
    isAuthenticated: state.isAuthenticated,
    logout: state.logout
  }))
  return (
    <div className="drawer-side z-50">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-neutral text-primary-content flex flex-col justify-center items-center space-y-4 no-underline">
      {/* Sidebar content here */}
      <li onClick={closeDrawer}><Link href="/apartment">Apartment</Link></li>
      {!isAuthenticated ? (
        <>
        <li onClick={closeDrawer}><Link href="/registerUser">Register</Link></li>
        <li onClick={closeDrawer}><Link href="/loginUser">Login</Link></li>      
        </>
      ): (
        <li onClick={closeDrawer}><button onClick={logout}>Logout</button></li>      
        
      )}
      
    </ul>
    
  </div>
  )
}

export default Drawer