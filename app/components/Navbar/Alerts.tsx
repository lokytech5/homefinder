import React from 'react'
import { FaBell } from 'react-icons/fa'
import useUserStore from '../store/useUserStore'

const Alerts = () => {
    const isAuthenticated = useUserStore((state) => state.isAuthenticated)
  return (
    <div className="dropdown dropdown-end text-secondary-content mr-2">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
        <FaBell size={20} className="hover:text-warning" /> {/* Increase size and add hover effect */}
      </label>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {isAuthenticated && (
          <>
            <li className="btn btn-ghost">
             
            </li>
          </>
        )}

        {!isAuthenticated && (
          <>{/* Add links for non-authenticated users if needed */}</>
        )}
      </ul>
  </div>
  )
}

export default Alerts