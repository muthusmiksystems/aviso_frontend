// src/components/AboutBanner.jsx
import React from "react";
import Images from "../../assets/images/Image";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <section 
    style={{ background: 'linear-gradient(to right, #B82D97 17%, #57B3D3 67%, #76ABFC)' }}
    className="text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between h-auto md:h-[352px] font-[OmnesArabic]">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-left">
        <h3 className="text-lg font-bold">About Us</h3>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mt-2">
          One Platform for All
        </h1>
        <div className="mt-4 text-sm flex space-x-2 text-gray-200">
          <Link to="/" className="font-bold text-white hover:underline">Home</Link>
          <span>›</span>
          <Link to="/about" className="font-bold hover:underline">About Us</Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
        <img 
          src={Images.aboutImage} 
          alt="About Us Illustration" 
          className="w-full max-w-[550px] h-[200px] md:h-[390px] md:mt-38 mt-0"
        />
      </div>

    </section>
  );
};

export default AboutBanner;
