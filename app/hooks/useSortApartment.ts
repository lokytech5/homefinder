import { useQuery } from '@tanstack/react-query'
import React from 'react'
import apiClient from '../components/service/api-client'
import { SortParams, SortResponse } from '../components/types';

const useSortApartment = (sortParams: SortParams) => {
  return useQuery<SortResponse, Error>(['sortApartments', sortParams], async () => {
    const response = await apiClient.get<SortResponse>('/apartment/sortByPrice', {params: sortParams})

    return response.data;
  });
}

export default useSortApartment;