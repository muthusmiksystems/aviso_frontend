import { useState } from "react";
import Images from "../../assets/images/Image";
import { Img } from "../../components/common/Img";
import { Input } from "../../components/common/Input";
import { CloseSVG } from "../../components/common/Input/Close";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
    const [searchBarValue, setSearchBarValue] = useState("");

    return (
        <section className="relative flex flex-col items-center justify-center  py-12 text-center font-[OmnesArabic] bg-gradient-to-r from-[#fffff] via-[#F7F8FE] to-[#F0F0FC] ">
           
            <Img
                src={Images.Img_Ellipse}
                alt="Background"
                className=" hidden md:block absolute right-10 lg:right-40   top-60 lg:top-50 h-[180px]  object-contain"
            />

            
            <h1 className="text-xl sm:text-3xl md:text-5xl  w-auto  max-w-4xl text-wrap font-semibold ">
                Empower Your Career Journey,
                Unlock Opportunities, Achieve Success
            </h1>

          
            <div className="relative mt-8 flex w-[90%] sm:w-[70%] max-w-2xl items-center rounded-full border border-blue-400 bg-white px-7 py-0 md:py-1 shadow-md">
                <div className="hidden sm:block mr-2 sm:mr-10 h-3 w-3 text-gray-500">
                    <FaSearch />
                </div>
                <div className="flex items-center w-full">
                    <Input
                        type="text"
                        name="search"
                        size="2xl"
                        placeholder="Search Job Type or University by keyword or location"
                        value={searchBarValue}
                        onChange={(e) => setSearchBarValue(e.target.value)}
                        className="w-3/4 px-6 py-4 text-gray-600 focus:outline-none"
                    />
                    {searchBarValue.length > 0 && (
                        <CloseSVG
                            onClick={() => setSearchBarValue("")}
                            fillColor="#737373"
                            className="cursor-pointer"
                        />
                    )}
                </div>
                <div className="flex align-end">
                    <button className=" bg-[#24A1DD] cursor-pointer text-white px-3 md:px-8 py-2 md:py-2.5 rounded-full text-sm  sm:px-4">
                        Search
                    </button>
                </div>
            </div>

           
            <div className="mt-8 flex justify-center w-[90%] sm:w-[70%] max-w-2xl items-center">
                <Img
                    src={Images.Hero_Banner}
                    alt="Hero Banner"
                    className=""
                />
            </div>
        </section>
    );
};

export default HeroSection;
