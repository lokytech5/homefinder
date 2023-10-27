"use client"
import React from 'react'
import ApartmentDetails from '../ApartmentDetails';
import useApartmentDetails from '@/app/hooks/useApartmentDetails';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorAlert from '@/app/components/ErrorAlert';

interface Props {
  params: { apartmentId: string}
}

const ApartmentDetailsPage = ({ params: {apartmentId}}: Props) => {

  const id: string | undefined = apartmentId as string;

  const { data, error, isLoading } = useApartmentDetails({ apartmentId})

  if(isLoading) return <LoadingSpinner/>;
    if(error) return <ErrorAlert message={error.message}/>;
    
  return <ApartmentDetails apartment={data}/>;
}

export default ApartmentDetailsPage