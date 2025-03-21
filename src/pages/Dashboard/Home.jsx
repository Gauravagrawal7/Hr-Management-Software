import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import { GiNetworkBars } from "react-icons/gi";
import {
  FiUsers,
  FiUser,
  FiLayers,
  FiFileText,
  FiClock,
  FiCheckSquare,
  FiCalendar,
  FiTag,
} from "react-icons/fi";

const Home = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between space-y-2">
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">
              Total Clients
            </h3>
            <p className="text-xl font-semibold text-orange-500">12</p>
          </div>
          <FiUsers className="text-gray-400 text-xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between space-y-2">
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">
              Total Employees
            </h3>
            <p className="text-xl font-semibold text-orange-500">11</p>
          </div>
          <FiUser className="text-gray-400 text-xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between space-y-2">
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">
              Total Projects
            </h3>
            <p className="text-xl font-semibold text-orange-500">30</p>
          </div>
          <FiLayers className="text-gray-400 text-xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between space-y-2">
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">
              Due Invoices
            </h3>
            <p className="text-xl font-semibold text-orange-500">0</p>
          </div>
          <FiFileText className="text-gray-400 text-xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between space-y-2">
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">
              Hours Logged
            </h3>
            <p className="text-xl font-semibold text-orange-500">
              0 Hrs 12 Mins
            </p>
          </div>
          <FiClock className="text-gray-400 text-xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between space-y-2">
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-700 flex items-center space-x-1">
              <span>Pending Tasks</span>
              <FiHelpCircle className="text-gray-700 text-sm cursor-pointer" />
            </h3>
            <p className="text-xl font-semibold text-orange-500">1178</p>
          </div>
          <FiCheckSquare className="text-gray-400 text-xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between space-y-2">
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">
              Today Attendance
            </h3>
            <p className="text-xl font-semibold text-orange-500">0/11</p>
          </div>
          <FiCalendar className="text-gray-400 text-xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between space-y-2">
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">
              Unresolved Tickets
            </h3>
            <p className="text-xl font-semibold text-orange-500">0</p>
          </div>
          <FiTag className="text-gray-400 text-xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-100 justify-start">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-medium text-gray-900">Income</h3>
            <FiHelpCircle className="text-gray-700 text-sm cursor-pointer" />
          </div>
          <div className="flex items-center justify-center mt-10 sm:mt-20">
            <GiNetworkBars className="text-gray-400 text-3xl" />
          </div>
          <p className="text-gray-500 text-sm text-center w-full mt-5">
            - Not enough data -
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-100 justify-start">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-medium text-gray-900">Timesheet</h3>
            <FiHelpCircle className="text-gray-700 text-sm cursor-pointer" />
          </div>
          <div className="flex items-center justify-center mt-10 sm:mt-20">
            <GiNetworkBars className="text-gray-400 text-3xl" />
          </div>
          <p className="text-gray-500 text-sm text-center w-full mt-5">
            - Not enough data -
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
