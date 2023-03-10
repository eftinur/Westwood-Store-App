import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Product = ({ item }) => {
  const { title, price, image } = item;
  return (
    <div className="h-[420px] flex flex-col gap-4 border rounded-xl py-6 pb-2">
      <img src={image} alt="" className="h-[60%] mx-auto" />
      <div className="text-left px-6 py-2">
        <span className="text-sm font-bold">${price}</span>
        <h2 className="text-lg font-medium pt-1 pb-5">{title}</h2>
        <a href="/" className="flex items-center gap-2">Add to cart <HiOutlineShoppingCart size={25} /></a>
      </div>
    </div>
  );
};

export default Product;
