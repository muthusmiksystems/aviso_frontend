
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Images from "../../../assets/images/Image";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/features/authSlice";
import { Img } from "../Img";
import Icons from "../../../assets/icons/Icons";

const navbarData = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Job Universe", path: "/jobuniverse" },
  { name: "FAQ", path: "/faq" },
  {
    name: "Resources ",
    path: "#",
    subMenu: [
      { name: "Guides", path: "#" },
      { name: "Blog", path: "#" },
      { name: "Templates", path: "#" }
    ]
  },
  { name: "Learn", path: "#" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch()
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
    <nav className="shadow-xs font-[OmnesArabic] bg-gradient-to-r from-white via-[#F7F8FE] to-[#F0F0FC]">
      <div className="flex justify-between items-center px-8 md:px-28 lg:px-20 xl:px-28 py-7 w-full">

        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <Img src={Images.Logo} alt="Logo" className="h-10 md:h-[58px] md:w-[220px]" />
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center xl:space-x-7 md:space-x-4 text-gray-600">
          {navbarData.map((item, index) =>
            item.subMenu ? (
              <div
                key={index}
                className="relative group flex items-center gap-3"
                onMouseEnter={() => setResourceDropdownOpen(true)}
                onMouseLeave={() => setResourceDropdownOpen(false)}
              >
                <NavLink to={item.path} className="font-regular text-sm md:text-[16px] text-[#959595] cursor-pointer">
                  {item.name}
                </NavLink>
                {/* Option 1: Icon */}
                {/* <FaChevronDown className="text-[#959595] text-xs mt-0.5" /> */}
                {/* Option 2: Image */}
                <Img src={Icons.DownArrow} alt="Dropdown" className="mt-0.5" />

                {/* Dropdown Menu */}
                {resourceDropdownOpen && (
                  <div
                    onMouseLeave={() => setResourceDropdownOpen(false)}
                    className="absolute left-0 mt-40 w-40 bg-white shadow-md rounded-md py-2 z-60">
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
              item.path === "#" ? (
                <span key={index} className="font-regular text-sm md:text-[16px] cursor-pointer text-[#959595] cursor-default">
                  {item.name}
                </span>
              ) : (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-regular text-sm md:text-[16px] cursor-pointer ${isActive ? "text-[#cf36b4] font-bold" : "text-[#959595]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )
          )}
          <span><Img src={Icons.Line} alt="Dropdown" className=" h-8 w-[2px] mt-0.5" /></span>
          <img src={Images.Search} alt="Search" className="h-[24px] w-[24px]" />
          {user ?
            <div onClick={() => dispatch(logoutUser())}>
              <button className="bg-[#24A1DD] text-white px-4 py-2 rounded-full text-sm cursor-pointer">
                Logout
              </button>
            </div>
            :
            <NavLink to="/register">
              <button className="bg-[#24A1DD] text-white px-6 py-2  rounded-full text-sm md:text-[18px] cursor-pointer">
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
            className="fixed top-0 left-0 h-full w-3/4 sm:w-1/2 lg:w-1/4 bg-white shadow-lg z-60 p-6"
          >
            <div className="flex items-center">
              <NavLink to="/">
                <Img src={Images.Logo} alt="Logo" className="h-10 md:h-[58px] md:w-[220px]" />
              </NavLink>
            </div>
            <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl absolute top-8 right-4">
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
                  item.path === "#" ? (
                    <span key={index} className="font-regular text-sm md:text-[16px] cursor-pointer text-[#959595] cursor-default">
                      {item.name}
                    </span>
                  ) : (
                    <NavLink
                      key={index}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `font-regular text-sm md:text-[16px] cursor-pointer ${isActive ? "text-[#cf36b4] font-bold" : "text-[#959595]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )
                )
              )}
            </ul>

            <div className="mt-5 left-6 flex space-x-4 items-center">
              <img src={Images.Search} alt="Search" />
              {user ?
                <div onClick={() => { setMenuOpen(false); dispatch(logoutUser()) }}>
                  <button className="bg-[#24A1DD] text-white px-4 py-2 rounded-full text-sm cursor-pointer">
                    Logout
                  </button>
                </div>
                :
                <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                  <button className="bg-[#24A1DD] text-white px-6 py-2  rounded-full text-sm md:text-[18px] cursor-pointer">
                    Sign Up
                  </button>
                </NavLink>
              }
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
