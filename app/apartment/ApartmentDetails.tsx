import React from 'react'
import { Apartment } from '../components/types'

interface Props {
  apartment: Apartment;
}

const ApartmentDetails = ({apartment}: Props) => {
  console.log(apartment);
  
  return (
    <>
    <h2>Hello</h2>
    <h2 className="text-gray-600">{apartment.type}</h2>
    </>
  )
}

export default ApartmentDetails