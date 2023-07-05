import React, {  useState } from "react";
import logo from "./images/hotelproimage.png";
import { Link } from "react-router-dom";

import PostJob from "./PostJob";
import Request from "./Request";
import AccountSetting from "./AccountSetting";
import Signin from "./Signin";
const Navbar = () => {
  const [showModalPostJob, setShowPostJob] = useState(false);
  const [showModalRequest, setShowRequest] = useState(false);
  const [showModalAcc, setShowAcc] = useState(false);
  const [showModalSignin,setModalSignin] = useState(false);
  return (
    <div className="h-8">
      <div className="flex flex-col bg-[#162388] text-white font-bold  text-lg">
        HPSMS
        <div className="flex justify-center">
          <img src={logo} alt="/" className="h-20 w-40 p-2"></img>
        </div>
        <div className="flex list-none space-x-6 justify-center pb-2 rounded-lg text-white font-semibold ">
          <Link
            to="/"
            className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg "
          >
            Dashboard
          </Link>
          <Link
            className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg"
            to="/Applicant"
          >
            Applicants Lists
          </Link>
          <Link
            className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg "
            to="/Quelist"
          >
            Queuing List
          </Link>
          <Link
            to="/Employee"
            className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg "
          >
            Employee List
          </Link>
          <Link
            to="/RequestList"
            className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg "
          >
            Request List
          </Link>

          <button
            onClick={() => setShowAcc(true)}
            className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg "
          >
            Account Managent
          </button>
          <Link
            to="/UserList"
            className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg "
          >
            User List
          </Link>
         

          <button
            className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg "
            onClick={() => setShowRequest(true)}
          >
            Request
          </button>

          <a className=" hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg ">
            Upload
          </a>

          <button
            onClick={() => setShowPostJob(true)}
            className="  hover:bg-sky-400  hover:text-white p-[0.5%] hover:-translate-y-2 rounded-lg "
          >
            {" "}
            Post a Job
          </button>
        </div>

        <button
         onClick={() => setModalSignin(true)}
         className="flex absolute top-5 right-4 h-15 w-16 hover:bg-sky-400 hover:-translate-y-2 hover:text-white rounded-lg ">
          Sign in
        </button>

      </div>
      <PostJob
        isPost={showModalPostJob}
        isPostClose={() => setShowPostJob(false)}
      />

      <Request
        isVisible5={showModalRequest}
        onClose5={() => setShowRequest(false)}
      />
      <AccountSetting
        isAcc={showModalAcc}
        isAccClose={() => setShowAcc(false)}
      />
      <Signin
      isSignin={showModalSignin}
      isSignClose = {() =>setModalSignin(false)}
      />
    </div>
  );
};

export default Navbar;
