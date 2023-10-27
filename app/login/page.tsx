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
  [key: string]: string | number | undefined;
}


const RegisterPage = () => {
  const [userType, setUserType] = useState<'User' | 'Agent'>('User');
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: FormData) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }));
};
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-xl flex overflow-hidden">
        {/* Image Section */}
        <div className="w-1/2 flex-shrink-0 hidden lg:block">
          <figure>
          <Image src="/images/house1.jpg" width={284} height={156} alt="Registration Illustration" className="h-full w-full object-cover"/>
          </figure>
        </div>

        {/* Registration Content Section */}
        <div className="w-full lg:w-1/2 p-8 space-y-5">
          <div className="flex justify-end items-center">
            <span className="text-gray-600 text-sm">Already Have an account?</span>
            <button className="btn btn-outline text-sm py-1 px-3 ml-4">Sign In</button>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-secondary-content">Welcome to GeoHomeFinder</h2>

            {/* User Type Selection */}
            <div className="mb-4 text-secondary-content">
                <label className="mr-4">
                    <input
                        type="radio"
                        name="userType"
                        value="User"
                        checked={userType === 'User'}
                        onChange={() => setUserType('User')}
                    />
                    Normal User
                </label>
                <label>
                    <input
                        type="radio"
                        name="userType"
                        value="Agent"
                        checked={userType === 'Agent'}
                        onChange={() => setUserType('Agent')}
                    />
                    Agent
                </label>
            </div>

            <div className="space-y-4">
              {/* Fields Common for Both Types */}
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

              {/* Additional Fields for Agents */}
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
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage