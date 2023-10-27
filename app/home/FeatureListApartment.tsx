"use client"
import React from 'react'
import Image from 'next/image'
import ApartmentCard from '../components/ApartmentCard'
import useApartment from '../hooks/useApartment';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
const FeatureListApartment = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, getLatestApartmentsFromPages } = useApartment({ endpoint: '/apartment/latest' });
   
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error.message} />;

   // Extracting apartments based on the response type
   const latestApartments = getLatestApartmentsFromPages(data?.pages || []);
   console.log(latestApartments);

  return (
    <section className="p-10 bg-secondary text-secondary-content">
    <h2 className="text-3xl font-bold mb-5">Featured Listings</h2>
        
              {/* Sample Card for a Listing */}
              <div className='flex flex-wrap justify-center mx-auto px-2 text-base-content'>
              {latestApartments.map((apartment, index) => (
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
               
    </section>
  )
}

export default FeatureListApartment