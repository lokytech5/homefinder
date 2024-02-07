import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../components/ToastNotifier";
import { userApiClient } from "../components/service/api-client";
import { AllSavedSearchResponse } from "../components/types";

interface DeleteSavedSearchVariables {
    userId: string;
    searchId: string;
  }


const useDeleteSavedSearch = () => {
    const queryClient = useQueryClient();

    return useMutation(
      ({ userId, searchId }: DeleteSavedSearchVariables) => userApiClient.delete(`/savedSearches/${userId}/${searchId}`),
       
      {
        onMutate: async ({ searchId }) => {
          await queryClient.cancelQueries(['allSavedSearches']);
  
          const previousSearches = queryClient.getQueryData<AllSavedSearchResponse>(['allSavedSearches']);
  
          queryClient.setQueryData<AllSavedSearchResponse>(['allSavedSearches'], old => (old || []).filter(search => search._id !== searchId));

        return { previousSearches };
        },
        onError: (err, variables, context) => {
          queryClient.setQueryData(['allSavedSearches'], context?.previousSearches);
          showToast("Failed to delete the search. Please try again.", 'error');
        },
        onSuccess: () => {
            showToast("Saved search deleted successfully", 'success');
          },
        onSettled: () => {
          queryClient.invalidateQueries(['allSavedSearches']);
        },
      }
    );
}

export default useDeleteSavedSearch