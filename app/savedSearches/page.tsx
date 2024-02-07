"use client"
import React from 'react'
import SavedSearchCard from './SavedSearchCard'
import useAllSavedSearches from '../hooks/useAllSavedSearches';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';

const SavedSearches = () => {
  const { data: savedSearches, isLoading, error } = useAllSavedSearches();

  if (isLoading) return <LoadingSpinner/>;
  if (error) return <ErrorAlert message={error.message}/>;

  return (
    <div className="p-4 text-secondary-content">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedSearches?.map((search) => (
          <SavedSearchCard key={search._id} search={search} />
        ))}
      </div>
    </div>
  );
}

export default SavedSearches