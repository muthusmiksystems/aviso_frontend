import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import Images from "../../assets/images/Image"; // Adjust the path as needed

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="bg-[#25A1DD] w-full md:w-1/4 md:max-w-1/4 flex flex-col items-center text-white p-6 relative min-h-[70vh] md:min-h-screen">
        {/* Image Section */}
        <img
          src={Images[testimonials[currentIndex].image]} // Dynamically resolve the image
          alt={testimonials[currentIndex].name}
          className="w-[180px] h-[260px] sm:w-[220px] sm:h-[300px] md:w-[280px] md:h-[350px] lg:w-[300px] lg:h-[400px] rounded-lg shadow-md object-cover md:absolute md:top-10 md:start-4 lg:start-12 xl:start-24"
        />

        {/* Text Section */}
        <div className="mt-6 w-full bg-[#29ABE2] md:absolute md:bottom-0 md:left-0 w-full py-4 text-center md:ps-8 xl:ps-28 md:py-8 md:text-start">
          <h3 className="text-lg md:text-xl font-bold">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-xs md:text-sm py-1 md:py-2">
            {testimonials[currentIndex].role}
          </p>
          <p className="text-xs md:text-sm opacity-80">
            {testimonials[currentIndex].location}
          </p>
        </div>
      </div>

      {/* Right Section - Testimonial Content */}
      <div className="bg-white w-full mx-auto md:mx-0 md:w-2/3 p-6 md:p-10 flex flex-col justify-between md:ps-20 min-h-[50vh] md:min-h-screen">
        {/* <h1 className="text-xl md:text-3xl lg:text-4xl text-[#000000] font-semibold text-center md:text-end mb-4">
          These testimonials reflect the impact our platform has had
        </h1> */}
        <h1 className="text-2xl md:text-4xl lg:text-4xl text-[#57B3D3] font-semibold text-center md:text-end mb-4 md:mb-6 w-[90%]  md:ml-16">
          These testimonials reflect the impact our platform has had
        </h1>

        <div className="relative text-center md:ps-16">
          {/* Left Quote Mark */}
          <div className="absolute  text-5xl md:text-7xl lg:7xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
            &ldquo;
          </div>
          <div className="py-12">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-2 text-start">
              {testimonials[currentIndex].title}
            </h1>
            <p className="text-[#808080] text-md md:text-md font-semibold leading-relaxed w-full md:w-4/5 lg:w-3/4 text-start my-4 md:my-8">
              {testimonials[currentIndex].quote}
            </p>
          </div>
          <div className="absolute -bottom-2 -right-4 text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
            &rdquo;
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center md:justify-start items-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className={`p-2 border border-gray-300 rounded-full transition-all ${
              currentIndex === 0
                ? "bg-[#29ABE2] text-white"
                : "hover:bg-gray-100 text-gray-500"
            }`}
            aria-label="Previous testimonial"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className={`p-2 rounded-full transition-all ${
              currentIndex === testimonials.length - 1
                ? "bg-[#29ABE2] text-white"
                : "bg-gray-300 text-gray-500 hover:bg-[#1d8eb9] hover:text-white"
            }`}
            aria-label="Next testimonial"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
