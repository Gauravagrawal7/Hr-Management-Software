import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

const Tabs = () => {
  return (
    <>
      {/* Top border */}
      <div className="border-t border-gray-300 w-full" />

      {/* Navigation bar */}
      <nav className="border-b border-gray-300 bg-white">
        <ul className="flex flex-wrap space-x-2 sm:space-x-5">
          {/* Mapping over the tabs */}
          {["Overview", "Project", "Client", "HR", "Ticket", "Finance"].map(
            (item, index) => (
              <li
                key={item}
                className={`relative flex items-center space-x-3 sm:space-x-7 ${
                  item === "Overview" ? "ml-4" : ""
                }`}
              >
                {/* NavLink for each tab */}
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `relative py-2 sm:py-3 px-2 sm:px-3 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-700 ${
                      isActive
                        ? "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[3px] after:bg-orange-500"
                        : ""
                    }`
                  }
                >
                  {item}
                </NavLink>

                {/* Vertical divider between tabs */}
                {index < 5 && (
                  <div className="border-l border-gray-300 h-full"></div>
                )}

                {/* Additional divider after the last tab */}
                {item === "Finance" && (
                  <div className="border-l border-gray-300 h-full"></div>
                )}
              </li>
            )
          )}

          {/* Divider before the settings icon */}
          <li className="flex items-center border-l border-gray-300 h-full mx-2"></li>

          {/* Settings icon */}
          <li className="ml-auto px-2 sm:px-6 py-2 sm:py-3 flex items-center">
            <div className="border-l border-gray-300 h-6 mr-2 sm:mr-4"></div>
            <FiSettings className="text-gray-500 text-lg sm:text-xl hover:text-orange-500 cursor-pointer" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Tabs;
