import React from 'react'
import useUserStore from '../components/store/useUserStore';
import useDeleteSavedSearch from '../hooks/useDeleteSavedSearch';

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
  const {user} = useUserStore();
  const { mutate: deleteSavedSearch } = useDeleteSavedSearch();
  
  if (!user?._id || user.userType !== "User") {
    throw new Error("User ID is not available or not a user type");
}

  const handleDelete = () => {
    if (user._id && search._id) { // Ensure both IDs are defined
      deleteSavedSearch({ userId: user._id, searchId: search._id });
    } else {
      // Handle the case where one or both IDs are undefined
      console.error("Cannot delete saved search without valid user and search IDs.");
    }
  };

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{search.searchFilters.city}</h2>
            <p>Type: {search.searchFilters.type || 'N/A'}</p>
            <p>Alert Frequency: {search.alertFrequency}</p>
            <p>Created At: {new Date(search.createdAt).toLocaleDateString()}</p>
          </div>

          <button className="btn btn-error"  onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default SavedSearchCard