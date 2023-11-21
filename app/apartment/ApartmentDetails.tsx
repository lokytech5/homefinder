import React from 'react'
import { Apartment } from '../components/types'
import { useRouter } from 'next/navigation';
import GoogleMapComponent from '../components/GoogleMapComponent';

interface Props {
  apartment: Apartment;
}

const ApartmentDetails = ({apartment}: Props) => {

  const router = useRouter();

  const defaultCenter = {
    lat: apartment.location.coordinates[1], 
    lng: apartment.location.coordinates[0]
  }

  const closeCard = () => {
    router.back();
  }

  
  return (
    <div className="container">
   
    
    {/* Carousel */}
    <div className="carousel w-full h-64 md:h-96">
        {apartment.images.map((image, index) => (
          <div id={`item${index}`} key={index} className="carousel-item w-full">
            <img src={image} alt={`Apartment Image ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center w-full py-2 gap-2">
        {apartment.images.map((_, index) => (
          <a href={`#item${index}`} key={index} className="btn btn-xs">{index + 1}</a>
        ))}
      </div>

     {/* Details Section */}
     <div className="details-section bg-blue-100 p-4 shadow-md rounded-lg my-4 text-secondary-content">
      <h3 className="text-lg font-semibold">Details</h3>
      <p className="mt-2">{apartment.type}</p>
      <p>{apartment.description}</p>
    </div>

    {/* Grid Container for Info and Amenities */}
    <div className="grid md:grid-cols-2 gap-4 my-4 text-secondary-content">
      {/* Info Section */}
      <div className="info-section bg-green-100 p-4 shadow-md rounded-lg flex flex-col">
        <h3 className="text-lg font-semibold">Info</h3>
        <p><strong>Price:</strong> #{apartment.price.toLocaleString()}</p>
        <p><strong>City:</strong> {apartment.location.city}</p>
        <p><strong>Bedrooms:</strong> {apartment.bedrooms}</p>
        <p><strong>Bathrooms:</strong> {apartment.bathrooms}</p>
        <p><strong>Pet Policy:</strong> {apartment.petPolicy}</p>
      </div>

      {/* Amenities Section */}
      <div className="amenities bg-yellow-100 p-4 shadow-md rounded-lg flex flex-col">
        <h3 className="text-lg font-semibold">Amenities</h3>
        <ul className="list-disc list-inside">
          {apartment.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>

     {/* Map Section */}
     <div className="map-container my-4">
     <h3 className="text-lg font-semibold mb-2">Location</h3>
        <GoogleMapComponent defaultCenter={defaultCenter} apartment={{ 
      type: apartment.type,
      image: apartment.images[0]
       }} />
      </div>
    </div>

  )
}

export default ApartmentDetails