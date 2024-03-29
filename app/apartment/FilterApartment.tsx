import React, { useState } from 'react'
import useSearchStore from '../components/store/useSearchStore'
import { FaInfoCircle } from 'react-icons/fa';
import useSaveSearch from '../hooks/useSaveSearch';
import { showToast } from '../components/ToastNotifier';
import { SavedSearchRequest } from '../components/types';
import useUserStore from '../components/store/useUserStore';

const FilterApartment = () => {
    const { setSearchParams, setSortParams } = useSearchStore();
    const { searchParams,  clearSearchParams } = useSearchStore();
    const isAuthenticated = useUserStore((state) => state.isAuthenticated);
    
    const [city, setCity] = useState('');
    const [bedrooms, setBedrooms] = useState<number | undefined>();
    const [type, setType] = useState('');
    const [sortOrder, setLocalSortOrder] = useState('');

    const saveSearch = useSaveSearch(); 
    const [alertFrequency, setAlertFrequency] = useState('');

    const handleSearch = () => {
        setSearchParams({ city, bedrooms, type });    
    }

    const handleSaveSearch = () => {
        const { city, bedrooms, type } = searchParams;

        console.log("City: ", city);
        if (!alertFrequency) {
            showToast("Please select an alert frequency", 'error');
            return;
        }

        if (!city) {
            showToast("City is required", 'error');
            return;
        }

        
        const searchCriteria: SavedSearchRequest = {
            searchFilters: { city, bedrooms, type },
            alertFrequency
        };
    
        saveSearch.mutate(searchCriteria);

        clearSearchParams();
    }

    const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSortOrder = e.target.value;
        setLocalSortOrder(newSortOrder);
    
        // Convert empty string to undefined
        const sortOrderForParams = newSortOrder === '' ? undefined : newSortOrder as 'asc' | 'desc';
        setSortParams({ sortOrder: sortOrderForParams });
    };

   

    const handleResetFilters = () => {
        setCity('');
        setBedrooms(undefined);
        setType('');
        setSearchParams({});
        setSortParams({});
    };
    

    return (
    <div className="w-full mt-2 p-4 space-y-4 lg:w-1/4">
        
        {/* Search by city, bedroom and type */}
        <div tabIndex={0} className="border border-base-300 bg-primary p-4 rounded-md space-y-4 text-secondary-content">
    <div className="text-md font-medium mb-2">
        Advanced Search
        <div className="tooltip ml-2" data-tip="Search by filling one fields, then click the search button">
                        <FaInfoCircle className="cursor-pointer" /> {/* React Icon */}
                    </div>
    </div>
    <div className="space-y-2">
        <input 
            type="text" 
            value={city || ''}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City name" 
            className="input input-bordered input-accent w-full" 
        />

         {/* Bedrooms Input */}
         <input 
                        type="number" 
                        value={bedrooms || ''}
                        onChange={(e) => setBedrooms(Number(e.target.value))}
                        placeholder="Bedrooms" 
                        className="input input-bordered input-accent w-full" 
                    />

        {/* Type Input */}
        <input 
                        type="text" 
                        value={type || ''}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Type" 
                        className="input input-bordered input-accent w-full" 
                    />
        
        {/* Chips */}
        <div className="flex flex-wrap gap-2 mt-2">
                        {city && <span className="badge badge-primary">{city} <i className="fas fa-times ml-2 cursor-pointer" onClick={() => setCity('')}></i></span>}
                        {bedrooms && <span className="badge badge-primary">{bedrooms} Bedrooms <i className="fas fa-times ml-2 cursor-pointer" onClick={() => setBedrooms(undefined)}></i></span>}
                        {type && <span className="badge badge-primary">{type} <i className="fas fa-times ml-2 cursor-pointer" onClick={() => setType('')}></i></span>}
                    </div>
        
        <button 
        className="btn btn-primary w-full mt-2"
         onClick={handleSearch}>Search</button>
        
    </div>
</div>

{/* Dropdown or radio buttons for alert frequency */}
{isAuthenticated && (
          <>
<div className="flex flex-col items-center justify-center w-full h-52 bg-base-300 rounded-box p-4 space-y-4">
    <div className="w-full max-w-xs md:w-full">
    <label className="label">
            <span className="text-md">Saved Search</span>
        </label>
               
                <select value={alertFrequency} onChange={(e) => setAlertFrequency(e.target.value)} className="select select-bordered w-full text-secondary-content mt-4">
                    <option value="">None</option>
                    <option value="instant">Instant</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>

            {/* Save Search Button */}
            <div className="w-full max-w-xs">
            <button className="btn btn-secondary w-full" onClick={handleSaveSearch}>
                Save Search
            </button>
            </div>
    </div>
          
          </>
        )}

    {/* Filter by Price */}
    <div className="flex flex-col items-center justify-center w-full h-52 bg-base-300 rounded-box p-4 space-y-4">
    <div className="w-full max-w-xs md:w-full">
        <label className="label">
            <span className="text-md">Sort by Price</span>
        </label>

        <select className="select select-bordered w-full mt-2 text-secondary-content"
               value={sortOrder}
               onChange={handleSortOrderChange}>
            <option value=''>Select Order</option>
            <option value='asc'>Low to High</option>
            <option value='desc'>High to Low</option>
        </select>
    </div>

    <div className="w-full max-w-xs">
        <button className="btn btn-secondary w-full" onClick={handleResetFilters}>Reset All Filters</button>
    </div>
</div>

    </div>
  )
}

export default FilterApartment