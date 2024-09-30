import React, { useEffect, useState } from "react";
import Baselayout from "../layout/Baselayout";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function DetailAkomodasi({ id }) {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/destinations/${id}`
        );

        if (!response.ok) {
          throw new Error("Respon jaringan tidak baik");
        }

        const data = await response.json();
        setDestination(data.destination);
      } catch (error) {
        console.error("Kesalahan saat mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (!destination)
    return <div className="text-center">Destinasi tidak ditemukan.</div>;

  // Update breadcrumbs to match the current route
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Destinations", link: "/destinations" },
    { name: destination.name, link: `/destinations/${destination.id}` },
  ];

  return (
    <div className="bg-gray-100 mt-6">
      <Baselayout>
        <Breadcrumbs items={breadcrumbs} />
        <section className="flex items-center justify-center min-h-screen py-8 bg-gray-100 antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img
                  className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  src={destination.image}
                  alt={destination.name}
                />
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-black">
                  {destination.name}
                </h1>
                <p className="text-2xl font-bold text-gray-800 dark:text-black mt-2">
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
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400 ml-2">
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

                <hr className="my-6 md:my-8 border-gray-300 dark:border-gray-800" />

                <p className="mb-6 text-gray-600 dark:text-gray-400 text-lg">
                  {destination.description}
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Kegiatan:</strong> {destination.activities.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Baselayout>
    </div>
  );
}
