import React from 'react'
import logo from './images/magnifying-glass.png'

const RequestList = () => {
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
        <button className="ml-10  px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg">Position</button>
        <button className="ml-10  px-3 py-2 text-sm tracking-widest bg-white hover:bg-sky-400 hover:text-white rounded-lg">Deploy</button>
      </div>
      <h1 className="font-bold">Request List</h1>
      <div className="bg-[#988AB5] block  m-4 p-4 w-full overflow-x-auto ">
        <table className="w-full bg-[#FBF8FF]">
          <thead>
            <tr className="border border-solid border-l-0  justify-evenly">
              <td className="text-md px-6 py-3">Coordinator</td>
              <td className="text-md px-6 py-3">Position</td>
              <td className="text-md px-6 py-3">Date Needed</td>
              <td className="text-md px-6 py-3">Time</td>
              <td className="text-md px-6 py-3">Number of Employees</td>
            </tr>
          </thead>
          <tr>
            <td><input type="checkbox"  className='mr-1'></input>janjay</td>
            <td>Room Attendant</td>
            <td>2/2/2023</td>
            <td>8:00am</td>
            <td>50</td>
          </tr>
          <tr>
            <td><input type="checkbox" className='mr-1'></input>beatriz</td>
            <td>Waiter</td>
            <td>2/2/2023</td>
            <td>8:00am</td>
            <td>50</td>
          </tr>
          <tr>
            <td><input type="checkbox" className='mr-1'></input>janearl</td>
            <td>Dishwasher</td>
            <td>2/2/2023</td>
            <td>8:00am</td>
            <td>50</td>
          </tr>
          <tr>
            <td><input type="checkbox" className='mr-1'></input>Hera</td>
            <td>Laundry</td>
            <td>2/2/2023</td>
            <td>8:00am</td>
            <td>50</td>
          </tr>
          <tr>
            <td><input type="checkbox" className='mr-1'></input>Sean</td>
            <td>Room Attendant</td>
            <td>2/2/2023</td>
            <td>8:00am</td>
            <td>50</td>
          </tr>
        </table>
      </div>
      </div>
    </div>
  )
}

export default RequestList
