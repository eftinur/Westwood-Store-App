import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 py-4 flex justify-between items-center">
      <div className="flex-1 flex items-center">
        <span>EN</span>
        <div className="flex items-center gap-3 p-2 ml-6 input input-bordered">
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:border-none focus:outline-none"
          />
          <BsSearch size={25} />
        </div>
      </div>
      <div className="flex-1 font-baloo text-3xl font-medium text-center text-[#FF556B] leading-7">
        Westwood <br /> Store
      </div>
      <div className="flex-1">
        <ul className="flex justify-end items-center gap-5 uppercase">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/signin">Sign-in</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="relative">
                <HiOutlineShoppingCart size={30} />
                <span className="bg-[#FF556B] w-5 h-5 rounded-full text-white text-center absolute -top-2 -right-1">
                  <p>5</p>
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
