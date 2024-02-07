import React from 'react'
import useUserStore from '../components/store/useUserStore';
import { AllSavedSearchResponse } from '../components/types';
import { AxiosError } from 'axios';
import { showToast } from '../components/ToastNotifier';
import { userApiClient } from '../components/service/api-client';
import { useQuery } from '@tanstack/react-query';

interface SavedSearchErrorResponse {
    error: string;
}

const useAllSavedSearches = () => {
    const { user } = useUserStore(); // Retrieve user state from Zustand store
    
    return useQuery<AllSavedSearchResponse, AxiosError<SavedSearchErrorResponse>>(
        ['allSavedSearches', user?._id],
        async () => {
            if (!user?._id || user.userType !== "User") {
                throw new Error("User ID is not available or not a user type");
            }
            // Use the endpoint dedicated to users only
            const response = await userApiClient.get<AllSavedSearchResponse>(`/savedSearches/${user._id}`);
            return response.data;
        },
        {
            onSuccess: () => {
                showToast("Successfully saved your search", 'success');
            },
            onError: (error: AxiosError<SavedSearchErrorResponse>) => {
                const errorMessage = error.response?.data.error || 'An error occurred';
                showToast(errorMessage, 'error');
            },
        }
    );
}

export default useAllSavedSearches