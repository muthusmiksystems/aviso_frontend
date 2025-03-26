"use client";

import { useState } from "react";
import CustomButton from "../../components/common/Button";
import Images from "../../assets/images/Image";

export default function ConnectUS() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email submitted:", email);

    setEmail("");
  };

  return (
    <div
      className="relative w-full bg-white overflow-hidden  py-16 md:py-28"
      style={{
        backgroundImage: `url(${Images.Backgroundpsuedo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#13131A] mb-4">
            Connect with us and unlock a world of possibilities.
          </h1>

          {/* Subheading */}
          <p className="text-xs sm:text-md md:text-lg text-[#525252] mb-6 sm:mb-8 md:mb-12 px-4 sm:px-20 md:px-40 mt-2">
            Lorem ipsum dolor sit amet consectetur. Tortor donec tempus faucibus
            pharetra. Viverra.
          </p>

          {/* Email subscription form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-row  items-center justify-center bg-[#F5F5F5] rounded-full px-2 py-1 max-w-md mx-auto text-[#78828A]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-sm sm:text-base !text-[#78828A] mb-2 sm:mb-0"
            />

            <CustomButton className="bg-gradient-to-b from-[#FF47ED] to-[#992B8E] text-white shadow-lg px-4 py-2 sm:py-3 tracking-wide text-sm sm:text-md font-semibold">
              Subscribe
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
}
