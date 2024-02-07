import React from 'react'

interface SavedSearchData {
    searchFilters: {
        city: string;
        type: string;
    };
    alertFrequency: string;
    _id: string;
    createdAt: string;
}

interface Props {
    search: SavedSearchData;
  }


const SavedSearchCard = ({search}:Props) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{search.searchFilters.city}</h2>
            <p>Type: {search.searchFilters.type || 'N/A'}</p>
            <p>Alert Frequency: {search.alertFrequency}</p>
            <p>Created At: {new Date(search.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
    );
}

export default SavedSearchCard