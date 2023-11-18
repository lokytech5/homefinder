"use client"
import Image from 'next/image';
import hose1 from '../../public/images/house1.jpg'
import React, { useState } from 'react'

interface FormData {
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  agencyName?: string;
  address?: string;
  age?: number;
}


const RegisterPage = () => {
  const [userType, setUserType] = useState<'User' | 'Agent'>('User');
  // const [formData, setFormData] = useState<FormData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row shadow-xl bg-white rounded-xl max-w-6xl mx-auto overflow-hidden">
        {/* Image Section - shown only on large screens */}
        <div className="hidden lg:flex items-center justify-center w-1/2">
        <Image 
            src={hose1} // Make sure this matches the variable name from your import
            alt="House"
          />
        </div>

        <div className="w-full lg:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-semibold mb-4 text-secondary-content">Welcome to GeoHomeFinder</h2>
          {/* Toggle Switch for User or Agent */}
      {/* Tabs for User or Agent */}
     <div className="tabs tabs-boxed flex justify-center">
            <a className={`tab ${userType === 'User' ? 'tab-active' : ''}`} onClick={() => setUserType('User')}>
              User
            </a>
            <a className={`tab ${userType === 'Agent' ? 'tab-active' : ''}`} onClick={() => setUserType('Agent')}>
              Agent
            </a>
          </div>
      <form className="space-y-4">
      <input 
                name="username"
                className="input input-bordered w-full" 
                type="text" 
                placeholder="Username"
                onChange={handleChange}
              />
              <input 
                name="email"
                className="input input-bordered w-full" 
                type="email" 
                placeholder="Email"
                onChange={handleChange}
              />
              <input 
                name="password"
                className="input input-bordered w-full" 
                type="password" 
                placeholder="Password"
                onChange={handleChange}
              />
              
        {userType === 'Agent' && (
            <>
              <input 
                    name="phone"
                    className="input input-bordered w-full" 
                    type="text" 
                    placeholder="Phone Number"
                    onChange={handleChange}
                  />
                  <input 
                    name="agencyName"
                    className="input input-bordered w-full" 
                    type="text" 
                    placeholder="Agency Name"
                    onChange={handleChange}
                  />
                  <input 
                    name="address"
                    className="input input-bordered w-full" 
                    type="text" 
                    placeholder="Address"
                    onChange={handleChange}
                  />
                  <input 
                    name="age"
                    className="input input-bordered w-full" 
                    type="number" 
                    placeholder="Age"
                    onChange={handleChange}
                  />

            </>
          )}
        <button className="btn btn-primary w-full">Create an Account</button>
      </form>
      <div className="text-center">
        <a href="#" className="link link-secondary">Already have an account? Log In</a>
      </div>
      </div>
    </div>
  </div>
);
  
}

export default RegisterPage