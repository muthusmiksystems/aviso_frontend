import React from "react";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Hello, <span className="font-bold">User</span>
        </h1>
        <p className="text-sm text-gray-500">Welcome to Aviso</p>
      </div>

      <div className="relative">
        <FaBell className="text-gray-400 text-xl" />
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          2
        </span>
      </div>
    </div>
  );
};

export default Header;
