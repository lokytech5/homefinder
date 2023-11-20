import Link from 'next/link'
import React from 'react'

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/apartment">Apartment</Link></li>
      <li><Link href="/registerUser">Register</Link></li>
      <li><Link href="/loginUser">Login</Link></li>
      
    </ul>

    </div>
  )
}

export default DesktopMenu