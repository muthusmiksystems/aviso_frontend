
import React, { useState } from "react";
import FilterCheckbox from "./FilterCheckbox"; // Import the component
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for toggle

const FilterSidebar = ({ jobdata }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        sortBy: "Most Relevant",
        jobType: [],
        education: [],
        extraFilter: [],
        industry: [],
        jobFunction: [],
    });

    // Extract unique values
    const jobTitles = [...new Set(jobdata.map((job) => job.title))];
    const educationLevels = [...new Set(jobdata.flatMap((job) => job.education_levels))];
    const industries = [...new Set(jobdata.map((job) => job.industry))];
    const jobFunctions = [...new Set(jobdata.map((job) => job.function))];

    // Section toggle state
    const [openSections, setOpenSections] = useState({
        sortBy: true,
        jobType: true,
        extraFilter: true,
        education: true,
        industry: true,
        jobFunction: true,
    });

    const handleCheckboxChange = (category, value) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [category]: prev[category].includes(value)
                ? prev[category].filter((item) => item !== value)
                : [...prev[category], value],
        }));
    };

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <>
            <div className="flex justify-between items-center mb-2 mt-5 lg:mt-0">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                    onClick={() =>
                        setSelectedFilters({
                            sortBy: "Most Relevant",
                            jobType: [],
                            education: [],
                            extraFilter: [],
                            industry: [],
                            jobFunction: [],
                        })
                    }
                    className="text-[#29ABE2] font-regular text-sm"
                >
                    Clear All
                </button>
            </div>

            <div className="bg-white p-4 rounded-lg overflow-y-auto">
                {/* Sort By */}
                <div className="py-2">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("sortBy")}>
                        <h3 className="font-semibold">Sort By</h3>
                        {openSections.sortBy ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openSections.sortBy && (
                        <div className="mt-2">
                            {["Most Relevant", "Most Recent", "Top Salary"].map((option) => (
                                <FilterCheckbox
                                    key={option}
                                    label={option}
                                    checked={selectedFilters.sortBy === option}
                                    onChange={() => setSelectedFilters({ ...selectedFilters, sortBy: option })}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Job Type */}
                <div className="py-2">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("jobType")}>
                        <h3 className="font-semibold">Job Type</h3>
                        {openSections.jobType ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openSections.jobType && (
                        <div className="mt-2">
                            {['All',...jobTitles].map((title) => (
                                <FilterCheckbox
                                    key={title}
                                    label={title}
                                    checked={selectedFilters.jobType.includes(title)}
                                    onChange={() => handleCheckboxChange("jobType", title)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Extra Filter */}
                <div className="py-2">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("extraFilter")}>
                        <h3 className="font-semibold">Extra Filter</h3>
                        {openSections.extraFilter ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openSections.extraFilter && (
                        <div className="mt-2">
                            {["All","Option 1", "Option 2", "Option 3", "Option 4"].map((option) => (
                                <FilterCheckbox
                                    key={option}
                                    label={option}
                                    checked={selectedFilters.extraFilter.includes(option)}
                                    onChange={() => handleCheckboxChange("extraFilter", option)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Education */}
                <div className="py-2">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("education")}>
                        <h3 className="font-semibold">Education</h3>
                        {openSections.education ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openSections.education && (
                        <div className="mt-2">
                            {educationLevels.map((level) => (
                                <FilterCheckbox
                                    key={level}
                                    label={level}
                                    checked={selectedFilters.education.includes(level)}
                                    onChange={() => handleCheckboxChange("education", level)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Industry */}
                <div className="py-2">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("industry")}>
                        <h3 className="font-semibold">Industry</h3>
                        {openSections.industry ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openSections.industry && (
                        <div className="mt-2">
                            {industries.map((industry) => (
                                <FilterCheckbox
                                    key={industry}
                                    label={industry}
                                    checked={selectedFilters.industry.includes(industry)}
                                    onChange={() => handleCheckboxChange("industry", industry)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Job Function */}
                <div className="py-2">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("jobFunction")}>
                        <h3 className="font-semibold">Job Function</h3>
                        {openSections.jobFunction ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openSections.jobFunction && (
                        <div className="mt-2">
                            {jobFunctions.map((func) => (
                                <FilterCheckbox
                                    key={func}
                                    label={func}
                                    checked={selectedFilters.jobFunction.includes(func)}
                                    onChange={() => handleCheckboxChange("jobFunction", func)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default FilterSidebar;

