// src/components/AboutBanner.jsx
import React from "react";
import Images from "../../assets/images/Image";
import { Link } from "react-router-dom";

const PaymentBanner = () => {
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
        <h3 className="text-lg font-bold">FAQ</h3>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mt-2">
          Our Payment Plans
        </h1>
        <div className="mt-4 text-sm flex space-x-2 text-gray-200">
          <Link to="/" className="font-bold text-white hover:underline">
            Home
          </Link>
          <span>›</span>
          <Link to="/pricing" className="font-bold hover:underline">
            Pricing
          </Link>
        </div>
      </div>

      {/* Right Image */}
      {/* <div className="max-w-4xl ">
        <img
          src={Images.FaqBanner}
          alt="About Us Illustration"
          className="w-[85%]"
        />
      </div> */}
    </section>
  );
};

export default PaymentBanner;
