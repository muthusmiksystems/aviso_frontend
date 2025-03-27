
import { useState } from "react";
import { FaRegBookmark, FaBookmark, FaMapMarkerAlt } from "react-icons/fa";
import { Img } from "../../common/Img";
import { FaSackDollar } from "react-icons/fa6";

const JobCard = ({ job,jobdescription }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div
      className={`rounded-xl p-6 relative w-full max-w-md mx-auto flex flex-col min-h-[300px] shadow-lg transition-all ${
        isBookmarked ? "bg-[#29ABE2] text-white" : "bg-white text-black"
      }`}
    >
      {/* Job Icon & Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-md ${isBookmarked ? "bg-[#48C2F2]" : "bg-[#F4F4F4]"}`}>
            <Img alt="job icon" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">{job.title}</h3>
            <span className={`text-xs font-regular ${isBookmarked ? "text-white" : "text-[#787878]"}`}>
              Ref# {job.reference}
            </span>
          </div>
        </div>

        {/* Bookmark Icon */}
        <div
          className={`p-2 rounded-full cursor-pointer transition-all ${
            isBookmarked ? "bg-[#48C2F2] text-white" : "bg-[#F4F4F4] text-black"
          }`}
          onClick={toggleBookmark}
        >
          {isBookmarked ? <FaBookmark className="text-lg" /> : <FaRegBookmark className="text-lg" />}
        </div>
      </div>

      {/* Education Levels */}
      <div className="flex flex-wrap mt-4 gap-2">
        {job.education_levels.map((level, index) => (
          <span
            key={index}
            className={`text-xs font-medium px-2 py-1 rounded-md ${
              isBookmarked ? "bg-[#48C2F2] text-white" : "bg-[#F4F4F4] text-[#787878]"
            }`}
          >
            {level}
          </span>
        ))}
      </div>

      {/* Salary, Location & Vacancies */}
      <div className={`mt-4 space-y-2 text-xs font-medium ${isBookmarked ? "text-white" : "text-[#787878]"}`}>
        <div className="flex items-center gap-2">
          <div className={`rounded-full p-2 ${isBookmarked ? "bg-[#48C2F2]" : "bg-[#F4F4F4]"}`}>
            <FaSackDollar />
          </div>
          USD <span className="font-semibold">{job.salary_range}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`rounded-full p-2 ${isBookmarked ? "bg-[#48C2F2]" : "bg-[#F4F4F4]"}`}>
            <FaMapMarkerAlt />
          </div>
          {job.location}
        </div>
        <p className="pl-4">Estimated Vacancies: {job.estimated_vacancies}</p>
      </div>

      {/* Sticky Footer Inside Card */}
      <div className="mt-auto pt-4 flex justify-between">
        <button
          className={`px-5 py-2 rounded-full font-regular text-xs ${
            isBookmarked ? "bg-[#48C2F2] text-white" : "bg-[#F4F4F4] text-black"
          }`}
          onClick={() => jobdescription(job)}
        >
          Detail Info
        </button>
        <button className={`${
            isBookmarked ? "bg-[#F4F4F4] text-[#48C2F2]" : " bg-[#48C2F2] text-white"
          } px-4 py-2 rounded-full text-xs font-regular`}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;


