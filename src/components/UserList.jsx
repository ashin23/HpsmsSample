import React from 'react'
import logo from "./images/magnifying-glass.png";

const UserList = () => {
  return (
    <div className="shadow-lg w-full mb-6 mt-4 ">
      <div className="w-[99.1%]">
      <div className="flex ml-0 mb-10 bg-[#513BD7] p-2 h-[62px]">
        <img src={logo} alt="/" className="h-8 w-7 absolute pt-1 mr-48 "></img>
        <input
          className="pl-10 pr-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Search name"
          type="search"
        ></input>
        
       
        <button  className="ml-10  px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg">
          Edit
        </button>
       
      </div>
      <h1 className="font-bold">User List</h1>
      <div className="bg-[#988AB5] block  m-4 p-4 w-full overflow-x-auto ">
        <table className="w-full bg-[#FBF8FF] ">
          <thead>
            <tr className="border border-solid border-l-0  justify-evenly">
              <td className="text-md px-6 py-3 ">Name</td>
              <td className="text-md px-6 py-3">Position</td>
              <td className="text-md px-6 py-3">Email</td>
              <td className="text-md px-6 py-3">Status</td>
              
            </tr>
          </thead>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>janjay</td>
            <td>HR</td>
            <td>example123@gmail.com</td>
            <td>Active</td>
            
          </tr>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>beatriz</td>
            <td>Coordinator</td>
            <td>example123@gmail.com</td>
            <td>Active</td>
            
          </tr>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>janearl</td>
            <td>HR</td>
            <td>example123@gmail.com</td>
            <td>Active</td>
            
          </tr>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>Hera</td>
            <td>HR</td>
            <td>example123@gmail.com</td>
            <td>Active</td>
            
          </tr>
          <tr>
            <td><input type="checkbox" className="mr-1"></input>Sean</td>
            <td>HR</td>
            <td>example123@gmail.com</td>
            <td>Active</td>
            
          </tr>
        </table>
      </div>
      </div>
    </div>
  );
};

export default UserList
