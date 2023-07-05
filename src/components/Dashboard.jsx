import React, {  useState } from "react";

import ModalApply from "./ModalApply";
import ModalJobType from "./ModalJobType";
import ModalSalary from "./ModalSalary";
const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const [showJob, setShowJob] = useState(false);

  const [showSalary, setSalary] = useState(false);
  return (
    <div className="grid grid-row-2  ">
      
      <div className=" ">
      
        <div className="">
        
          <div className="flex ml-0 mb-10 bg-[#513BD7] p-2 h-[62px]">
         
            <input
              className="pl-10 pr-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              placeholder="Search job"
              type="search"
            ></input>

            <button className="ml-10  px-3 py-1 text-sm tracking-widest bg-white  rounded-lg">
                {""}
              Date and Time
              <input
                type="datetime-local"
                className="ml-10  px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg"
              ></input>
            </button>

            <button onClick={()=> setSalary(true)} className="ml-10  px-3 py-2 text-sm tracking-widest bg-white  rounded-lg">
              Salary
            </button>

            <button onClick={()=> setShowJob(true)} className="ml-10  px-3 py-2 text-sm tracking-widest bg-white  rounded-lg">
              Position
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-10  ">
            <div className="ml-32 pl-32 justify-center bg-[#988AB5] border-l-2 border-blue-500 overflow-scroll overflow-x-hidden h-[85%] ">
              {/* right side */}

              <div className="bg-[#FBF8FF]  my-8 w-[80%] ">
                <h1>HouseKeeping</h1>
                <p>
                  Anytime cleaners Experience in housekeeping or Janitorial{" "}
                </p>
                <p>570 a day</p>
                <p>Pasig</p>
                <a href="#">Know more</a>
              </div>
              <div className=" bg-[#FBF8FF]   my-8 w-[80%]">
                <h1>HouseKeeping</h1>
                <p>
                  Anytime cleaners Experience in housekeeping or Janitorial{" "}
                </p>
                <p>570 a day</p>
                <p>Pasig</p>
                <a href="#">Know more</a>
              </div>
              <div className=" bg-[#FBF8FF]  my-8 w-[80%]">
                <h1>HouseKeeping</h1>
                <p>
                  Anytime cleaners Experience in housekeeping or Janitorial{" "}
                </p>
                <p>570 a day</p>
                <p>Pasig</p>
                <a href="#">Know more</a>
              </div>
              <div className=" bg-[#FBF8FF]  my-8 w-[80%]">
                <h1>HouseKeeping</h1>
                <p>
                  Anytime cleaners Experience in housekeeping or Janitorial{" "}
                </p>
                <p>570 a day</p>
                <p>Pasig</p>
                <a href="#">Know more</a>
              </div>
            </div>

            {/* left side */}
            <div className=" bg-[#988AB5] p-1  mr-32 justify-center pl-2   border-l-2 border-blue-500 overflow-scroll overflow-x-hidden h-[85%]">
              <div className=" ">
                
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-green-600 text-white rounded-lg p-2  mr-96 justify-start flex w-[8%] "
                >
                  Apply
                </button>
                <ModalApply
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                />
              <div className="bg-[#988AB5]">
              <div className="flex items-start flex-col  bg-[#FBF8FF]">
                <h1 className="">HouseKeeping</h1>
                <p>Pasig</p>
                <p>570 a day</p>
                <p>Shangrila</p>
                <p className="pb-10">Posted 2 hours ago</p>
                <p className="font-bold">Job Description</p>
                <div>
                </div>
                  <ul className="list-disc ml-5 p-2 ">
                    <li>
                      {" "}
                      Assists the Restaurant Management Team in handling day to
                      day restaurant operations.
                    </li>
                    <li>
                      Leads and coaches Restaurant Team Members in daily
                      functions.
                    </li>
                    <li>
                      {" "}
                      Provides leadership for responses to in-store emergencies
                      or challenges.
                    </li>
                  </ul>
                  <div className="flex items-start flex-col">
                    <p className="pt-5 font-bold">Additional Information</p>
                    <p className="font-bold">Carrer Level</p>
                    <p className="">1-4 Years Experienced Employee</p>
                    <p className="pt-5 font-bold">Years of Experience</p>
                    <p className="">1 year</p>
                    <p className="pt-5 font-bold">Job Specializations</p>
                    <p className="">Hotel/Restaurant,Food/Beverage</p>
                    <p className="pt-5 font-bold">Qualification</p>
                    <p className="">Bachelor's/College Degree</p>
                    <p className="pt-5 font-bold">Job Type</p>
                    <p className="">Full time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <ModalSalary isSalary={showSalary} notOpen={() => setSalary(false)} />
        <ModalJobType isOpen={showJob} onExit={() => setShowJob(false)} />
      </div>
    </div>
  );
};

export default Dashboard;
