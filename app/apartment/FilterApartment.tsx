import React, { useState } from 'react'
import useSearchStore from '../components/store/useSearchStore'
import { FaInfoCircle } from 'react-icons/fa';

const FilterApartment = () => {
    const { setSearchParams } = useSearchStore();
    
    const [city, setCity] = useState('');
    const [bedrooms, setBedrooms] = useState<number | undefined>();
    const [type, setType] = useState('');

    const handleSearch = () => {
        setSearchParams({ city, bedrooms, type });
    }

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
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City name" 
            className="input input-bordered input-accent w-full" 
        />

         {/* Bedrooms Input */}
         <input 
                        type="number" 
                        value={bedrooms}
                        onChange={(e) => setBedrooms(Number(e.target.value))}
                        placeholder="Bedrooms" 
                        className="input input-bordered input-accent w-full" 
                    />

        {/* Type Input */}
        <input 
                        type="text" 
                        value={type}
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

    {/* Filter by Price */}
    <div className="flex flex-col items-center justify-center w-full h-52 bg-base-300 rounded-box p-4 space-y-4">
    <div className="w-full max-w-xs md:w-full">
        <label className="label">
            <span className="text-md">Sort by Price</span>
        </label>

        <select className="select select-bordered w-full mt-2 text-secondary-content">
            <option value=''>Select Order</option>
            <option value='asc'>Low to High</option>
            <option value='desc'>High to Low</option>
        </select>
    </div>

    <div className="w-full max-w-xs">
        <button className="btn btn-secondary w-full">Reset All Filters</button>
    </div>
</div>
    

    </div>
  )
}

export default FilterApartment