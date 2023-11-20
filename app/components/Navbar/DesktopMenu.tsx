import Link from 'next/link'
import React from 'react'
import useUserStore from '../store/useUserStore';

const DesktopMenu = () => {

  const { isAuthenticated, logout } = useUserStore(state => ({
    isAuthenticated: state.isAuthenticated,
    logout: state.logout
  }));
  
  return (
    <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1 no-underline">
      <li><Link href="/apartment">Apartment</Link></li>

      {!isAuthenticated ? (
        <>
        <li><Link href="/registerUser">Register</Link></li>
        <li><Link href="/loginUser">Login</Link></li>       
        </>
      ): (
        <li> <button onClick={logout}> Logout</button></li>
      )}
      
    </ul>

    </div>
  )
}

export default DesktopMenu