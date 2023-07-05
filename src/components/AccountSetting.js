import React, { Fragment, useState } from "react";
import ModalCreateAcc from "./ModalCreateAcc";

const AccountSetting = ({isAcc, isAccClose}) => {
  const [showModalCreateAcc, setShowCreateAcc] = useState(false);
if(!isAcc) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    justify-center items-center top-50 flex  ">
      <div className=" grid justify-center bg-white p-10 gap-3">
        <label className="flex font-bold">Email</label>
        <input
          className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Email"
          type="text"
        ></input>
        <label className="flex font-bold">Password</label>
        <input
          className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Password"
          type="text"
        ></input>
        <label className="flex font-bold">Confirm Password</label>
        <input
          className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Confirm Password"
          type="text"
        ></input>
        <div className="flex">

          <input
            className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            placeholder="Verification Code"
            type="text"
          ></input>
          <button className="ml-5 px-3 py-2 w-[45%] text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500">
            Send Code
          </button>
        </div>
        <div className=" grid grid-cols-2 gap-2">
          <button 
          className=" px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500">
            Save changes 
          </button>
          <button className=" px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500">
            Edit
          </button>
         
        </div>
        <button 
          onClick={() =>isAccClose()}
          className=" px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500">
            Cancel 
          </button>
        <div className="grid grid-cols-1 mt-14">
            <button
              onClick={() => setShowCreateAcc(true)}
              className=" px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500"
            >
              Create Account
            </button>
          
           
          
        </div>
      </div>
      <ModalCreateAcc
              isOpen1={showModalCreateAcc}
              isClose1={() => setShowCreateAcc(false)}
            />
    </div>
  );
};

export default AccountSetting;
