
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Images from "../../../assets/images/Image";
import { useSelector } from "react-redux";

const navbarData = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Job Universe", path: "/jobuniverse" },
  { name: "FAQ", path: "/faq" },
  {
    name: "Resources ▼",
    path: "/resources",
    subMenu: [
      { name: "Guides", path: "/resources/guides" },
      { name: "Blog", path: "/resources/blog" },
      { name: "Templates", path: "/resources/templates" }
    ]
  },
  { name: "Learn", path: "/learn" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourceDropdownOpen, setResourceDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
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
    <nav className="shadow-md font-[OmnesArabic] bg-gradient-to-r from-white via-[#F7F8FE] to-[#F0F0FC]">
      <div className="flex justify-between items-center px-4 md:px-22 py-3 w-full">

        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={Images.Logo} alt="Logo" className="h-10 md:h-12" />
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-gray-600">
          {navbarData.map((item, index) =>
            item.subMenu ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setResourceDropdownOpen(true)}
              >
                <NavLink to={item.path} className="font-regular text-sm text-[#959595] cursor-pointer">
                  {item.name}
                </NavLink>

                {/* Dropdown Menu */}
                {resourceDropdownOpen && (
                  <div
                    onMouseLeave={() => setResourceDropdownOpen(false)}
                    className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md py-2 z-50">
                    {item.subMenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"

                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `font-regular text-sm cursor-pointer ${isActive ? "text-[#b82d97] font-bold" : "text-[#959595]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
          <span>|</span>
          <img src={Images.Search} alt="Search" />
          {user ?
            <NavLink to="/login">
              <button className="bg-[#24A1DD] text-white px-4 py-1.5 rounded-full text-sm">
                Logout
              </button>
            </NavLink>
            :
            <NavLink to="/register">
              <button className="bg-[#24A1DD] text-white px-4 py-1.5 rounded-full text-sm">
                Sign Up
              </button>
            </NavLink>
          }

        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-gray-700 text-xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-3/4 sm:w-1/2 lg:w-1/4 bg-white shadow-lg z-50 p-6"
          >
            <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl absolute top-4 right-4">
              <FaTimes />
            </button>

            <ul className="flex flex-col space-y-6 mt-10 text-gray-700">
              {navbarData.map((item, index) =>
                item.subMenu ? (
                  <div key={index}>
                    <button
                      onClick={() => setResourceDropdownOpen(!resourceDropdownOpen)}
                      className="font-regular text-sm text-gray-700 cursor-pointer flex justify-between w-full"
                    >
                      {item.name}
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {resourceDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subMenu.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => setMenuOpen(false)}
                            className="block text-gray-600 hover:text-[#b82d97]"
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-regular text-sm cursor-pointer ${isActive ? "text-[#b82d97] font-bold" : "text-gray-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </ul>

            <div className="absolute bottom-6 left-6 flex space-x-4 items-center">
              <img src={Images.Search} alt="Search" />
              <NavLink to="/register">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm">
                  Sign Up
                </button>
              </NavLink>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
