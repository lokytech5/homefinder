import apiClient from '../components/service/api-client'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Apartment, ApartmentResponse, LatestApartmentResponse } from '../components/types';

interface Props {
  endpoint?: string;
  itemsPerPage?: number;
  isLatest?: boolean;
}


const useApartment = ({endpoint = '/apartment', itemsPerPage= 4, isLatest= false}: Props ={}) => {
  const fetchApartments = ({ pageParam = 0 }) => {
    const skipCount = pageParam * itemsPerPage;
    return apiClient.get(endpoint, {
      params: {
        skip: skipCount,
        limit: itemsPerPage
      }
    })
    .then(response => response.data);
  };

  const getAllApartmentsFromPages = (pages: any[]): Apartment[] => {
    const apartmentsKey = pages[0]?.latestApartment ? 'latestApartment' : 'apartment';
    return pages.flatMap(page => page[apartmentsKey] || []);
};

  const getLatestApartmentsFromPages = (pages: any[]): Apartment[] => {
    return getAllApartmentsFromPages(pages).filter(p => p);
  };

  const queryResults = useInfiniteQuery<ApartmentResponse | LatestApartmentResponse, Error>({
    queryKey: [endpoint, itemsPerPage], 
    queryFn: fetchApartments,
    getNextPageParam: (lastPage, pages) => {
      const totalPages = 'totalPages' in lastPage ? lastPage.totalPages : 0;
      
      if (pages.length < totalPages) {
        return pages.length; // return the next page number
      }
      // If we've fetched all pages, return undefined
      return;
    }
  });

  return {
    ...queryResults,
    getAllApartmentsFromPages,
    getLatestApartmentsFromPages
  };
}

export default useApartment
