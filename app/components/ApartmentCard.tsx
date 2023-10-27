'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
interface Props {
    id: number | string;
    title: string;
    description: string;
    image: string;
}

const ApartmentCard = (apartment: Props) => {
  
  const router = useRouter();
  const handleApartmentClick = () => {

    router.push(`/apartment/${apartment.id}`)
  }
  return (
    <div className="flex flex-wrap justify-center gap-10">
               
                   <div key={apartment.id} className="card card-compact w-64 bg-base-100 shadow-2xl">
                <figure>
                  <Image src={apartment.image} alt={apartment.title} width={284} height={156} layout="responsive"/>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{apartment.title}</h2>
                  <p>{apartment.description}</p>
                  <div className="card-actions justify-end">
                    <button onClick={handleApartmentClick} className="btn btn-primary">View Details</button>
                  </div>
                </div>
                    </div>
              
                </div>
  )
}

export default ApartmentCard