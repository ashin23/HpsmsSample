import React from 'react'

const Register = ({isRegister, isRegisterClose}) => {
if(!isRegister) return null;
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    justify-center items-center top-50 flex ">
    <div className="grid grid-rows-1 gap-5 justify-center mt-64 bg-white p-5">
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
    <div className="grid grid-cols-2 gap-60">
    <input
      className="pl-10 pr-3 py-2 w-[200%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
      placeholder="Verification Code"
      type="text"
    ></input>
    <button className="ml-5 px-3 py-2 w-[45%] text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500">Send Code</button>
    </div>
    <div>
    <label>
              {" "}
              <input type="checkbox"></input>Accept the Terms & Condition
            </label>
    </div>
    <div className="grid grid-cols-2 mt-14  gap-2">
    <button className=" px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg border-2 border-blue-500">Register</button>
    <button className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-1 rounded-lg border-2 border-blue-500" onClick={() => isRegisterClose()}>Cancel</button>
    </div>
   
  </div>
  </div>
  )
}

export default Register

