// import React from 'react';
// import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaPhone, FaUser, FaUserLock } from 'react-icons/fa';


import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaPhone, FaUser, FaUserLock, FaLinkedinIn } from 'react-icons/fa';

function Topbar() {
  return (
    <div
      style={{ background: 'linear-gradient(to right, #B82D97 17%, #57B3D3 67%, #76ABFC)' }}
      className="p-2 w-full flex flex-col md:flex-row items-center justify-center md:justify-between"
    >
      <div className="flex  justify-between items-center text-white font-[OmnesArabic]  w-full px-5 md:px-16">

        {/* Social Icons */}
        <div className="flex items-center space-x-3 md:mb-0">
          <span className="font-medium text-xs hidden sm:inline">Social :</span>
          <FaLinkedinIn className="cursor-pointer text-lg sm:text-md" />
          <FaInstagram className="cursor-pointer text-lg sm:text-md" />
          <FaFacebook className="cursor-pointer text-lg sm:text-md" />
          <FaYoutube className="cursor-pointer text-lg sm:text-md" />
        </div>

        {/* Contact & Login */}
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-3 md:space-x-5 text-white ml-5 md:ml-0">
          <div className="flex items-center space-x-1">
            <FaPhone className="text-md" />
            <span className="text-xs sm:text-sm">+123-456-7890</span>
          </div>
          <div className="cursor-pointer flex items-center space-x-1">
            <FaUser className="text-md" />
            <span className="text-xs sm:text-sm">Aviso Advisors</span>
          </div>
          <div className="cursor-pointer flex items-center space-x-1">
            <FaUserLock className="text-md" />
            <span className="text-xs sm:text-sm">User Login</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Topbar;
