import { Apartment, SingleApartmentResponse } from '../components/types';
import apiClient from '../components/service/api-client';
import { useQuery } from '@tanstack/react-query';

interface Props {
    apartmentId: string | undefined;
}

const useApartmentDetails = ({ apartmentId }: Props) => {
   const fetchApartmentDetails = (): Promise<SingleApartmentResponse> => {
    if(!apartmentId) return Promise.reject(new Error("Apartment Id is undefined"));
  
    return apiClient.get(`/apartment/${apartmentId}`)
                    .then(res => {
                        return res.data;
                    })
}
     return useQuery<SingleApartmentResponse, Error>(['apartment', apartmentId], fetchApartmentDetails);

    
}

export default useApartmentDetails