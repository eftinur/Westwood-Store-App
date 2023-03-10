import React from "react";
import { CiMail } from "react-icons/ci";

const Newsletter = () => {
  return (
    <section className="bg-[#282828] px-3 py-12">
      <div className="max-w-[1320px] mx-auto  flex flex-col justify-center items-center text-white">
        <h2 className="text-3xl text-[#d02027] uppercase font-medium tracking-widest">
          Newsletter
        </h2>
        <p className="mt-4 mb-8 font-light">
          Keep yourself updated with the latest Sailor News, Fashion Updates and
          Blogs! Subscribe here! It’s simple
        </p>
        <div className="flex justify-between items-center gap-2 input input-bordered w-2/4 text-gray-700">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-8 focus:outline-none flex-1"
          />
          <CiMail size={30} className="flex-2" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
