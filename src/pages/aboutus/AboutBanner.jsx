// src/components/AboutBanner.jsx
import React from "react";
import Images from "../../assets/images/Image";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(to right, #B82D97 17%, #57B3D3 67%, #76ABFC)",
      }}
      className="text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between h-auto md:h-[352px] font-[OmnesArabic]"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-left">
        <h3 className="text-[24px] font-semibold text-[#FAFAFA]">About Us</h3>
        <h1 className="text-4xl md:text-[50px] lg:text-[58px] xl:text-[64px] font-semibold text-[#FAFAFA] mt-2">
          One Platform for All
        </h1>
        <div className="mt-4  text-[16px] font-bold text-white flex space-x-2 ">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <span>›</span>
          <Link to="#" className="cursor-pointer">
            About Us
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-[165px]  flex justify-end">
        <img
          src={Images.aboutImage}
          alt="About Us Illustration"
          className="w-full h-[350px]"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
