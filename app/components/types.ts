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
    apartment?: Apartment[];
    totalPages: number;
}

export interface LatestApartmentResponse {
    latestApartment?: Apartment[];
    totalPages: number;
}

export interface SingleApartmentResponse {
    apartment: Apartment;
}