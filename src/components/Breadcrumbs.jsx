// src/components/Breadcrumbs.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
  const location = useLocation(); // Get the current location

  return (
    <div className="container mx-auto  rounded-lg shadow-lg border border-gray-200 mt-20">
      <nav className="p-4 ">
        <ul className="flex space-x-4">
          {items.map((item, index) => {
            // Check if the current path matches the item's path
            const isActive = location.pathname === item.path;

            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="text-gray-400 mr-2"> &gt; </span>
                )}
                <Link
                  to={item.path}
                  className={`font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
