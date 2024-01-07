import React from 'react'
import useUserStore from '../components/store/useUserStore';
import { VerifyAgentRequest, VerifyAgentResponse } from '../components/types';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { apiClient } from '../components/service/api-client';

interface VerifyErrorResponse {
    message?: string;
    error?: string;
}

const useVerifyAgent = () => {
    const setIsPhoneVerified = useUserStore((state) => state.setIsPhoneVerified);
    const setError = useUserStore((state) => state.setError);

    return useMutation<VerifyAgentResponse, AxiosError<VerifyErrorResponse>, VerifyAgentRequest>(
        (verificationData: VerifyAgentRequest) => {
            return apiClient.post<VerifyAgentResponse>('/auth/verifyPhone', verificationData)
                .then(response => response.data);
        },
        {
            onSuccess: (data) => {
                // You might want to set the user as verified in your global state here
                setIsPhoneVerified(true);
                console.log('Phone verification successful:');
            },
            onError: (error: AxiosError<VerifyErrorResponse>) => {
                const errorMessage = error.response?.data?.error ?? error.response?.data?.message ?? 'An unexpected error occurred';
                setError(errorMessage);
                console.error('Phone verification failed:', errorMessage);
            },
        }
    );
}

export default useVerifyAgent