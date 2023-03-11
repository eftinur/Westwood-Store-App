import React from "react";
import { Link } from "react-router-dom";
const CategoryItem = ({ item }) => {
  const { image, info } = item;
  console.log(image, info);
  return (
    <div className="flex-1 shadow-2xl">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#282828] bg-opacity-50">
          <h2 className="text-5xl text-white font-medium font-baloo tracking-widest uppercase">
            {info}
          </h2>
          <Link to="/categories">
            <button className="w-[150px] bg-[#00BFA6] text-white rounded-md my-4 py-2 font-normal capitalize hover:bg-[#282828] duration-300">
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
