import React from 'react'
import { Apartment } from '../components/types'

interface Props {
  apartment: Apartment;
}

const ApartmentDetails = ({apartment}: Props) => {

  
  return (
    <>
    <h2>Hello</h2>
    <h2>{apartment.type}</h2>
    </>
  )
}

export default ApartmentDetails