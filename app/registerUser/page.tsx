"use client"
import Image from 'next/image';
import hose1 from '../../public/images/house1.jpg'
import React, { useEffect, useState } from 'react'
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useRegisterUser from '../hooks/useRegisterUser';
import useRegisterAgent from '../hooks/useRegisterAgent';
import { RegisterAgentData, RegisterUserData } from '../components/types';
import { showToast } from '../components/ToastNotifier';
import VerificationModal from '../components/VerificationModal';
import { useRouter } from 'next/navigation';
import ErrorAlert from '../components/ErrorAlert';
import LoadingSpinner from '../components/LoadingSpinner';

interface FormData {
  username: string;
  email: string;
  password: string;
  phone?: string;
  agencyName?: string;
  address?:string;
  age?:number;
}

const userSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(5, 'Password must be at least 6 characters'),
});
  
const agentSchema = z.object({
   // Include other fields as needed
   username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(5, 'Password must be at least 6 characters'),
   phone: z.string().min(1, 'Phone number is required'),
   agencyName: z.string().min(1, 'Agency name is required'),
   address: z.string().min(1, 'Address is required'),
   age: z.string()
   .transform((val) => parseInt(val, 10))
   .refine((val) => !isNaN(val) && val >= 18, 'You must be at least 18 years old'),
});


const RegisterPage = () => {
  const [userType, setUserType] = useState<'User' | 'Agent'>('User');
  const [currentSchema, setCurrentSchema] = useState(userSchema);
  const { mutate: registerUser, isLoading: userLoading, error: userError } = useRegisterUser();
  const { mutate: registerAgent, isLoading: agentLoading, error: agentError } = useRegisterAgent();

  useEffect(() => {
    setCurrentSchema(userType === 'User' ? userSchema : agentSchema);
  }, [userType]);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(currentSchema),
  });
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationType, setVerificationType] = useState<'email' | 'phone'>('email');

  const isLoading = userLoading || agentLoading;
  const errorMessage = userType === 'User' ? userError?.message : agentError?.message;

  const router = useRouter();

  if (isLoading) return <LoadingSpinner />;
  if (errorMessage) return <ErrorAlert message={errorMessage} />;


  const onSubmit: SubmitHandler<FormData> = async (data) => {
   
   try{

  if (userType === 'User') {
    const userData: RegisterUserData = {
      username: data.username,
      email: data.email,
      password: data.password,
      userType:"User"
    }
   registerUser(userData, {
    onSuccess: () => {
      showToast('Registeration successful', 'success');
      setShowVerificationModal(true);
      setVerificationType('email');
    }
   });
  } else if (userType === 'Agent') {
    const agentData: RegisterAgentData = {
      username: data.username,
      email: data.email,
      password: data.password,
      userType: "Agent",
      phone: data.phone || '',
      agencyName: data.agencyName || '',
      address: data.address || '',
      age: data.age || 0,
    };
    registerAgent(agentData, {
      onSuccess: () => {
        showToast('Registration successful', 'success');
        setShowVerificationModal(true);
        setVerificationType('phone');
      }
    });
  }
} catch (e) {
  if(e instanceof Error) {
    showToast('Registration failed: ' + e.message, 'error');
}  else {
    showToast('Registration failed: An unexpected error occurred', 'error');
}
}
  };

  const handleCloseModal = () => {
    setShowVerificationModal(false);
    if (userType === 'User') {
      router.push("/loginUser");
    } else if (userType === 'Agent') {
      router.push("/verifyAgent");
    }
  }
  
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 text-secondary-content"> 

           
            <input 
            {...register("username")}
                name="username"
                className="input input-bordered w-full" 
                type="text" 
                placeholder="Username"
              />
              {errors.username && <p>{errors.username.message}</p>}

              <input 
                {...register("email")}
                name="email"
                className="input input-bordered w-full" 
                type="email" 
                placeholder="Email"
              />
              {errors.email && <p>{errors.email.message}</p>}

              <input
               {...register("password")} 
                name="password"
                className="input input-bordered w-full" 
                type="password" 
                placeholder="Password"
              />
              {errors.password && <p>{errors.password.message}</p>}
              
        {userType === 'Agent' && (
            <>
              <input 
              {...register("phone")} 
                    name="phone"
                    className="input input-bordered w-full" 
                    type="text" 
                    placeholder="Phone Number"
                  />
                  {errors.phone && <p>{errors.phone.message}</p>}

                  <input 
                    {...register("agencyName")} 
                    name="agencyName"
                    className="input input-bordered w-full" 
                    type="text" 
                    placeholder="Agency Name"
                  />
                   {errors.agencyName && <p>{errors.agencyName.message}</p>}

                  <input 
                   {...register("address")} 
                    name="address"
                    className="input input-bordered w-full" 
                    type="text" 
                    placeholder="Address"
                  />
                  {errors.address && <p>{errors.address.message}</p>}

                  <input 
                   {...register("age")} 
                    name="age"
                    className="input input-bordered w-full" 
                    type="number" 
                    placeholder="Age"
                  />
                   {errors.age && <p>{errors.age.message}</p>}

            </>
          )}
        <button type='submit' className="btn btn-primary w-full">Create an Account</button>
        </div>
      <div className="text-center">
        <a href="#" className="link link-secondary">Already have an account? Log In</a>
      </div>
      </form>
      </div>
    </div>
    <VerificationModal
        isOpen={showVerificationModal}
        onClose={handleCloseModal} verificationType={verificationType}/>
  </div>
);
  
}

export default RegisterPage