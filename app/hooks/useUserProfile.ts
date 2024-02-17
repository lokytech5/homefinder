import { useQuery } from "@tanstack/react-query";
import { authApiClient } from "../components/service/api-client";
import useUserStore from "../components/store/useUserStore"
import { Agent, ProfileData, User } from "../components/types"


const fetchUserProfile = async (): Promise<ProfileData> => {
    const userType = useUserStore.getState().user?.userType;

    if(!userType) {
        throw new Error('User type is undefined');
    }

    const endpoint = userType === 'Agent' ? 'agent/me' : 'user/me';
    const response = await authApiClient.get<{ agent?: Agent; user?: User }>(endpoint);
    
    if (response.data.agent) {
        return { ...response.data.agent, userType: 'Agent' };
    } else if (response.data.user) {
        // Provide default values for optional fields
        return { 
            ...response.data.user, 
            userType: 'User',
            isEmailVerified: response.data.user.isEmailVerified ?? false, // Default to false if undefined
            // Apply similar logic to other optional fields if necessary
        };
    } else {
        throw new Error('No user data found');
    }
};

const useUserProfile = () => {
    const userType = useUserStore(state => state.user?.userType);
  
    return useQuery<ProfileData, Error>({
      queryKey: ['userProfile', userType],
      queryFn: fetchUserProfile,
      onError: (error) => {
        console.error('Error fetching user profile:', error);
      },
      enabled: !!userType, // Only run the query if the userType is known
    });
  };

export default useUserProfile