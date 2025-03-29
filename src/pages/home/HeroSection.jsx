import { useState } from "react";
import Images from "../../assets/images/Image";
import { Img } from "../../components/common/Img";
import { Input } from "../../components/common/Input";
import { CloseSVG } from "../../components/common/Input/Close";
import { FaSearch } from "react-icons/fa";
import CustomButton from "../../components/common/Button";
import jobdata from '../../data/search'
import SearchComponent from "../../components/home/SearchComponent";
const HeroSection = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchBarValue(value);

    if (value.trim() === "") {
      setFilteredJobs([]);
      return;
    }

    // Search jobs based on refnum, description, etc.
    const filtered = jobdata.jobs.filter(
      (job) =>
        job.refnum.toLowerCase().includes(value) ||
        job.small_description.toLowerCase().includes(value) ||
        job.long_description.toLowerCase().includes(value)
    );

    // Group by category
    const groupedJobs = filtered.reduce((acc, job) => {
      // Find jobtype details
      const jobType = jobdata.jobtypes.find((type) => type._id === job.jobtype);
      if (!jobType) return acc;

      // Find category details
      const category = jobdata.categories.find(
        (cat) => cat._id === jobType.categoryid
      );
      const categoryName = category ? category.categoryname : "Others";

      // Group by category name
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(job);

      return acc;
    }, {});

    setFilteredJobs(groupedJobs);
  };
  const handleFocus = () => {
    if (!searchBarValue) {
      setSearchBarValue(" ")
      // First two jobs
      const firstTwoJobs = jobdata.jobs.slice(0, 2);

      // Group by category
      const groupedJobs = firstTwoJobs.reduce((acc, job) => {
        const jobType = jobdata.jobtypes.find((type) => type._id === job.jobtype);
        if (!jobType) return acc;

        const category = jobdata.categories.find(
          (cat) => cat._id === jobType.categoryid
        );
        const categoryName = category ? category.categoryname : "Others";

        if (!acc[categoryName]) {
          acc[categoryName] = [];
        }
        acc[categoryName].push(job);

        return acc;
      }, {});

      setFilteredJobs(groupedJobs);
    }
  };

  // const handleLeave = () => {
  //   setFilteredJobs([]);  // Empty array instead of empty string
  //   setSearchBarValue("");
  // };

  const handleBlur = () => {
    setTimeout(() => {
      setSearchBarValue("");
      setFilteredJobs([]);
    }, 300); // Delays clearing to allow click event to trigger first
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-5   py-12 text-center font-[OmnesArabic] bg-gradient-to-r from-[#fffff]  via-[#F7F8FE] to-[#F0F0FC] "
    // onMouseLeave={handleLeave}
    >
      <Img
        src={Images.Img_Ellipse}
        alt="Background"
        className=" hidden md:block absolute right-10 md:top-[25%] md:right-[6%] lg:top-[175px] lg:right-[60px] xl:right-[190px] xl:top-[220px]   md:h-[180px] h-[205px] lg:h-[200px] lg:w-[210px] xl:h-[239px] xl:w-[221px]  object-contain"
      />

      <h1 className="text-xl sm:text-3xl md:text-4xl   xl:text-[55px] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-wrap font-semibold md:leading-[50px]  xl:leading-[72px] ">
        Empower Your Career Journey, Unlock Opportunities, Achieve Success
      </h1>

      <div className="relative mt-8 flex w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%]  xl:w-[718px] xl:h-[69px]  items-center rounded-full border border-blue-400 bg-white md:px-5 px-2 py-0 md:py-1 shadow-md">
        <div className="hidden sm:block mr-2 sm:mr-10 h-3 w-3 text-gray-500">
          <FaSearch />
        </div>
        <div className="flex items-center w-full">
          <Input
            type="text"
            name="search"
            size="2xl"
            placeholder="Search Job Type or University by keyword or location "
            value={searchBarValue}
            onChange={handleSearch}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full px-2 py-3 text-gray-600 focus:outline-none autosuggetion-none focus:rounded-lg"
          />
          {searchBarValue.length > 0 && (
            <CloseSVG
              onClick={() => { setSearchBarValue(""); setFilteredJobs("") }}
              fillColor="#737373"
              className="cursor-pointer mx-2"
            />
          )}
        </div>
        <div className="flex align-end">
          <CustomButton className=" bg-[#24A1DD] cursor-pointer text-white px-3 md:px-10 py-2 md:py-2.5 rounded-full text-sm  sm:px-4 font-medium text-[16px]">
            Search
          </CustomButton>
        </div>
        <SearchComponent filteredJobs={filteredJobs} />
      </div>


      <div className="mt-8 flex justify-center w-[95%] sm:w-[70%] md:w-[65%] lg:w-[70%] xl:w-[850px] xl:h-[669.31px]  sm:max-w-3xl md:max-w-5xl   items-center">
        <Img src={Images.Hero_Banner} alt="Hero Banner" className="" />
      </div>
    </section>
  );
};

export default HeroSection;