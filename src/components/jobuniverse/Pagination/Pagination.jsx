import React from "react";
import { Img } from "../../common/Img";
import Images from "../../../assets/images/Image";

function Pagination({ totalJobs, jobsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalJobs / jobsPerPage); // Calculate total pages

  return (
    <div className="flex justify-center mt-6 space-x-3">
      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`opacity-${currentPage === 1 ? "50" : "100"}`}
      >
        <Img src={Images.NextActive} alt="Previous" className="h-[34px] w-[20px]" />
      </button>
{/* 
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
        </button>
      ))} */}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`opacity-${currentPage === totalPages ? "50" : "100"}`}
      >
        <Img src={Images.Next} alt="Next" className="h-[34px] w-[20px]" />
      </button>
    </div>
  );
}

export default Pagination;
