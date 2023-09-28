import React from 'react'
import Image from 'next/image'
const FeatureListApartment = () => {
    const apartmentList = [
        {
            title: 'Modern Family Apartment',
            name: '3 BHK | 2 Baths',
            image: '/images/house1.jpg'
        },
        {
            title: 'Modern Family Apartment',
            name: '3 BHK | 2 Baths',
            image: '/images/house2 copy.jpg'
        },
        {
            title: 'Modern Family Apartment',
            name: '3 BHK | 2 Baths',
            image: '/images/house3.jpg'
        },

    ]
  return (
    <section className="p-8 bg-secondary text-secondary-content">
    <h2 className="text-3xl font-bold mb-5">Featured Listings</h2>
        
              {/* Sample Card for a Listing */}
    
              <div className="flex flex-wrap justify-center gap-10">
                {apartmentList.map((apartment, index) => (
                   <div key={index} className="card card-compact w-64 bg-base-100 shadow-2xl">
                <figure>
                  <Image src={apartment.image} alt={apartment.title} width={284} height={156} layout="responsive"/>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{apartment.title}</h2>
                  <p>3 BHK | 2 Baths</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
                    </div>
                ))}
                </div>
               
    </section>
  )
}

export default FeatureListApartment