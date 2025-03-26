import React, { useState } from "react";
import {
  FaThLarge,
  FaBookOpen,
  FaUsers,
  FaRegCommentDots,
  FaShieldAlt,
  FaCog,
  FaSignOutAlt,
  FaBars, // Added toggle button icon
  FaTimes, // Close button icon
} from "react-icons/fa";
import Images from "../../assets/images/Image";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const [activeItem, setActiveItem] = useState("My Course"); // Default active menu

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { id: 1, label: "Overview", icon: <FaThLarge />, link: "#overview" },
    { id: 2, label: "My Course", icon: <FaBookOpen />, link: "#my-course" },
    { id: 3, label: "Community", icon: <FaUsers />, link: "#community" },
    {
      id: 4,
      label: "Messages",
      icon: <FaRegCommentDots />,
      link: "#messages",
      badge: 2,
    },
    { id: 5, label: "Report", icon: <FaShieldAlt />, link: "#report" },
    { id: 6, label: "Account Settings", icon: <FaCog />, link: "#settings" },
    { id: 7, label: "Log Out", icon: <FaSignOutAlt />, link: "#logout" },
  ];

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-30 p-2 bg-blue-600 text-white rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static z-20 bg-white shadow-lg h-full w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <img src={Images.Logoo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeItem === item.label
                    ? "text-[#29abe2] bg-blue-100 font-semibold"
                    : "text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsSidebarOpen(false); // Close sidebar on mobile after click
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Upgrade Section */}
          <div className="mt-6 p-4 bg-[#29abe2] rounded-lg text-white">
            <h3 className="text-lg font-bold">Upgrade To Membership</h3>
            <p className="text-sm mt-2">
              Unlock your full potential and elevate your skills with our
              cutting-edge tools.
            </p>
            <button className="mt-4 w-full bg-blue-300 text-white font-semibold py-2 rounded-lg hover:bg-blue-100">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
