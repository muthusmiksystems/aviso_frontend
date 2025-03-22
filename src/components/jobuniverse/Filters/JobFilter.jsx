import React from 'react'
import { FaTh, FaBars } from "react-icons/fa";
function JobFilter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-3 gap-5 bg-gray-100">
                {/* Left Section */}
                <p className="text-gray-600 text-sm">
                    Showing Result :{" "}
                    <span className="text-blue-500 font-semibold">15</span> of{" "}
                    <span className="text-blue-500 font-semibold">359</span> Job types:{" "}
                    <span className="text-blue-500 font-semibold">Automotive</span> in{" "}
                    <span className="text-blue-500 font-semibold">Paris, France</span>
                </p>

                {/* Right Section */}
                <div className="flex items-center space-x-3">
                    {/* Dropdown */}
                    <select className="border rounded-md px-3 py-1 text-sm shadow-sm">
                        <option>Most Relevant</option>
                        <option>Newest</option>
                        <option>Highest Paying</option>
                    </select>

                    {/* Grid Icon */}
                    <button className="bg-blue-500 text-white p-2 rounded-md shadow">
                        <FaTh />
                    </button>

                    {/* List Icon */}
                    <button className="text-black text-lg">
                        <FaBars />
                    </button>
                </div>
            </div>
  )
}

export default JobFilter