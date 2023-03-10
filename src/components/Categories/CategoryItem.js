import React from "react";
import { Link } from "react-router-dom";
const CategoryItem = ({ item }) => {
  const { image, info } = item;
  console.log(image, info);
  return (
    <div className="flex-1">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#282828] bg-opacity-50 rounded-xl">
          <h2 className="text-5xl text-white font-medium font-baloo tracking-widest uppercase">
            {info}
          </h2>
          <Link to="/categories">
            <button className="w-[150px] bg-[#d02027] text-white rounded-md my-4 py-2 ml-0 sm:ml-3 font-medium uppercase hover:bg-[#282828] duration-300">
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
