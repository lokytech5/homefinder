import { useQuery } from "@tanstack/react-query";
import { authApiClient } from "../components/service/api-client";
import useUserStore from "../components/store/useUserStore";
import { showToast } from "../components/ToastNotifier";


const useApartmentsByAgent = (agentId: string | undefined)  => {
    const { user } = useUserStore();

  // Ensure the query is only executed for agents
  const enabled = user?.userType === 'Agent' && !!user._id;

  return useQuery(['apartmentsByAgent', user?._id], async () => {
    if (!user?._id) {
        showToast('Wrong Id', 'error'); 
      // Optionally handle the case where there is no agent ID
      return [];
    }
    const { data } = await authApiClient.get(`/apartments/agent/${user._id}`);
    return data.apartments;
  }, {
    enabled
  });
};

export default useApartmentsByAgent