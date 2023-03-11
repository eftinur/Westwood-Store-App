import React from "react";
import { Link } from "react-router-dom";
import registerImg from "../../assets/register.jpg";

const Register = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 py-4 min-h-screen flex items-center">
      <div className="flex">
        <div className="flex-1 my-24 mx-4">
          <img src={registerImg} alt="" className="h-full object-cover" />
        </div>
        <div className="flex-1 mx-auto py-24">
          <h2 className="text-2xl uppercase mx-20">Create an account</h2>
          <form className="grid grid-cols-1 gap-4 mt-8 mb-2 mx-20">
            <input
              type="text"
              placeholder="First name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Enter password"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Confirm password"
              className="input input-bordered w-full"
            />
            <button className="w-full bg-[#00BFA6] text-white rounded-md my-2 py-2 font-normal capitalize hover:bg-[#282828] duration-300">
              Register
            </button>
          </form>
          <span className="mx-20">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600">
              Sign-in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
