import { useState } from "react";
import Images from "../../assets/images/Image";
import { Button } from "../../components/common/Button";
import { Img } from "../../components/common/Img";
import { Input } from "../../components/common/Input";
import { CloseSVG } from "../../components/common/Input/Close";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
    const [searchBarValue, setSearchBarValue] = useState("");

    return (
        <section className="relative flex flex-col items-center justify-center px-6 py-12 font-omnesarabic">
            {/* Background Image */}
            <Img
                src={Images.Img_Ellipse}
                alt="Background"
                className="absolute right-0 left-140 top-40 h-[180px] w-[42%] object-contain md:w-[60%] sm:w-[80%]"
            />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-4xl text-center">
                {/* Heading */}
                <h1 className="text-5xl font-omnesarabic font-bold text-primary leading-tight md:text-4xl sm:text-3xl">
                    Empower Your Career Journey, <br className="hidden md:block" />
                    Unlock Opportunities, Achieve Success
                </h1>

                {/* Search Bar */}
                <div className="relative mt-8 flex w-full mx-auto max-w-2xl items-center rounded-full border border-blue-400 bg-white px-4 py-3 shadow-md">
                    {/* Search Icon */}
                    <FaSearch className="mr-3 h-5 w-5 text-gray-500" />

                    {/* Input Field */}
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search Job Type or University by keyword or location"
                        value={searchBarValue}
                        onChange={(e) => setSearchBarValue(e.target.value)}
                        className="w-full flex-grow bg-transparent text-gray-600 outline-none"
                    />

                    {/* Clear Icon */}
                    {searchBarValue.length > 0 && (
                        <CloseSVG
                            onClick={() => setSearchBarValue("")}
                            fillColor="#737373"
                            className="cursor-pointer"
                        />
                    )}

                    {/* Search Button */}
                    {/* <Button
                        color="blue_500_01"
                        size="5xl"
                        shape="round"
                        className="ml-4 rounded-full bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 sm:px-4"
                    >
                        Search
                    </Button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                        Sign Up
                    </button>
                </div>
                <div>
                <Img
                src={Images.Hero_Banner}
                alt="Background"
                className="md:w-[60%] sm:w-[80%]"
            />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
