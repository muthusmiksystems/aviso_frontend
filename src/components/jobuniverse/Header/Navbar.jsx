import React, { useState } from "react";
import { FaRegBuilding, FaSackDollar } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { TbBriefcase2 } from "react-icons/tb";

const TopFilter = ({ jobdata, onFilter }) => {
  // Extract unique values from jobdata for filtering
  const industries = [...new Set(jobdata.map(job => job.title))];
  const locations = [...new Set(jobdata.map(job => job.location))];
  const salaries = [...new Set(jobdata.map(job => job.salary_range))];

  // State for selected filters
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [relocate, setRelocate] = useState("Relocate");
  const [salary, setSalary] = useState("");

  // Handle Search Click
  const handleSearch = () => {
    const filteredJobs = jobdata.filter(job =>
      (industry ? job.title === industry : true) &&
      (location ? job.location === location : true) &&
      (salary ? job.salary_range === salary : true)
    );
    onFilter(filteredJobs); // Pass filtered jobs to parent
  };

  return (
    <div className="flex justify-between fonts-[OmnesArabic] font-regular flex-wrap items-center gap-2 md:gap-3  px-2">
      {/* Industry Type Dropdown */}
      <div className="flex items-center bg-white p-2  rounded-full ">
        <TbBriefcase2 className="text-gray-700 mr-2" />
        <span className="text-gray-700 text-sm">Industry Type:</span>
        <select
          className="ml-2 text-gray-900 text-sm bg-transparent focus:outline-none"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        >
          <option value="">All</option>
          {industries.map((ind, index) => (
            <option key={index} value={ind}>{ind}</option>
          ))}
        </select>
      </div>

      {/* Location Dropdown */}
      <div className="flex items-center bg-white p-2  rounded-full ">
        <GrLocation className="text-gray-700 mr-2" />
        <select
          className="text-gray-900 text-sm bg-transparent focus:outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Relocate Option */}
      <div className="flex items-center bg-white p-2  rounded-full ">
        <FaRegBuilding  className="text-gray-700 mr-2" />
        <select
          className="text-gray-900 text-sm bg-transparent focus:outline-none"
          value={relocate}
          onChange={(e) => setRelocate(e.target.value)}
        >
          <option>Relocate</option>
          <option>Remote</option>
          <option>On-site</option>
        </select>
      </div>

      {/* Salary Range Dropdown */}
      <div className="flex items-center bg-white p-2  rounded-full ">
        <FaSackDollar className="text-gray-700 mr-2" />
        <select
          className="text-gray-900 text-sm bg-transparent focus:outline-none"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        >
          <option value="">All Salaries</option>
          {salaries.map((sal, index) => (
            <option key={index} value={sal}>{sal}</option>
          ))}
        </select>
      </div>

      {/* Clear All Button */}
      <button
        className="bg-white p-2  px-6 text-gray-700 text-sm rounded-full  hover:bg-gray-100"
        onClick={() => { setIndustry(""); setLocation(""); setRelocate("Relocate"); setSalary(""); onFilter(jobdata); }}
      >
        Clear All
      </button>

      {/* Search Button */}
      <button
        className="bg-[#48C2F2] text-white p-2  px-6 rounded-full text-sm cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default TopFilter;
