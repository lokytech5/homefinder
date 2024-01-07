import { useQuery } from '@tanstack/react-query'
import { SearchParams, SearchResponse, } from '../components/types'
import { apiClient } from '../components/service/api-client'

const useSearchApartment = (searchParams: SearchParams) => {

    return useQuery<SearchResponse, Error>(['searchApartments', searchParams], async () => {
        const response = await apiClient.get<SearchResponse>('/apartment/search', { params: searchParams });
        return response.data;
      });
  
}

export default useSearchApartment