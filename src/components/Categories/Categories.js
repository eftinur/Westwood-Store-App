import React from "react";
import menImage from "../../assets/Categories/james-barr-oRsSeYqJUgY-unsplash.jpg";
import womenImage from "../../assets/Categories/roland-denes-HnIt4A_3E28-unsplash.jpg";
import kidImage from "../../assets/Categories/zachary-kadolph-xdGELZzh2Pw-unsplash.jpg";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1574177556859-1362f72ed6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      info: "Men",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595601827380-a3f606ea4fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      info: "Kid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516350621-23eed2307778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      info: "Women",
    },
  ];
  return (
    <div className="max-w-[1320px] mx-auto px-3 py-5 my-12 grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <CategoryItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Categories;
