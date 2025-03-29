import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TiArrowForward } from "react-icons/ti";
const SearchComponent = ({ filteredJobs }) => {
    const { user } = useSelector((state) => state.auth);
    const naviagate = useNavigate();
    const handleclick = () => {
        if (user) {
            naviagate("/jobuniverse");
        } else {
            naviagate("/login");
        }
    };
    return (
        <div className="absolute top-full left-0 xl:top-15 xl:left-15 w-full flex mt-2 xl:mt-0 z-10  animate-slide-up">
            {Object.keys(filteredJobs).length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full max-w-lg bg-white shadow-lg rounded-lg p-4 z-10 
            max-h-80 md:max-h-80 overflow-y-auto scrollbar-hide"
                >
                    {/* <h2 className="text-lg font-semibold mb-3">Search Results:</h2> */}
                    {Object.entries(filteredJobs).map(([category, jobs]) => (
                        <div key={category} className="mb-3">
                            <h3 className="text-left text-sm md:text-lg font-bold text-[#B82D97] my-3 cursor-pointer" onClick={handleclick}>{category}</h3>
                            <ul className="flex flex-wrap gap-5 list-disc md:mx-10">
                                {jobs.map((job) => (
                                    <li
                                        key={job._id}
                                        className=" text-xs md:text-md flex items-center justify-between w-full list-none text-black font-semibold cursor-pointer"
                                        onClick={handleclick}
                                    >
                                        <span>{job.small_description}</span>
                                        <TiArrowForward className="text-lg" />
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default SearchComponent;
