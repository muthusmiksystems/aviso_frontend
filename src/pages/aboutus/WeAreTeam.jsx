import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Images from "../../assets/images/Image";

const WeAreTeam = () => {
  return (
    <section className="pt-16 md:pb-56 pb-10 px-6 md:px-12 lg:px-20 font-[OmnesArabic]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h4 className="text-lg font-bold text-[#C152D2] uppercase">Team</h4>
          <h2 className="text-4xl font-bold mt-2">We Are Team <br /> Aviso at Core</h2>
          <p className="text-gray-800 mt-4">
            Ultrices congue eget amet, elit, porttitor sed maecenas consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam velit purus
          </p>
          <p className="text-gray-800 mt-2">
            Ultrices congue eget amet, elit, porttitor sed maecenas consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam velit purus
          </p>
        </div>
         
        <div>
          <img src={Images.Team} alt="Team Meeting" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative">
          <img src={Images.Teamcover} alt="Students" className="rounded-lg shadow-lg" />
          <div className="absolute -bottom-45 left-4 bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg w-3/4">
            <p className="text-sm bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent font-extrabold">Students across the glope</p>
            <h3 className="text-3xl font-bold text-black py-2">1,030,500</h3>
            <p className="text-gray-700 text-sm mt-2">
            Ultrices congue eget amet, elit, porttitor sed maecenas consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam velit purus
            </p>
            <div className="flex gap-3 mt-4 text-black">
              <FaFacebook/>
              <FaTwitter/>
              <FaLinkedin/>
              <FaInstagram/>
              <FaYoutube/>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold text-[#C152D2] uppercase md:mt-0 mt-36">Community</h4>
          <h2 className="text-4xl font-bold mt-2">Our Community</h2>
          <p className="text-blue-500 font-bold italic mt-2">“ imperdi eleifend adipiscing facilisis arcu pharetra ”</p>
          <p className="text-gray-800 mt-4">
          Ultrices congue eget amet, elit, porttitor sed maecenas consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam velit purus
          </p>
          <button className="mt-6 px-20 py-2 bg-[#29ABE2] text-white rounded-full shadow-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeAreTeam;
