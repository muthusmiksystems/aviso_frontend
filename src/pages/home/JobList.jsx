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
            <div className="py-12 flex flex-col lg:flex-row justify-between ">
                <div className="order-2 lg:order-1 w-full lg:max-w-lg mt-3 sm:mt-5">
                    <p className="text-[#525252] text-base font-regular mb-6">
                        Lorem ipsum dolor sit amet consectetur. Molestie erat morbi scelerisque sed nec vitae.
                        Nullam auctor augue sed dignissim mauris ornare augue donec sed. Venenatis in adipiscing turpis gravida proin.
                    </p>

                    {/* Job Categories */}
                    <div className="flex flex-wrap gap-5">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-5 py-1 text-lg  rounded-full transition cursor-pointer ${category.active
                                    ? "bg-gradient-to-b from-[#FB46E8] to-[#A82884] text-white font-semibold  shadow-md"
                                    : "bg-[#F5F5F5] font-regular text-[#28282F]"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Header & Button */}
                <div className="order-1 lg:order-2 w-full lg:max-w-lg">
                    <h2 className="text-[30px] lg:text-[40px] xl:text-[48px] font-semibold text-[#151B23] leading-14">
                        Building Careers with  Industry Leaders
                    </h2>

                    <button className="mt-3 lg:mt-8 px-7 py-3 text-white text-[18px] font-medium rounded-full bg-gradient-to-b from-[#FB46E8] to-[#A82884] shadow-lg cursor-pointer">
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
                        <h3 className="text-xl font-semibold text-[#27272E] mb-5">{job.title}</h3>

                        {/* Job Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {job.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-3 py-1 text-xs font-regular bg-[#F6EBF5] text-[#262626] rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-[#425466] font-regular text-sm mb-4">{job.description}</p>

                        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
                            <button className="sm:px-4 py-3 xl:py-3.5 w-1/2 md:w-3/4 md:w-3/4 xl:w-2/3 text-base font-regular sm:text-sm border border-[#4DAACD] text-[#4DAACD] rounded-full hover:bg-[#4DAACD] hover:text-white transition">
                                Apply Now
                            </button>
                            <p className="flex justify-start sm:mt-0 mt-3 md:justify-between items-center">
                                <span className="font-regular text-xs text-[#0D062D]">Salary range:</span> <span className="text-[18px] font-semibold text-[#0D062D] ">{job.salary}</span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
