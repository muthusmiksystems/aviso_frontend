// import React from 'react';
// import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaPhone, FaUser, FaUserLock } from 'react-icons/fa';


import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaPhone, FaUser, FaUserLock, FaLinkedinIn } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Topbar() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      style={{ background: 'linear-gradient(to right, #B82D97 17%, #57B3D3 67%, #76ABFC)' }}
      className="fixed z-999 top-0 p-2 sm:p-0 w-full flex flex-col md:flex-row items-center justify-center md:justify-between"
    >
      <div className="flex  justify-center sm:justify-between items-center text-white font-[OmnesArabic]  w-full px-0 py-0 sm:py-1 sm:px-7 md:px-20.5">

        {/* Social Icons */}
        <div className=" flex items-center hidden sm:flex  md:mb-0">
          <span className="font-medium text-[14px] ">Social :</span>
          <div className=' p-[12px]'>
            <FaLinkedinIn className="cursor-pointer sm:h-[21px] sm:w-[18px]" />
          </div>
          <div className=' p-[12px]'>
            <FaInstagram className="cursor-pointer sm:h-[21px] sm:w-[18px]" />
          </div>
          <div className=' p-[12px]'>
            <FaFacebook className="cursor-pointer sm:h-[21px] sm:w-[18px]" />
          </div>
          <div className=' p-[12px]'>
            <FaYoutube className="cursor-pointer sm:h-[21px] sm:w-[18px]" />
          </div>
        </div>

        {/* Contact & Login */}
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-3 md:space-x-10  text-white ml-0 sm:ml-5 md:ml-0 ">
          <div className="flex items-center space-x-2 ">
            <FaPhone className="sm:h-[21px] sm:w-[16px]" />
            <span className="text-sm text-[14px]">+123-456-7890</span>
          </div>
          <div className="cursor-pointer flex items-center space-x-2">
            <FaUser className="sm:h-[21px] sm:w-[14px]" />
            <span className="text-sm text-[14px]">Aviso Advisors</span>
          </div>
          {!user ?
            <NavLink to='/login' className="hidden sm:flex cursor-pointer  items-center space-x-2">
              <FaUserLock className="sm:h-[21px] sm:w-[20px]" />
              <span className="text-sm text-[14px] ">User Login</span>
            </NavLink>
            : null
          }

        </div>

      </div>
    </div>
  );
}

export default Topbar;
