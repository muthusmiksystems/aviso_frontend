import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
const jobFairs = [
  {
    title: "Manufacturing industry job fair",
    date: "19 Aug 2026",
    location: "InnoTech Solutions",
    icon: "🛠️", // Replace with an actual image/icon if needed
  },
  {
    title: "Webinar Invitation",
    date: "18 Aug 2026",
    location: "Apex Enterprises",
    icon: "🔵",
  },
  {
    title: "Factory job fair",
    date: "17 Aug 2026",
    location: "Genesis Global",
    icon: "🏭",
  },
  {
    title: "Industry webinars & Job fairs",
    date: "16 Aug 2026",
    location: "Aspire Enterprises",
    icon: "🔧",
  },
];

function JobFair() {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md text-xs">
      {/* Header Section */}
      <h2 className="text-xl font-bold text-gray-900">Job Fair</h2>
      <p className="text-gray-500 text-sm mt-1">
        Find a Job Fair Invitation and Attend to look for work
      </p>

      {/* Job Fair List */}
      <div className="mt-4 space-y-4">
        {jobFairs.map((job, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3  rounded-lg cursor-pointer hover:bg-gray-200 transition"
          >
            {/* Left Section */}
            <div className="flex items-center space-x-2">
              {/* Icon */}
              <div className="p-1 bg-white rounded-md shadow">{job.icon}</div>

              {/* Job Info */}
              <div>
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <div className="flex items-center text-gray-500  mt-1">
                  <FaCalendarAlt className="mr-1 text-gray-400" /> {job.date}
                  <FaMapMarkerAlt className="ml-3 mr-1 text-gray-400" /> {job.location}
                </div>
              </div>
            </div>

            {/* Arrow Icon */}
            <span className="text-gray-500 text-xs"><FaGreaterThan />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobFair;
