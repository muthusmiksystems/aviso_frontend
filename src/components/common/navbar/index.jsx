

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; 
import { motion } from "framer-motion"; // Import Framer Motion
import Images from "../../../assets/images/Image";

const navbarData = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Job Universe", path: "/jobs" },
  { name: "FAQ", path: "/faq" },
  { name: "Resources ▼", path: "/resources" },
  { name: "Learn", path: "/learn" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="bg-gray-100 shadow-md font-[OmnesArabic] font-extrabold bg-gradient-to-r from-[#fffff] via-[#F7F8FE] to-[#F0F0FC]">
      <div className="flex justify-between items-center px-4 md:px-10 py-3 w-full">
        
        <div className="flex items-center">
          <Link to="/">
            <img src={Images.Logo} alt="Logo" className="h-12 md:h-14" />
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-gray-700 text-xl">
            <FaBars />
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-gray-600">
          {navbarData.map((item, index) => (
            <Link key={index} to={item.path} className="hover:text-gray-800 text-sm">
              {item.name}
            </Link>
          ))}
          <span>|</span>
          <FaSearch className="text-gray-500 cursor-pointer" />
          <Link to="/register">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#00000000]  z-40"
            onClick={() => setMenuOpen(false)}
          ></motion.div>

          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-3/4 sm:w-1/2 lg:w-1/4 bg-[#fefefede] shadow-lg z-50 p-6"
          >
            <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl absolute top-4 right-4">
              <FaTimes />
            </button>

            <ul className="flex flex-col space-y-6 mt-10 text-gray-700">
              {navbarData.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-lg font-bold" onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-6 flex space-x-4 items-center">
              <FaSearch className="text-gray-500 cursor-pointer text-lg" />
              <Link to="/register">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
}

export default Navbar;

