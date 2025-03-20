// // src/components/Navbar.jsx
// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import Images from "../../../assets/images/Image"; // Correct import

// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-4  w-full bg-gray-100 font-omnesarabic font-bold">
//       {/* Left Section - Logo */}
//       <div className="flex justify-between mx-auto items-center w-[80%]">
//         <div className="flex items-center space-x-2">
//           <img src={Images.Logo} alt="Logo" className="h-13" />
//         </div>
//         <div className="flex space-x-2 items-center">
//           <ul className="flex space-x-6 text-gray-500 text-sm">
//             <li className="cursor-pointer">Home</li>
//             <li className="cursor-pointer hover:text-gray-700 text-primary">About Us</li> 
//             <li className="cursor-pointer hover:text-gray-700">Job Universe</li>
//             <li className="cursor-pointer hover:text-gray-700">FAQ</li>
//             <li className="cursor-pointer hover:text-gray-700">Resources ▼</li>
//             <li className="cursor-pointer hover:text-gray-700">Learn</li>
//           </ul>

//           {/* Right Section - Search & Sign Up */}
//           <div className="flex items-center space-x-4">
//             <span >|</span>
//             <FaSearch className="text-gray-500 cursor-pointer" />
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; 
import { FaSearch } from "react-icons/fa";
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
  return (
    <nav className="flex justify-between items-center p-4 w-full bg-gray-100 font-omnesarabic font-bold">
      
      <div className="flex justify-between mx-auto items-center w-[80%]">
        <div className="flex items-center space-x-2">
          <img src={Images.Logo} alt="Logo" className="h-13" />
        </div>

        
        <div className="flex space-x-2 items-center">
          <ul className="flex space-x-6 text-gray-500 text-sm">
            {navbarData.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-gray-700">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <span>|</span>
            <FaSearch className="text-gray-500 cursor-pointer" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

