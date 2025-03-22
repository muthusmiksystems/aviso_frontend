import React, { useState } from "react";
import JobCard from "./JobCard";
import Pagination from "../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
function JobList({ jobs }) {
    const navigation=useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;

    // Pagination Logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
    const handleDescription=(item)=>{
        navigation('/job-description',{state:item})
    }
    return (
        <div>
            {/* Job Grid */}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {currentJobs.map((job, index) => (
                    <JobCard key={index} job={job} jobdescription={handleDescription} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination
                totalJobs={jobs.length}
                jobsPerPage={jobsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </div>
    );
}

export default JobList;
