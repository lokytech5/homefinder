import { useQuery } from "@tanstack/react-query";
import apiClient from "../components/service/api-client";
import { ApartmentResponse } from "../components/types";


const useApartment = (endpoint ='/apartment') => {
    const fetchApartment = () => {
        return apiClient.get(endpoint)
                         .then(res => res.data);
    };

    const queryInfo = useQuery<ApartmentResponse, Error>({
        queryKey: ['Apartment', endpoint],
        queryFn: fetchApartment,
    });

    return queryInfo;
}

export default useApartment;