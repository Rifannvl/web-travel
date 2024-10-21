import React from "react";
import { Link } from "react-router-dom";

export default function DetailAkomodasi({ destination }) {
  return (
    <div className="container mx-auto bg-gray-200 mt-6 p-8 rounded-lg shadow-lg">
      <section className="flex items-center justify-center min-h-screen py-8 antialiased bg-white rounded-lg shadow-md">
        <div className="max-w-screen-xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                src={destination.image}
                alt={destination.name}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-3xl font-extrabold text-gray-800">
                {destination.name}
              </h1>
              <p className="text-2xl font-bold text-gray-800 mt-2">
                ${destination.price}
              </p>
              <div className="mt-4 flex items-center">
                {Array.from(
                  { length: Math.floor(destination.rating) },
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  )
                )}
                <p className="text-sm font-medium leading-none text-gray-600 ml-2">
                  ({destination.rating})
                </p>
              </div>

              <div className="mt-6">
                <Link to={`/payment/${destination.id}`}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-gradient-to-l focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 transition duration-300"
                    role="button"
                  >
                    Pesan Sekarang
                  </button>
                </Link>
              </div>

              <hr className="my-6 border-gray-300" />

              <p className="mb-6 text-gray-800 text-lg">
                {destination.description}
              </p>

              <p className="text-gray-800">
                <strong>Kegiatan:</strong> {destination.activities.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
