import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import Images from "../../assets/images/Image"; // Adjust the path as needed
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("right");

  // Fetch testimonials data
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("/src/data/testimonials.json");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (testimonials.length === 0) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <div className="flex flex-col md:flex-row items-center w-full overflow-hidden font-[OmnesArabic]">
      {/* Left Section - Image & Details */}
      <div className="bg-[#25A1DD] w-full md:w-1/4 md:max-w-1/4 flex flex-col items-center text-white p-6 relative md:h-[600px] lg:h-[748px] md:min-h-screen">
        {/* Image Section */}
        <img
          src={Images[testimonials[currentIndex].image]} // Dynamically resolve the image
          alt={testimonials[currentIndex].name}
          className="w-[180px] h-[260px] sm:w-[220px] sm:h-[300px] md:max-w-5xl md:h-[400px] lg:w-[300px] lg:h-[500px]  shadow-md object-cover md:absolute md:top-16 md:start-16 lg:start-16 xl:start-30"
        />

        {/* Text Section */}
        <div className="mt-6 w-full bg-[#25A1DD] md:absolute md:bottom-0 md:left-0 w-full py-4 text-center md:ps-14 lg:ps-16 xl:ps-28 md:pb-6 lg:pb-20 md:text-start">
          {/* <div className="bottom-20"> */}
          <h3 className="text-lg md:text-2xl font-bold">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-xs md:text-sm font-light py-1 md:py-2">
            {testimonials[currentIndex].role}
          </p>
          <p className="text-xs md:text-xs font-light ">
            {testimonials[currentIndex].location}
          </p>
        </div>
      </div>

      {/* Right Section - Testimonial Content */}
      <div className="bg-white w-full mx-auto md:mx-0 md:w-2/3 p-6 md:p-10 flex flex-col justify-between md:ps-20 min-h-[50vh] md:min-h-screen">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#57B3D3] font-semibold text-center md:text-end mb-4 md:mb-6 w-[90%]  md:ml-16">
          These testimonials reflect the impact our platform has had
        </h1>

        <div className="relative text-center md:ps-16">
          {/* Left Quote Mark */}
          <div className="absolute  text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-b from-[#29ABE2]  to-[#00FFFF] !font-sans bg-clip-text ">
            &rdquo;
          </div>
          <div className=" pt-18 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 text-start">
              {testimonials[currentIndex].title}
            </h1>
            <p className="text-[#808080] text-md md:text-md font-semibold leading-relaxed w-full md:w-3/3 lg:w-3/3 text-start my-4 md:my-8">
              {testimonials[currentIndex].quote}
            </p>
          </div>
          <div className="absolute -bottom-12 -right-4 text-7xl md:text-8xl lg:text-9xl  font-bold text-transparent bg-gradient-to-t to-[#29ABE2]  from-[#00FFFF] bg-clip-text !font-sans">
            &rdquo;
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center md:justify-start items-center gap-4 mt-6">
          <button
            onClick={() => {
              handlePrev();
              setActiveButton("left");
            }}
            className={`p-3 rounded-full transition-all ${
              activeButton === "left"
                ? "bg-gradient-to-r from-[#29ABE2] via-[#29ABE2] to-[#00FFFF] text-white"
                : "hover:bg-gray-100 text-gray-500"
            }`}
            aria-label="Previous testimonial"
          >
            <GoArrowLeft
              className={`w-5 h-5  ${
                activeButton === "left" ? "text-white" : "text-[#A3A3A3]"
              }`}
            />
          </button>

          <button
            onClick={() => {
              handleNext();
              setActiveButton("right");
            }}
            className={`p-3 rounded-full transition-all ${
              activeButton === "right"
                ? "bg-gradient-to-r from-[#29ABE2] via-[#29ABE2] to-[#00FFFF] text-white"
                : "hover:bg-gray-100 text-gray-500"
            }`}
            aria-label="Next testimonial"
          >
            <GoArrowRight
              className={`w-5 h-5  ${
                activeButton === "right" ? "text-white" : "text-[#A3A3A3]"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
