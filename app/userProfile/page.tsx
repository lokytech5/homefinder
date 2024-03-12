"use client"
import React from 'react'
import useUserProfile from '../hooks/useUserProfile';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import { FaMailBulk, FaPhone, FaCheck, FaUserCircle } from 'react-icons/fa';
import { Agent, Apartment, User } from '../components/types';
import useApartmentsByAgent from '../hooks/useApartmentsByAgent';
import useUserStore from '../components/store/useUserStore';
import ApartmentCard from '../components/ApartmentCard';

  

const UserProfile = () => {
    const { data: profileData, isLoading, error } = useUserProfile();
    const user = useUserStore((state) => state.user);

    const { data: apartments, isLoading: apartmentsLoading, error: apartmentsError } = useApartmentsByAgent(user?.userType === 'Agent' ? user._id : undefined);




    if (isLoading) return <LoadingSpinner/>;
    if (error) return <ErrorAlert message={error.message}/>;
    
    const isAgent = (data: any): data is Agent => data.userType === 'Agent';
    const isUser = (data: any): data is User => data.userType === 'User';

    return (
        <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                    {profileData.username}'s Profile
                </h2>
                 {isUser(profileData) ? (
                        <FaCheck className={`h-6 w-6 ${profileData.isEmailVerified ? 'text-green-500' : 'text-gray-400'}`} aria-hidden="true" />
                    ) : (
                        <FaCheck className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    )}
                </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                            <FaMailBulk className="h-5 w-5 mr-1 text-gray-400" aria-hidden="true" />
                            Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileData.email}</dd>
                    </div>
                    {isAgent(profileData) && (
                        <>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                    <FaPhone className="h-5 w-5 mr-1 text-gray-400" aria-hidden="true" />
                                    Phone
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileData.phone}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Agency Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profileData.agencyName}</dd>
                            </div>
                            {/* Additional agent-specific sections */}

                            {isAgent(profileData) && apartments.data && (
                    <div className="mt-6">
                        <h2 className="text-xl font-bold">Listed Apartments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {apartments.map((apartment: Apartment) => (
                                <ApartmentCard
                                    key={apartment._id}
                                    id={apartment._id}
                                    title={apartment.type}
                                    description={apartment.description}
                                    image={apartment.images} // Assuming the 
                                    onDetailsClick={() => {/* Implement navigation to detailed view */}}
                                />
                            ))}
                        </div>
                    </div>
                )}
                        </>
                    )}
                    {isUser(profileData) && profileData.savedSearches && (
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 flex items-center">
                                <FaUserCircle className="h-5 w-5 mr-1 text-gray-400" aria-hidden="true" />
                                Saved Searches
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {profileData.savedSearches.map((search, index) => (
                                    <div key={index} className="mt-2">
                                        <p>City: {search.searchFilters.city}</p>
                                        <p>Type: {search.searchFilters.type || 'N/A'}</p>
                                        <p>Alert Frequency: {search.alertFrequency}</p>
                                    </div>
                                ))}
                            </dd>
                        </div>
                    )}
                </dl>
            </div>
        </div>
    </div>
);
};

export default UserProfile