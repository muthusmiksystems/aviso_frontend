import React, { useState } from "react";
import { FaRegBuilding, FaSackDollar } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { TbBriefcase2 } from "react-icons/tb";

const TopFilter = ({ jobdata, onFilter }) => {

  // Function to format selected salary
  const formatSalary = (sal) => {
    if (!sal) return "All Salaries"; // Default text

    const formattedSalary = sal.replace(/\s/g, "").match(/(\$?)(\d+)\s*-\s*(\$?)(\d+)/);
    if (!formattedSalary) return sal;

    return (
      <span className="flex gap-1 items-center w-auto">
        <span className="text-[#29ABE2] font-bold">{formattedSalary[1] || "$"}</span>
        <span className="text-[#29ABE2]">{formattedSalary[2]}</span>
        <span className="text-gray-900"> USD - </span>
        <span className="text-[#29ABE2] font-bold">{formattedSalary[3] || "$"}</span>
        <span className="text-[#29ABE2]">{formattedSalary[4]}</span>
        <span className="text-gray-900"> USD</span>
      </span>
    );
  };
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
    <div className="flex  fonts-[OmnesArabic] font-regular flex-wrap items-center gap-3 md:gap-4  px-2">
      {/* Industry Type Dropdown */}
      <div className="flex items-center bg-white p-4 w-full sm:w-auto  rounded-full ">
        <TbBriefcase2 className="text-[#1A1A1A] mr-2" />
        <span className="text-gray-700 text-sm sm:text-[14px]">Industry Type:</span>
        <select
          className="ml-2 text-gray-900 text-sm ext-sm sm:text-[14px] bg-transparent focus:outline-none"
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
      <div className="flex items-center bg-white p-4 w-full sm:w-auto rounded-full ">
        <GrLocation className="text-[#1A1A1A] mr-2" />
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
      <div className="flex items-center bg-white p-4 w-full sm:w-auto rounded-full ">
        <FaRegBuilding className="text-[#1A1A1A] mr-2" />
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
      <div className="flex text-sm sm:text-[14px] items-center bg-white p-4 w-full sm:w-auto rounded-full relative">
        <FaSackDollar className="text-[#1A1A1A] mr-2" />
        <div className="relative w-full bg-white">
          {/* Display formatted salary as selected value */}
          <div className="absolute inset-0   flex  items-center pl-2 bg-white pointer-events-none">
            {formatSalary(salary)}
          </div>

          {/* Hidden Select Box */}
          <select
            className="opacity-0 w-full h-full text-gray-900 text-sm bg-transparent focus:outline-none"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          >
            <option value="">All Salaries</option>
            {salaries.map((sal, index) => (
              <option key={index} value={sal}>
                {sal}
              </option>
            ))}
          </select>
        </div>
      </div>



      {/* Clear All Button */}
      <button
        className="bg-white p-4 w-full sm:w-auto px-6 text-gray-700 text-sm rounded-full  hover:bg-gray-100"
        onClick={() => { setIndustry(""); setLocation(""); setRelocate("Relocate"); setSalary(""); onFilter(jobdata); }}
      >
        Clear All
      </button>

      {/* Search Button */}
      <button
        className="bg-[#29abe2] text-white p-4 w-full sm:w-auto px-6 rounded-full text-sm cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default TopFilter;
