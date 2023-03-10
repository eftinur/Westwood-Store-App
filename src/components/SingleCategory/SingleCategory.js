import React from 'react';
import Products from '../Products/Products';

const SingleCategory = () => {
    return (
        <div className='max-w-[1320px] mx-auto px-3 py-4'>
            <h3>Mens Collection</h3>
            <div className='flex justify-between items-center py-4'>
                <div>Filter-1</div>
                <div>Filter-2</div>
            </div>
            <Products />
        </div>
    );
};

export default SingleCategory;