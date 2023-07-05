import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Applicant from "./components/Applicant";
import Quelist from "./components/Quelist";

import Employee from "./components/Employee";
import AccountSetting from "./components/AccountSetting";
import RequestList from "./components/RequestList";
import UserList from "./components/UserList";



function App() {
  return (
    <div className="App">
      
        <header className=" z-99 w-screen top-0">
          <Navbar />
        </header>
        <main className="flex-grow roll-in-left  h-[762px] mt-[120px] bg-[#FBF8FF]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Applicant" element={<Applicant />} />
            <Route path="/Quelist" element={<Quelist />} />
            
            <Route path="/Employee" element={<Employee />} />
            <Route path="/AccountSetting" element={<AccountSetting />} />
            <Route path="/RequestList" element={<RequestList />} />
            <Route path="/UserList" element={<UserList />} />

            
          </Routes>
        </main>

        <footer className=" w-screen bottom-0">
          <Footer />
        </footer>
      
    </div>
  );
}

export default App;
