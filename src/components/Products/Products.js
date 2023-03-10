import React from "react";
import data from "../../data";
import Product from "./Product";

const Products = () => {
  console.log(data);
  return (
    <div className="max-w-[1320px] mx-auto px-3 py-5 my-12">
        <h2 className="text-3xl font-medium mt-4 mb-10 uppercase">New Arrivals</h2>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
