import { Apartment } from '../components/types';
import apiClient from '../components/service/api-client';
import { useQuery } from '@tanstack/react-query';

interface Props {
    apartmentId: string | undefined;
}

const useApartmentDetails = ({ apartmentId }: Props) => {
   const fetchApartmentDetails = (): Promise<Apartment> => {
    if(!apartmentId) return Promise.reject(new Error("Apartment Id is undefined"));
  
    return apiClient.get(`/apartment/${apartmentId}`)
                    .then(res => {
                        return res.data;
                    })
}
     return useQuery<Apartment, Error>(['apartment', apartmentId], fetchApartmentDetails);

    
}

export default useApartmentDetails