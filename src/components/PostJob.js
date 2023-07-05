import React, { useState } from "react";

const PostJob = ({ isPost, isPostClose }) => {
  const [isActive, setActive] = useState(false);
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);

  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");

  const options = ["Waiter", "Dishwasher", "Room Attendant"];
  const options1 = ["Full-time", "Part-time", "Temporary" , "Contract" ,"Intership"];
  const options2=["1-3 Years", "3-6 Years", " 6-9 Years", "9 Years - Above" ];
  const options3=["1-4 Years Of Experience", "4-6 Years of  Experience", " 6-9 Years of Experience", "9 Years of Experience - Above" ];
  if (!isPost) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    justify-center items-center top-50 flex  "
    >

      <div className=" bg-white p-10 grid grid-cols-2 gap-3">
      <label className="justify-center flex font-semibold">Position</label>
      <div className="">
          <div
            onClick={(e) => setActive(!isActive)}
            className="  hover:bg-sky-400 border-2 border-black h-8 text-black hover:text-white p-1  rounded-sm"
          >
            {selected || "Position"}
          </div>
          <div className="relative">
            {isActive && (
              <div className="bg-gray-100 pt-0 absolute w-[100%]">
                {options.map((options) => (
                  <div
                    onClick={(e) => {
                      setSelected(options);
                      setActive(false);
                    }}
                    className="font-sans "
                  >
                    {options}
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      <label className="justify-center flex font-semibold">Location</label>
      <input
          className="pl-4 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Location"
          type="text"
        ></input>
      <label className="justify-center flex font-semibold">Salary</label>
      <input
          className="pl-4 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Salary per day"
          type="text"
        ></input>
      <label className="justify-center flex font-semibold">Hotel</label>
      <input
          className="pl-4 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Hotel"
          type="text"
        ></input>
      <label className="justify-center flex font-semibold">Date and Time</label>
      <input
          className="pl-4 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder=""
          type="datetime-local"
        ></input>
      <label className="justify-center flex font-semibold">Job Description</label>
      <input
          className="pl-4 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Job Description"
          type="text"
        ></input>

      <label className="justify-center flex font-semibold">Carrier Level</label>
      <div className="">
          <div
            onClick={(e) => setActive3(!isActive3)}
            className="  hover:bg-sky-400 border-2 border-black h-8 text-black hover:text-white p-1  rounded-sm"
          >
            {selected3 || " Experience"}
          </div>
          <div className="relative">
            {isActive3 && (
              <div className="bg-gray-100 pt-0 absolute w-[100%]">
                {options3.map((options3) => (
                  <div
                    onClick={(e) => {
                      setSelected3(options3);
                      setActive3(false);
                    }}
                    className="font-sans "
                  >
                    {options3}
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>

      <label className="justify-center flex font-semibold">Years of Experience</label>
      <div className="">
          <div
            onClick={(e) => setActive2(!isActive2)}
            className="  hover:bg-sky-400 border-2 border-black h-8 text-black hover:text-white p-1  rounded-sm"
          >
            {selected2 || "Employee Ex"}
          </div>
          <div className="relative">
            {isActive2 && (
              <div className="bg-gray-100 pt-0 absolute   w-[100%]">
                {options2.map((options2) => (
                  <div
                    onClick={(e) => {
                      setSelected2(options2);
                      setActive2(false);
                    }}
                    className="font-sans "
                  >
                    {options2}
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
        <label className="justify-center flex font-semibold">Job Specializations</label>
        <div>
        <input
          className="pl-4 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Hotel/Restaurant,Food/Beverage"
          type="text"
        ></input>
        </div>
        <label className="justify-center flex font-semibold">Qualification</label>
        <div>
        <input
          className="pl-5 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Bachelor's/College Degree"
          type="text"
        ></input>
        </div>

        <label className="justify-center flex font-semibold">Job Type</label>
        <div className="">
          <div
            onClick={(e) => setActive1(!isActive)}
            className="  hover:bg-sky-400 border-2 border-black h-8 text-black hover:text-white p-1  rounded-sm  "
        
          >
            {selected1 || "Job Type"}
          </div>
          <div className="relative">
            {isActive1 && (
              <div className="bg-gray-100 pt-0 absolute   w-[100%]">
                {options1.map((options1) => (
                  <div
                    onClick={(e) => {
                      setSelected1(options1);
                      setActive1(false);
                    }}
                    className="font-sans "
                  >
                    {options1}
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
        <div className="flex  gap-5 justify-center  mt-10 w-[205%] ">
        <button
           
            className=" w-[40%]  hover:bg-sky-400 border border-black text-black hover:text-white p-[0.5%] hover:-translate-y-1 rounded-lg"
          >
            Post A job
          </button>
          <button
            onClick={() => isPostClose()}
            className=" w-[40%]   hover:bg-sky-400 border border-black text-black hover:text-white p-[0.5%] hover:-translate-y-1 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default PostJob;
