"use client" 
import Link from 'next/link';
import React, { useState } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import useVerifyAgent from '../hooks/useVerifyAgent';
import useUserStore from '../components/store/useUserStore';
import { showToast } from '../components/ToastNotifier';

const VerifyAgentPage = () => {
  const [code, setCode] = useState('');
  const { mutate: verifyAgent, isLoading, isError, isSuccess } = useVerifyAgent();
  const { user } = useUserStore(state => ({ user: state.user }))
  const agentId = user?._id;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numericCode = parseInt(code);

    if(isNaN(numericCode)) {
      showToast('Please enter a valid Number', 'error');
    }

    if (!agentId) {
      // Handle the case where agentId is not available
      showToast('Agent ID is missing. Please try again or contact support.', 'error');
      return; // Exit early if agentId is undefined
    }

    verifyAgent({ code: numericCode, agentId });
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <div className="bg-secondary-content rounded-xl shadow-xl p-8 text-center w-full max-w-md">
      {isLoading ? (
        <div>
          <span className="loading loading-bars loading-md"></span>
          <p className="mb-4">Verifying your phone number, please wait...</p>
        </div>
      ) : isSuccess ? (
        <div>
          <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Phone Number Verified!</h2>
          <p className="mb-6">Your phone number has been successfully verified.</p>
          <Link href="/loginUser">
            <button className="btn btn-primary">Log In</button>
          </Link>
        </div>
      ) : isError ? (
        <div>
          <FaTimesCircle className="text-4xl text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Verification Failed</h2>
          <p className="mb-6">We could not verify your phone number. Please check the code or contact support if the problem persists.</p>
          <Link href="/contact-support">
            <button className="btn btn-outline">Contact Support</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto text-secondary-content">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter verification code"
            className="input input-bordered w-full mb-4"
          />
          <button type="submit" className="btn btn-primary w-full">
            Verify
          </button>
        </form>
      )}
      {isError && <p className="text-red-500 mt-4">{'An error occurred'}</p>}
    </div>
  </div>
  )
}

export default VerifyAgentPage