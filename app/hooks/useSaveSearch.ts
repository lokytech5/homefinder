import { AxiosError } from "axios";
import { showToast } from "../components/ToastNotifier";
import { SavedSearchData, SavedSearchRequest, SavedSearchResponse } from "../components/types";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "../components/store/useUserStore";
import { authApiClient } from "../components/service/api-client";

export interface SavedSearchErrorResponse {
    error: string;
}

const useSaveSearch = () => {
    const userId = useUserStore(state => state.user?._id); 
    
    return useMutation<SavedSearchResponse, AxiosError<SavedSearchErrorResponse>, SavedSearchRequest>(
        (savedSearchData) => {
            const dataWithUserId = { ...savedSearchData, userId }; 
          return authApiClient.post<SavedSearchResponse>(`/savedSearches/${dataWithUserId}`)
            .then(response => response.data);
        },
        {
          onSuccess: (data) => {
            showToast("successfully saved your search", 'success');
            },
          onError: (error: AxiosError<SavedSearchErrorResponse>) => {
            const errorMessage = error.response?.data.error || 'An error occurred';
            showToast(errorMessage, 'error');
        },
        }
      );
}

export default useSaveSearch