import React from "react";
import {
  FiSearch,
  FiBell,
  FiPower,
  FiFileText,
  FiClock,
  FiPlus,
} from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-bold text-gray-900">DASHBOARD</h1>
        <span className="hidden sm:inline text-sm text-gray-500">
          Home • Dashboard
        </span>
      </div>

      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <FiSearch className="text-gray-500 text-lg cursor-pointer hover:text-orange-600" />
        <FiFileText className="text-gray-500 text-lg cursor-pointer hover:text-orange-600" />
        <FiClock className="text-gray-500 text-lg cursor-pointer hover:text-orange-600" />
        <FiPlus className="text-gray-500 text-lg cursor-pointer hover:text-orange-600" />
        <div className="relative">
          <FiBell className="text-gray-500 text-lg cursor-pointer hover:text-orange-600" />
          <span className="absolute -top-3 -right-4 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-md h-5 w-6 flex items-center justify-center">
            592
          </span>
        </div>
        <FiPower className="text-gray-500 text-lg cursor-pointer hover:text-orange-600" />
      </div>
    </div>
  );
};

export default Header;
