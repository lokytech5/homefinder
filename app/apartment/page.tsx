"use client"
import React from 'react'
import FilterApartment from './FilterApartment'
import ApartmentCard from '../components/ApartmentCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorAlert from '../components/ErrorAlert'
import useApartment from '../hooks/useApartment'

const ApartmentPage = () => {

   const { data, error, isLoading, getAllApartmentsFromPages, fetchNextPage, hasNextPage, isFetchingNextPage, }   = useApartment();
   const allApartments = getAllApartmentsFromPages(data?.pages || []);

    if(isLoading) return <LoadingSpinner/>;
    if(error) return <ErrorAlert message={error.message}/>;

  return (
    <div className="min-h-screen bg-gray-100">
    <div className="bg-cover h-96 flex md:bg-center" style={{ backgroundImage: `url('/images/house2.jpg')` }}></div>
   
    <div className="flex flex-col lg:flex-row mt-5 items-start">
      
      <FilterApartment/>
  
      <div className="flex-grow p-4 space-y-4">
        <div className='flex flex-wrap justify-center mx-auto px-2 text-base-content'>
        {allApartments.map((apartment, index) =>(
          <div key={apartment._id} className="w-full md:w-1/2 lg:w-1/3 px-4 my-2">
          <ApartmentCard id={apartment._id} title={apartment.type} description={apartment.description} image={apartment.images}/>
          </div>
        ))}
         </div>
         <div className="text-center mt-6">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="btn btn-secondary"
        >
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more products'}
        </button>
      </div>
         
      </div>
    </div>
  </div>
  )
}

export default ApartmentPage