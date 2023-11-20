import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { LoginUserData, LoginUserResponse } from '../components/types';
import { AxiosError } from 'axios';
import apiClient from '../components/service/api-client';
import useUserStore from '../components/store/useUserStore';

interface LoginErrorResponse {
    error?: string;
    errors?: { msg: string }[];
    message?: string;
  }

const useLoginUser = () => {
    return useMutation<LoginUserResponse, AxiosError<LoginErrorResponse>, LoginUserData>(
        (loginData: LoginUserData) => {
          return apiClient.post<LoginUserResponse>('/auth', loginData)
            .then(response => response.data);
        },
        {
          onSuccess: (data) => {
            const {setUserFromLogin, setAgentFromLogin } = useUserStore.getState();

        localStorage.setItem('token', data.token);

        if (data.userType === "User") {
            setUserFromLogin(data);
        } else if (data.userType === "Agent") {
            setAgentFromLogin(data);
        }

          },
          onError: (error: AxiosError<LoginErrorResponse>) => {
             // Handle login error
        const errorMessage = error.response?.data?.errors 
        ? error.response.data.errors.map(e => e.msg).join(', ')
        : error.response?.data?.error ?? 'An unexpected error occurred';
        console.error('Login failed:', errorMessage);   
        },
        }
      );
}

export default useLoginUser