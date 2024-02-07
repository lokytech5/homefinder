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
    reviews: any[];
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

export interface SearchResponse {
    apartment: Apartment[];
}

export interface SearchParams {
    city?: string;
    bedrooms?: number;
    type?: string;
    sortOrder?: 'asc' | 'desc';
  }

export interface SortParams {
    sortOrder?: 'asc' | 'desc';
}

export interface SortResponse {
    apartments: Apartment[];
}

export interface RegisterUserData {
    username: string;
    password: string;
    email: string;
    userType: "User"
}

export interface RegisterUserResponse {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
}

export interface VerifyUserRequest {
    token: string;
}

export interface VerifyUserResponse {
    message: string;
}

export interface RegisterAgentData {
    username: string;
    password: string;
    email: string;
    userType: "Agent";
    phone: string;
    agencyName: string;
    address: string;
    age: number;
}

export interface RegisterAgentResponse {
    message: string;
    agentId: string;
}

export interface VerifyAgentRequest {
    code: number;
    agentId: string;
}

export interface VerifyAgentResponse {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
}

export interface LoginUserData {
    username: string;
    password: string;
}

export interface LoginUserResponse {
    _id: string;
    username: string;
    email: string;
    userType: "User" | "Agent";
    token: string;
}

export interface SavedSearchRequest {
    searchFilters: {
        city: string;
        bedrooms: number | undefined;
        type?: string;
        amenities?: string[];
    };
    alertFrequency: string;
}

export interface SavedSearchData {
    searchFilters: {
        city: string;
        bedrooms: number | undefined;
        type: string;
        amenities: string[];
    };
    alertFrequency: string;
    _id: string;
    createdAt: string;
}

export type SavedSearchResponse = SavedSearchData[];


export interface AllSavedSearchData {
    searchFilters: {
      city: string;
      type: string;
    };
    alertFrequency: string;
    _id: string;
    createdAt: string;
  }
  
  export type AllSavedSearchResponse = AllSavedSearchData[];

