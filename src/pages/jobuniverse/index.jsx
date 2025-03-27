import React, { useEffect, useState } from "react";
import JobFair from "../../components/jobuniverse/Sidebar/JobFair";
import FilterSidebar from "../../components/jobuniverse/Filters/FilterSidebar";
import JobList from "../../components/jobuniverse/JobCards/JobList";
import ImportantDates from "../../components/jobuniverse/Sidebar/ImportantDates";
import TopFilter from "../../components/jobuniverse/Header/Navbar";
import JobFilter from "../../components/jobuniverse/Filters/JobFilter";
import { FaFilter } from "react-icons/fa";

const jobdata = [
    {
        "title": "Marketing",
        "reference": "NOC6547",
        "education_levels": ["MBA", "Bachelors", "Masters"],
        "salary_range": "$1500 - $6000 ",
        "location": "Paris, France",
        "estimated_vacancies": "38,000+"
    },
    {
        "title": "Sales",
        "reference": "NOC0237",
        "education_levels": ["Diploma", "Bachelors"],
        "salary_range": "$1500 - $5000 ",
        "location": "New York, USA",
        "estimated_vacancies": "30,000+"
    },
    {
        "title": "Engineering",
        "reference": "NOC8563",
        "education_levels": ["Bachelors", "Masters", "PhD"],
        "salary_range": "$2500 - $8000 ",
        "location": "Berlin, Germany",
        "estimated_vacancies": "40,000+"
    },
    {
        "title": "IT",
        "reference": "NOC2354",
        "education_levels": ["Diploma", "Bachelors"],
        "salary_range": "$3000 - $9000 ",
        "location": "London, UK",
        "estimated_vacancies": "50,000+"
    },
    {
        "title": "Finance",
        "reference": "NOC1528",
        "education_levels": ["Bachelors", "Masters"],
        "salary_range": "$2000 - $7500 ",
        "location": "Toronto, Canada",
        "estimated_vacancies": "25,000+"
    },
    {
        "title": "HR",
        "reference": "NOC6624",
        "education_levels": ["Bachelors", "Masters"],
        "salary_range": "$1800 - $6500 ",
        "location": "Dubai, UAE",
        "estimated_vacancies": "18,000+"
    },
    {
        "title": "Accounting",
        "reference": "NOC3426",
        "education_levels": ["Diploma", "Bachelors"],
        "salary_range": "$2500 - $7000 ",
        "location": "Sydney, Australia",
        "estimated_vacancies": "22,000+"
    },
    {
        "title": "Architecture",
        "reference": "NOC6783",
        "education_levels": ["Bachelors"],
        "salary_range": " $1500 - $6000 ",
        "location": "Singapore",
        "estimated_vacancies": "15,000+"
    },
    {
        "title": "Supply Chain",
        "reference": "NOC1352",
        "education_levels": ["Diploma", "Bachelors"],
        "salary_range": "$2000 - $7000 ",
        "location": "Tokyo, Japan",
        "estimated_vacancies": "17,000+"
    },
    {
        "title": "Marketing",
        "reference": "NOC6547",
        "education_levels": ["MBA", "Bachelors", "Masters"],
        "salary_range": "$1500 - $6000",
        "location": "Paris, France",
        "estimated_vacancies": "38,000+"
    }
];

function JobUniverse() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [filteredJobs, setFilteredJobs] = useState(jobdata);
    const [currentFilters, setCurrentFilters] = useState({
        industry: "",
        location: "",
        salary: ""
    });

    const applyFilters = (newFilters) => {
        setCurrentFilters(newFilters);

        const filtered = jobdata.filter(job => {
            return (
                (newFilters.industry ? job.title === newFilters.industry : true) &&
                (newFilters.location ? job.location === newFilters.location : true) &&
                (newFilters.salary ? job.salary_range.trim() === newFilters.salary.trim() : true)
            );
        });

        setFilteredJobs(filtered);
    };

    useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsFilterOpen(false);
            }
          };
      
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
    
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Grid Layout */}
            <div className="mx-auto px-4 py-6 flex flex-col lg:flex-row gap-2">

                {/* Sidebar (Takes 3 columns on large screens) */}
                <div className="hidden lg:block w-full lg:w-[20%]">
                    <FilterSidebar jobdata={jobdata} onApplyFilters={applyFilters} />
                </div>

                {/* Filter Button for Small Screens */}
                <div className="lg:hidden w-full flex justify-start p-4">
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="bg-[#48C2F2] text-white px-4 py-2 rounded-md flex items-center space-x-2"
                    >
                        <FaFilter />
                        <span>Filters</span>
                    </button>
                </div>

                {/* Modal for Small Screens */}
                {isFilterOpen && (
                    <div className="fixed inset-0  z-50 h-screen overflow-y-scroll">
                        <div className="bg-white p-6 rounded-lg w-4/5 max-w-md relative">
                            <button
                                className="absolute top-4 right-4 text-black "
                                onClick={() => setIsFilterOpen(false)}
                            >
                                ✖
                            </button>
                            <FilterSidebar jobdata={jobdata} onApplyFilters={applyFilters} />
                        </div>
                    </div>
                )}
                {/* Main Content (Takes 9 columns on large screens) */}
                <div className="w-full lg:w-[80%] py-4 px-2">
                    {/* Top Filter Section (Full Width inside Main Content) */}
                    <TopFilter jobdata={jobdata} onFilter={applyFilters} />

                    <div className="flex flex-col lg:flex-row gap-6 py-4">

                        {/* Job Listings (Takes 8 columns) */}
                        <div className="w-full lg:w-[65%]">
                            <JobFilter />
                            <JobList jobs={filteredJobs} />
                        </div>

                        {/* JobFair & ImportantDates (Takes 4 columns) */}
                        <div className="w-full lg:w-[35%] space-y-6">
                            <JobFair />
                            <ImportantDates />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default JobUniverse;
