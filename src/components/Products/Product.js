import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const { title, price, image } = item;
  return (
    <div className="flex justify-center flex-col gap-4 border py-2 shadow-2xl">
      <Link to="/product" className="h-[360px] my-4">
        <img src={image} alt="" className="h-[60%] mx-auto" />
        <div className="text-left px-6 pt-6 pb-2">
          <div className="flex-1">
            <span className="text-lg">${price}</span>
            <p className="text-xl pt-2 pb-4">LEATHER BAG</p>
          </div>
          <HiOutlineShoppingCart
            size={20}
            className="px-1 py-2 w-10 h-10 rounded-full bg-[#00BFA6] text-white"
          />
        </div>
      </Link>
    </div>
  );
};

export default Product;
