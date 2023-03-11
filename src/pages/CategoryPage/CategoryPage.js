import React from 'react';
import Products from '../../components/Products/Products';

const CategoryPage = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3 py-4 min-h-screen">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-x-2">
            <h5 className="text-lg font-medium">Filter:</h5>
            <select className="select select-bordered">
              <option value="" disabled selected>
                Color
              </option>
              <option>Red</option>
              <option>Green</option>
              <option>White</option>
            </select>
            <select className="select select-bordered">
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="flex items-center gap-x-2">
            <h5 className="text-lg font-medium">Sort:</h5>
            <select className="select select-bordered">
              <option disabled selected>
                Newest
              </option>
              <option>Highest</option>
              <option>Lowest</option>
            </select>
          </div>
        </div>
        <Products />
      </div>
    );
};

export default CategoryPage;