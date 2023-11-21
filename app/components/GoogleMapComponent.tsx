import { InfoWindow, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react'

interface GoogleMapComponentProps {
  defaultCenter: {
    lat: number;
    lng: number;
  };
  apartment: {
    type: string;
    image: string;
  };
}

const GoogleMapComponent = ({ defaultCenter, apartment }: GoogleMapComponentProps) => {
    const mapStyles = { height: "64vh", width: "100%" };
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error('Google Maps API key is not set!');
      return null;
    }

    return (
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          <Marker position={defaultCenter}>
          <InfoWindow position={defaultCenter}>
              <div>
                <h4>{apartment.type}</h4>
                <img src={apartment.image} alt={apartment.type} style={{ width: "100px", height: "auto" }} />
              </div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      </LoadScript>
    )
}

export default GoogleMapComponent