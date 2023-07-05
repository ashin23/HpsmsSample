import React from "react";

const ModalApply = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
      justify-center items-center flex  "
    >
      <div className="  bg-white w-[40%] ">
        <div className=" grid grid-rows-1 gap-3  p-5 rounded ">
          <input
            className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            placeholder="Full Name"
            type="text"
          ></input>
          <input
            className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            placeholder="Email"
            type="text"
          ></input>
          <input
            className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            placeholder="City"
            type="text"
          ></input>
          <h1 className="flex font-bold text-xl ml-3">Requirements</h1>
          <input
            className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            placeholder="Upload File"
            type="file"
          ></input>
           <input
            className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            placeholder="Relevant Experience"
            type="text"
          ></input>
          <h2 className=" font-semibold text-xl">Questions from the employer</h2>
          <h3 className=" font-semibold text-xl">Will you be able to relocate or commute to Manila for the job</h3>
          
        </div>


        <div>
        <ul className="grid grid-cols-4 gap-5 p-2 pt-5 pb-5">
       <li><input type="checkbox"></input> Yes,I can make the commute </li>
       <li><input type="checkbox"></input> Yes,I planning to relocate </li>
       <li><input type="checkbox"></input> Yes,but i need relocation assistance </li> 
       <li><input type="checkbox"></input> No</li> 
        </ul>
      </div>
        <div className=" grid grid-cols-2">
        <button className=" hover:bg-green-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg">Submit</button>
        <button className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg" onClick={() => onClose()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ModalApply;
