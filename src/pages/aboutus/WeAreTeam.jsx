import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Images from "../../assets/images/Image";

const WeAreTeam = () => {
  return (
    <section className="pt-16 md:pb-46 pb-0 pl-6 md:pl-12 lg:pl-20 pr-4 md:pr-8 lg:pr-10 font-[OmnesArabic]" style={{ backgroundImage: `url(${Images.Teambackground})`, backgroundSize: '100% 100%' }}>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pl-6">
        
        <div>
          <h4 className="text-[24px] font-semibold text-[#B82D97] uppercase">Team</h4>
          <h2 className="text-4xl md:text-[50px] lg:text-[58px] xl:text-[64px] text-[#131313] font-semibold my-8">We Are Team <br /> Aviso at Core</h2>
          <p className="text-[#606060] font-regular text-[16px] mt-4">
            Ultrices congue eget amet, elit, porttitor sed maecenas consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam velit purus
          </p>
          <p className="text-[#606060] font-regular text-[16px] mt-2">
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
          <div className="absolute -bottom-45 left-0 sm:left-4 bg-white/30 backdrop-blur-lg p-2 sm:p-6 rounded-lg  w-full sm:w-3/4">
            <p className="text-[14px] bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent font-semibold">Students across the glope</p>
            <h3 className="text-[40px] font-semibold text-[#131313]">1,030,500</h3>
            <p className="text-[#606060] font-regular text-[16px] mt-4">
            Ultrices congue eget amet, elit, porttitor sed maecenas consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam velit purus
            </p>

            <div className="flex gap-7 mt-4 text-black">
              <FaFacebookF/>
              <FaTwitter/>
              <FaInstagram/>
              <FaLinkedinIn/>
              <FaYoutube/>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[24px] font-semibold text-[#B82D97] uppercase md:mt-0 mt-36">Community</h4>
          <h2 className="text-4xl md:text-[50px] lg:text-[58px] xl:text-[64px] text-[#131313] font-semibold my-6">Our Community</h2>
          <p className="text-[#69A5FF] font-semibold text-[24px]">“ imperdi eleifend adipiscing facilisis arcu pharetra ”</p>
          <p className="text-[#606060] font-regular text-[16px] mt-4">
          Ultrices congue eget amet, elit, porttitor sed maecenas consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam velit purus
          </p>
          <button className="mt-6 px-20 py-2 bg-[#29ABE2] text-[#FAFAFA] text-[18px] rounded-full shadow-md shadow-md shadow-pink-200 font-bold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeAreTeam;
