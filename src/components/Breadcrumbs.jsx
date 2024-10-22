import React from "react";
import { Link, useLocation } from "react-router-dom";

const SkeletonBreadcrumbs = () => (
  <div className="flex space-x-4 animate-pulse">
    <div className="h-6 w-24 bg-gray-200 rounded"></div>
    <div className="h-6 w-24 bg-gray-200 rounded"></div>
    <div className="h-6 w-24 bg-gray-200 rounded"></div>
  </div>
);

const Breadcrumbs = ({ items, loading }) => {
  const location = useLocation();

  if (loading) {
    return (
      <div className="container mx-auto rounded-lg shadow-lg border border-gray-200 mt-16 p-4 bg-gradient-to-r from-blue-400 to-purple-500">
        <SkeletonBreadcrumbs />
      </div>
    );
  }

  return (
    <div className="container mx-auto rounded-lg shadow-lg border border-gray-200 mt-16 p-4 bg-white">
      <nav>
        <ul className="flex space-x-4">
          {items.map((item, index) => {
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
                      ? "text-yellow-500" // Ganti warna aktif
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
