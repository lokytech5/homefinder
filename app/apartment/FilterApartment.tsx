import React from 'react'

const FilterApartment = () => {
  return (
    <div className="w-full mt-2 p-4 space-y-4 lg:w-1/4">
        
        {/* Search by city, bedroom and type */}
        <div tabIndex={0} className="border border-base-300 bg-primary p-4 rounded-md space-y-4 text-secondary-content">
    <div className="text-xl font-medium mb-2">
        Advanced Search
    </div>
    <div className="space-y-2">
        <input 
            type="text" 
            placeholder="Start typing to search..." 
            className="input input-bordered input-accent w-full" 
        />
        
        <div className="flex flex-wrap gap-2 mt-2">
            {/* Sample Chips based on user's search criteria */}
            <span className="badge badge-primary">New York <i className="fas fa-times ml-2 cursor-pointer"></i></span>
            <span className="badge badge-primary">2 Bedrooms <i className="fas fa-times ml-2 cursor-pointer"></i></span>
            <span className="badge badge-primary">Studio <i className="fas fa-times ml-2 cursor-pointer"></i></span>
        </div>
        
        <button className="btn btn-primary w-full mt-2">Search</button>
    </div>
</div>

    {/* Filter by Price */}
    <div className="flex flex-col items-center justify-center w-full h-52 bg-base-300 rounded-box p-4 space-y-4">
    <div className="w-full max-w-xs md:w-full">
        <label className="label">
            <span className="label-text">Sort by Price</span>
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