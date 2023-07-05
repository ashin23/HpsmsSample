import React, { useState } from "react";
import Register from "./Register";
const Signin = ({ isSignin, isSignClose }) => {
const [showModalRegister,setModalRegister]= useState(false);
  if (!isSignin) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    justify-center items-center top-50 flex "
    >
      <div className=" justify-center items-center bg-white p-10 gap-3">
        <div className="grid grid-cols-1">
          <label className="justify-center items-center flex font-semibold">
            Log in
          </label>

          <div className="">
            <label className="justify-center flex font-semibold">Email</label>
            <input
              className="pl-4 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              placeholder="Enter Email"
              type="text"
            ></input>
          </div>
          <div className="mt-3 ">
            <label className="mb-2">Password</label>
            <input
              className="pl-4 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              placeholder="Enter Password"
              type="text"
            ></input>
          </div>
          <div className="grid grid-cols-2 gap 5 mt-3 justify-between items-center">
            <label>
              {" "}
              <input type="checkbox"></input> Remember Me
            </label>
            <a>Forgot Password</a>
          </div>
          <div className="mt-3 ">
            <button className="px-3 w-[100%] py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500">
              {" "}
              Log in
            </button>
          </div>
          <div className=" mt-3">
            <button
              onClick={() => isSignClose()}
              className="px-3 w-[100%] py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500"
            >
              Cancel
            </button>
          </div>
          <div className="mt-3">
          <button 
            onClick={() => setModalRegister(true)}
           className="px-3 w-[100%] py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500">
              {" "}
              Register
            </button>
          </div>
        </div>
      </div>
      <Register isRegister={showModalRegister} isRegisterClose={() => setModalRegister(false)}/>

    </div>
  );
};

export default Signin;
