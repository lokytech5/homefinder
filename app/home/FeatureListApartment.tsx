import React from 'react'
import Image from 'next/image'
import ApartmentCard from '../components/ApartmentCard'
const FeatureListApartment = () => {
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

    ]
  return (
    <section className="p-10 bg-secondary text-secondary-content">
    <h2 className="text-3xl font-bold mb-5">Featured Listings</h2>
        
              {/* Sample Card for a Listing */}
              <div className="flex flex-wrap justify-center gap-10">
              {apartmentList.map((apartment, index) => (
                <ApartmentCard id={index} 
                title={apartment.title} 
                description={apartment.description} 
                image={apartment.image} />
              ))}
              </div>
               
    </section>
  )
}

export default FeatureListApartment