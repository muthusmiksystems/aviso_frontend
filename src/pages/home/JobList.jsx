import React from "react";

const jobTypes = [
    {
        title: "Job Type 1",
        tags: ["Engineering Diploma", "CCNA", "Masters"],
        description:
            "Lorem ipsum dolor sit amet consectetur. Amet et aenean sed nisi mauris cursus lorem amet ornare.",
        salary: "$1,590-2,200",
    },
    {
        title: "Job Type 2",
        tags: ["Marketing & Advertising Diploma", "Bachelors"],
        description:
            "Lorem ipsum dolor sit amet consectetur. Sagittis nec orci pulvinar metus netus lacus in.",
        salary: "$1,050-1,300",
    },
    {
        title: "Job Type 3",
        tags: ["Computer Science Diploma", "MBA"],
        description:
            "Lorem ipsum dolor sit amet consectetur. Euismod enim purus turpis in.",
        salary: "$800-1,500",
    },
    {
        title: "Job Type 4",
        tags: ["Mechanical Engineer Diploma", "Master"],
        description:
            "Lorem ipsum dolor sit amet consectetur. Volutpat vulputate urna nulla vestibulum.",
        salary: "$1,400-2,100",
    },
    {
        title: "Job Type 5",
        tags: ["Business Management Diploma", "Certified", "MBA"],
        description:
            "Lorem ipsum dolor sit amet consectetur. Sed et libero ullamcorper sagittis.",
        salary: "$2,800-3,500",
    },
    {
        title: "Job Type 6",
        tags: ["Mechanical Engineer Diploma", "CPA Certification"],
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget integer ut sit ipsum neque senectus.",
        salary: "$1,800-2,500",
    },
];
const categories = [
    { name: "New", active: true },
    { name: "Design", active: false },
    { name: "Accounting", active: false },
    { name: "Video Editor", active: false },
    { name: "Project Manager", active: false },
    { name: "Data Analyst", active: false },
];
const JobList = () => {
    return (
        <div className="bg-[#ffff] mx-auto px-6 md:px-16 py-12 font-[OmnesArabic]">
            {/* Header */}
            <div className="py-12 flex flex-col lg:flex-row justify-between">
                <div className="order-2 lg:order-1 max-w-lg sm:mt-5">
                    <p className="text-gray-600 text-base font-regular mb-4">
                        Lorem ipsum dolor sit amet consectetur. Molestie erat morbi scelerisque sed nec vitae.
                        Nullam auctor augue sed dignissim mauris ornare augue donec sed. Venenatis in adipiscing turpis gravida proin.
                    </p>

                    {/* Job Categories */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-5 py-2 text-lg font-medium rounded-full transition font-regular ${category.active
                                    ? "bg-gradient-to-b from-[#FB46E8] to-[#A82884] text-white shadow-md"
                                    : "bg-gray-100 text-gray-700"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Header & Button */}
                <div className="order-1 lg:order-2 ">
                    <h2 className="text-5xl font-semibold text-gray-900 leading-tight text-justify">
                        Building Careers with <br /> Industry Leaders
                    </h2>

                    <button className="mt-4 px-6 py-3 text-white text-lg font-medium rounded-full bg-gradient-to-b from-[#FB46E8] to-[#A82884] shadow-lg hover:opacity-90 transition">
                        Job Types Universe
                    </button>
                </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {jobTypes.map((job, index) => (
                    <div
                        key={index}
                        className="bg-[#F8F8FA] rounded-xl p-4 flex flex-col justify-between h-full"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{job.title}</h3>

                        {/* Job Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {job.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-3 py-1 text-base font-regular bg-[#F6EBF5] text-gray-700 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-600 font-regular text-sm mb-4">{job.description}</p>

                        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
                            <button className="px-3 sm:px-4 py-1 mx-auto sm:py-2 w-1/2 sm:w-3/4 text-base font-regular sm:text-sm border border-[#57B3D3] text-[#57B3D3] rounded-full hover:bg-[#57B3D3] hover:text-white transition">
                                Apply Now
                            </button>
                            <p className="text-gray-800 text-xs font-regular sm:text-xs text-center sm:text-left">
                                Salary range: <span className="text-sm sm:text-sm font-semibold text-gray-900 ">{job.salary}</span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
