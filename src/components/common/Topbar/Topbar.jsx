import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaPhone, FaUser, FaUserLock } from 'react-icons/fa';

function Topbar() {
  return (
    <div
      style={{ background: 'linear-gradient(to right, #B82D97 17%, #57B3D3 67%, #76ABFC)' }}
      className="p-2.5 w-full flex items-center justify-center"
    >
      <div className='flex justify-between items-center text-white font-omnesarabic font-semibold w-[88%]'>
        {/* Social Icons */}
        <div className="flex items-center space-x-3">
          <span className="font-medium text-xs">Social :</span>
          <FaLinkedin className="cursor-pointer text-md" />
          <FaInstagram className="cursor-pointer text-md" />
          <FaFacebook className="cursor-pointer text-md" />
          <FaYoutube className="cursor-pointer text-md" />
        </div>

        {/* Contact & Login */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1">
            <FaPhone className='text-md' />
            <span className='text-sm'>+123-456-7890</span>
          </div>
          <div className="cursor-pointer flex items-center space-x-1">
            <FaUser className='text-md' />
            <span className='text-sm'>Aviso Advisors</span>
          </div>
          <div className="cursor-pointer flex items-center space-x-1">
            <FaUserLock className='text-md' />
            <span className='text-sm'>User Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
