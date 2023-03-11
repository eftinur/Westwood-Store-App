import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

const CartPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 py-4 min-h-screen">
      <h3 className="text-2xl uppercase">Your bag</h3>
      <div className="grid grid-cols-5 uppercase my-12 pb-3 border-b">
        <p className="col-span-2">Item</p>
        <p className="col-span-1 text-end">Price</p>
        <p className="col-span-1 text-end">Quantity</p>
        <p className="col-span-1 text-end">Total</p>
      </div>
      <div className="grid grid-cols-5 pb-3  border-b">
        <div className="col-span-2 flex items-center gap-x-6">
          <img
            className="w-20 h-20"
            src="https://m.media-amazon.com/images/I/81Tc71cc2KL._AC_UL1500_.jpg"
            alt=""
          />
          <div>
            <h5 className="text-2xl pb-2">RAIN COAT</h5>
            <p className="text-xs">Estimated shipping date: 15th March</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end">$65.87</div>
        <div className="col-span-1 flex items-center justify-end">
          <div className="flex items-center gap-x-4">
            <IoMdRemove />
            2
            <IoMdAdd />
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end gap-x-4">
          <p>$131.14</p>
          <AiFillDelete size={25} className="-mt-1"/>
        </div>
        <div className="col-span-1 flex items-center justify-end"></div>
      </div>
      <div className="flex justify-start flex-col w-1/3 ml-auto my-8">
        <h5 className="text-xl font-bold">ORDER SUMMARY</h5>
        <div className="flex justify-between pt-3">
          <p>Subtotal:</p>
          <p>$1019.15</p>
        </div>
        <div className="flex justify-between pt-3">
          <p>Delivery Charge:</p>
          <p>$80</p>
        </div>
        <div className="flex justify-between pt-3">
          <p>Coupon code:</p>
          <a href="/" className="underline text-blue-600">Add coupon</a>
        </div>
        <div className="flex justify-between pt-3">
          <p>Grand Total:</p>
          <p>$10.19.15</p>
        </div>
        <button className="w-[150px] bg-[#00BFA6] text-white rounded-md my-8 py-2 font-normal capitalize hover:bg-[#282828] duration-300 ml-auto">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
