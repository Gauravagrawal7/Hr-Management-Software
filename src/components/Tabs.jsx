import React from "react";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

const Tabs = () => {
  const tabs = [
    { name: "Overview", path: "/dashboard" },
    { name: "Project", path: "/project" },
    { name: "Client", path: "/client" },
    { name: "HR", path: "/hr" },
    { name: "Ticket", path: "/ticket" },
    { name: "Finance", path: "/finance" },
  ];

  return (
    <div className="bg-white">
      <div className="border-b border-gray-300"></div>

      <div className="flex flex-wrap items-center px-4 sm:px-6 py-3">
        <div className="flex flex-wrap space-x-2">
          {tabs.map((tab, index) => (
            <div key={tab.name} className="flex items-center relative">
              <NavLink
                to={tab.path}
                className={({ isActive }) =>
                  `relative py-3 px-3 sm:px-5 text-sm font-medium text-gray-500 hover:text-gray-700 ${
                    isActive
                      ? "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[3px] after:bg-orange-500"
                      : ""
                  }`
                }
              >
                {tab.name}
              </NavLink>

              {index < tabs.length - 1 && (
                <div className="border-r border-gray-300 h-10 mx-3"></div>
              )}
            </div>
          ))}

          <div className="border-r border-gray-300 h-10 mx-3"></div>
        </div>

        <div className="flex items-center ml-auto mt-4 sm:mt-0">
          <div className="border-r border-gray-300 h-5 mr-3"></div>
          <FiSettings className="text-gray-500 text-lg cursor-pointer hover:text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
