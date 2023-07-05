import React, { useState } from "react";

const ModalRequest = ({ isVisible5, onClose5 }) => {
  const [isActive, setActive] = useState(false);
  const [isActive1, setActive1] = useState(false);

  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");

  const options = ["Waiter", "Dishwasher", "Room Attendant"];
  const options1 = ["1-10 ", "11-20", "21-30"];
  if (!isVisible5) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    justify-center items-center top-50 flex "
    >
      <div className=" bg-white grid grid-cols-2 p-10 gap-3">
        <label className="justify-center flex font-semibold">Location</label>
        <input
          className="pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Location"
          type="text"
        ></input>
        <label className="justify-center flex font-semibold">Hotel</label>
        <input
          className=" pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Hotel"
          type="text"
        ></input>
        <label className="justify-center flex font-semibold">Date</label>
        <input
          className=" pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder=""
          type="datetime-local"
        ></input>
        <label className="justify-center flex font-semibold">
          Jobs Description
        </label>
        <input
          className=" pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Jobs Description"
          type="text"
        ></input>
        <label className="justify-center flex font-semibold">
          Additional Information
        </label>
        <input
          className=" pl-10 pr-3 py-2 w-[100%] font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          placeholder="Additional Information"
          type="text"
        ></input>
        <label className="justify-center flex font-semibold">
          Number of Personel
        </label>
        <div className="">
        <div
          onClick={() => setActive1(!isActive)}
          className="  hover:bg-sky-400 border-2 border-black h-8 text-black hover:text-white p-1  rounded-lg  "
        >
          {selected1 || "Select Number of Personel"}
        </div>
        <div className="relative">
          {isActive1 && (
            <div className="bg-gray-100 pt-0 absolute w-[100%]">
              {options1.map((options1) => (
                <div
                  onClick={() => {
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
        <label className="justify-center flex font-semibold">Position</label>
        <div className="">
          <div
            onClick={() => setActive(!isActive)}
            className="hover:bg-sky-400 border-2 border-black  h-8 text-black hover:text-white p-1 rounded-lg  box-decoration-slice  "
          >
            {selected || "Select Position"}
          </div>
          <div className="relative">
            {isActive && (
              <div className="bg-gray-100 pt-0 absolute w-[100%] ">
                {options.map((option) => (
                  <div
                    onClick={() => {
                      setSelected(option);
                      setActive(false);
                    }}
                    className="font-sans"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 ml-16 gap-5 mt-5 w-[173%] ">
          <button className=" items-center hover:bg-sky-400 border-2 border-black text-black hover:text-white p-[0.5%] hover:-translate-y-1 rounded-lg">
            Request
          </button>

          <button
            onClick={() => onClose5()}
            className=" items-center hover:bg-sky-400 border-2 border-black text-black hover:text-white p-[0.5%] hover:-translate-y-1 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRequest;
