'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
interface Props {
    id: number | string;
    title: string;
    description: string;
    image: string[];
    onDetailsClick?: () => void; 
}

const ApartmentCard = (apartment: Props) => {
  
  return (
    <div key={apartment.id} className="card card-compact w-64 bg-base-100 shadow-2xl">
    <figure>
        <Image src={apartment.image[0]} alt={apartment.title} width={284} height={156} layout="responsive"/>
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">{apartment.title}</h2>
        <p>{apartment.description}</p>
        <div className="card-actions justify-end">
            <button onClick={apartment.onDetailsClick} className="btn btn-primary">View Details</button>
        </div>
    </div>
</div>
  )
}

export default ApartmentCard