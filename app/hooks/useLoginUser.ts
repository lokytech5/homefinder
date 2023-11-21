import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { LoginUserData, LoginUserResponse } from '../components/types';
import { AxiosError } from 'axios';
import apiClient from '../components/service/api-client';
import useUserStore from '../components/store/useUserStore';
import { showToast } from '../components/ToastNotifier';

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

        const commonUserInfo = {
          _id:data._id,
          username: data.username,
          email: data.email,
          userType: data.userType
        };

        if (data.userType === "User") {
            setUserFromLogin(commonUserInfo);
        } else if (data.userType === "Agent") {
            setAgentFromLogin(commonUserInfo);
        }

          },
          onError: (error: AxiosError<LoginErrorResponse>) => {
        const errorMessage = error.response?.data?.errors 
        ? error.response.data.errors.map(e => e.msg).join(', ')
        : error.response?.data?.error ?? 'An unexpected error occurred';
        showToast('Login failed', 'error');  
        },
        }
      );
}

export default useLoginUser