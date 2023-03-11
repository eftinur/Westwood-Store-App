import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 py-4 min-h-screen flex items-center">
      <div className="flex items-center">
        <div className="flex-1 my-24 mx-4">
          <img
            src="https://images.unsplash.com/photo-1474666488182-66ec723476c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            alt=""
            className="h-full object-cover"
          />
        </div>
        <div className="flex-1 mx-auto py-24">
          <h2 className="text-2xl uppercase mx-20">Sign in to Continue</h2>
          <form className="grid grid-cols-1 gap-4 mt-8 mx-20">
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
            <button className="w-full bg-[#00BFA6] text-white rounded-md my-2 py-2 font-normal capitalize hover:bg-[#282828] duration-300">
              Sign in
            </button>
          </form>
          <div className="mx-20">
            <button className="w-full bg-[#00BFA6] text-white rounded-md my-2 py-2 font-normal capitalize hover:bg-[#282828] duration-300 flex items-center justify-center gap-x-2">
            <img src="https://img.icons8.com/color/48/null/google-logo.png" alt="" className="h-6 w-6"/>
            <span>Sign in with Google</span>
            </button>
          </div>
          <span className="mx-20">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
