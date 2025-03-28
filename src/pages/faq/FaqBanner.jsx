// src/components/AboutBanner.jsx
import React from "react";
import Images from "../../assets/images/Image";
import { Link } from "react-router-dom";

const FaqBanner = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(to right, #B82D97 17%, #57B3D3 67%, #76ABFC)",
      }}
      className="text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between h-auto md:h-[432px] font-[OmnesArabic]"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-left">
        <h3 className="text-xl font-semibold">FAQ</h3>
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-black leading-tight mt-3 font-semibold">
          Frequently Asked Questions
        </h1>
        <div className="mt-3 text-base flex space-x-2 text-gray-200">
          <Link to="/" className="font-semibold text-white hover:underline">
            Home
          </Link>
          <span>›</span>
          <Link to="/faq" className="font-semibold hover:underline">
            FAQ
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:mr-0 lg:mr-0 xl:mr-20   mt-5 mx-end">
        <img
          src={Images.FaqBanner}
          alt="About Us Illustration"
          className="w-[85%] md:w-[90%] md:text-end lg:w-[99%] xl:w-full"
        />
      </div>
    </section>
  );
};

export default FaqBanner;
