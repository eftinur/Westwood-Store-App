import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

const ProductPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 py-20 min-h-screen">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <img
            className="w-3/4 mx-auto"
            src="https://m.media-amazon.com/images/I/81Tc71cc2KL._AC_UL1500_.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 px-8">
          <h3 className="text-5xl ">RAIN COAT</h3>
          <p className="text-2xl font-bold my-6">$32.55</p>
          <p className="mt-12 mb-5">
            Featuring weather resistant and weatherproof coating. You will be
            able to stay dry and happy. The back also has built in back vent for
            added breathability when you get too warm.
          </p>
          <p className="mt-5 mb-12">
            Available in multiple colors, our jacket was made for those days
            when you get muddy. Our Stream Rain jacket is conveniently Machine
            washable.
          </p>
          <div className="flex items-center gap-x-2 my-4">
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
          <div className="flex items-center gap-x-4 mt-12">
            <IoMdRemove />
            2
            <IoMdAdd />
            <button className="w-[150px] bg-[#00BFA6] text-white rounded-md my-4 py-2 font-normal capitalize hover:bg-[#282828] duration-300">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
