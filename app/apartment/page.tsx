import React from 'react'
import FilterApartment from './FilterApartment'
import ApartmentCard from '../components/ApartmentCard'

const ApartmentPage = () => {

    const apartmentList = [
        {
            title: 'Modern Family Apartment',
            description: '3 BHK | 2 Baths',
            image: '/images/house1.jpg'
        },
        {
            title: 'Modern Family Apartment',
            description: '3 BHK | 2 Baths',
            image: '/images/house2 copy.jpg'
        },
        {
            title: 'Modern Family Apartment',
            description: '3 BHK | 2 Baths',
            image: '/images/house3.jpg'
        },
        {
            title: 'Modern Family Apartment',
            description: '3 BHK | 2 Baths',
            image: '/images/house3.jpg'
        },
        {
            title: 'Modern Family Apartment',
            description: '3 BHK | 2 Baths',
            image: '/images/house3.jpg'
        },

    ]

  return (
    <div className="min-h-screen bg-gray-100">
    <div className="bg-cover h-96 flex md:bg-center" style={{ backgroundImage: `url('/images/house2 copy.jpg')` }}></div>
   
    <div className="flex flex-col lg:flex-row mt-5 items-start">
      
      <FilterApartment/>
  
      <div className="flex-grow p-4 space-y-4">
        <div className='flex flex-wrap justify-center mx-auto px-2 text-base-content'>
        {apartmentList.map((apartment, index) =>(
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 my-2">
          <ApartmentCard id={index} title={apartment.title} description={apartment.description} image={apartment.image}/>
          </div>
        ))}
         </div>
         
      </div>
    </div>
  </div>
  )
}

export default ApartmentPage