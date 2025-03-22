import React from "react";
import { FaMapMarkerAlt, FaDollarSign, FaUsers, FaRegBookmark } from "react-icons/fa";
import { Img } from "../../components/common/Img";

function JobCard({ job ,jobdescription}) {
  return (
    <div className="bg-white text-black rounded-xl p-6 relative w-full">
      {/* Bookmark Icon */}


      {/* Job Icon & Title */}
      <div className="flex items-center justify-between">
        {/* Left: Job Icon & Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-[#F4F4F4] p-2 rounded-md">
            <Img alt="job icon" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-sm font-bold">{job.title}</h3>
            <span className="text-sm text-[#787878]">Ref# {job.reference}</span>
          </div>
        </div>

        {/* Right: Bookmark Icon */}
        <FaRegBookmark className="text-black text-lg cursor-pointer" />
      </div>


      {/* Education Levels */}
      <div className="flex flex-wrap mt-4 gap-2">
        {job.tags.map((level, index) => (
          <span
            key={index}
            className="bg-[#F4F4F4] text-[#787878] text-xs font-medium px-2 py-1 rounded-md"
          >
            {level}
          </span>
        ))}
      </div>

      {/* Salary, Location & Vacancies */}
      <div className="mt-4 space-y-2 text-xs font-medium text-[#787878]">
        <div className="flex items-center gap-2">
          Rating: <span className="text-[#29ABE2]"> {job.rating}</span>
        </div>
        <div className="flex items-center gap-2">
          Ranking: <span className="text-[#29ABE2]"> {job.ranking}</span>
        </div>
        <div className="flex items-center gap-2">
          Estimation cost: {job.estimated_cost}
        </div>
        <div className="flex items-center gap-2">
          Rich Extracurricular Activities: {job.extracurricular_activities}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-between">
        <button className="bg-[#F4F4F4] px-5 py-2 rounded-full font-semibold text-xs" onClick={()=>jobdescription(job)}>
          Registration Info 
        </button>
        <button className="bg-[#29ABE2] text-white px-4 py-2 rounded-full text-xs ">
          Visit Website
        </button>
      </div>
    </div>
  );
}

export default JobCard;
