export interface Location {
    type: string;
    coordinates: [number, number];
    formattedAddress: string;
    city: string;
}


export interface Apartment {
    location: Location;
    _id: string;
    type: string;
    images: string[];
    price: number;
    description: string;
    agent: string[];
    available: string;
    bedrooms: number;
    bathrooms: number;
    petPolicy: string;
    amenities: string[];
    createdAt: string;
    reviews: any[]; // You can refine this type if you know the exact structure of a review
    __v: number;
}

export interface ApartmentResponse {
    apartment: Apartment[];
}

export interface LatestApartmentResponse {
    apartments: Apartment[];
}