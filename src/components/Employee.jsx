import React, { useState } from "react";
import logo from "./images/magnifying-glass.png";
import ModalJobType from "./ModalJobType";

const Employee = () => {
  const [showJob , setShowJob] = useState(false);
  return (
    <div className="grid flex-col shadow-lg w-full mb-6 mt-4 ">
      <div className="w-[99.1%]">
      <div className="flex ml-0 mb-10 bg-[#513BD7] p-2 h-[62px]">
        <img src={logo} alt="/" className="h-8 w-7 absolute pt-1 mr-48 "></img>
        <input
          className="pl-10 pr-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Search name"
          type="search"
        ></input>

      
        <button onClick={() =>setShowJob(true)} className="ml-10  px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg">Position</button>
        <ModalJobType isOpen={showJob} onExit={() => setShowJob(false)}/>
        

        <button className="ml-10  px-3 py-1 text-sm tracking-widest bg-white  rounded-lg">
          {""}
          Date and Time
          <input
            type="datetime-local"
            placeholder="Date and time"
            className="ml-10  px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg"
          ></input>
        </button>

        <button className="ml-10  px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg">Deploy</button>
        
        
      </div>
      <h1 className="font-bold">Employee's List</h1>
      <div className=" bg-[#988AB5] block  m-4 p-4 w-full overflow-x-auto ">
        <table className="w-full bg-[#FBF8FF] ">
          <thead>
            <tr className="border border-solid border-l-0  justify-evenly">
              <td className="text-md px-6 py-3">Name</td>
              <td className="text-md px-6 py-3">Position</td>
              <td className="text-md px-6 py-3">Email</td>
              <td className="text-md px-6 py-3">Status</td>
              <td className="text-md px-6 py-3">Hotel</td>
              
            </tr>
          </thead>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>janjay</td>
            <td>Room Attendant</td>
            <td>example123@gmail.com</td>
            <td>Complete</td>
            <td>Shangrila</td>
          
          </tr>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>beatriz</td>
            <td>Waiter</td>
            <td>example123@gmail.com</td>
            <td>Complete</td>
            <td>Shangrila</td>
                  
          </tr>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>janearl</td>
            <td>Dishwasher</td>
            <td>example123@gmail.com</td>
            <td>Complete</td>
            <td>Shangrila</td>
            
          </tr>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>Hera</td>
            <td>Laundry</td>
            <td>example123@gmail.com</td>
            <td>Complete</td>
            <td>Shangrila</td>
            
          </tr>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>Sean</td>
            <td>Room Attendant</td>
            <td>example123@gmail.com</td>
            <td>Complete</td>
            <td>Shangrila</td>
           
          </tr>
        </table>
      </div>
      </div>
    </div>
  )
}

export default Employee

