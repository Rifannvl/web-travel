import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Baselayout from "../layout/Baselayout";
import Breadcrumbs from "../components/Breadcrumbs";

const SkeletonLoader = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
    <div className="h-60 bg-gray-200 rounded mb-4"></div>
    <div className="h-8 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-6 bg-gray-300 rounded"></div>
  </div>
);

export default function DetailPenginapan() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/hotel/${id}`
        );
        setHotel(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto bg-gray-200 mt-6 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Detail Hotel
        </h1>
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Penginapan", path: "/penginapan" },
    {
      label:
        hotel.name.length > 5 ? `${hotel.name.substring(0, 5)}...` : hotel.name,
      path: `/penginapan/${id}`,
    },
  ];

  const whatsappMessage = `Saya ingin memesan ${hotel.name}. Harga: $${
    hotel.price
  }. Kegiatan: ${
    hotel.activities ? hotel.activities.join(", ") : "Tidak ada kegiatan."
  }`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Baselayout>
        <Breadcrumbs items={breadcrumbs} />
        <div className="container mx-auto bg-gradient-to-r min-h-screen from-blue-400 to-purple-500 p-8 shadow-lg">
          <section className="flex items-center justify-center min-h-screen py-8 antialiased bg-white rounded-lg shadow-md">
            <div className="max-w-screen-xl mx-auto">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                  <img
                    className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    src={hotel.image}
                    alt={hotel.name}
                  />
                </div>

                <div className="mt-6 sm:mt-8 lg:mt-0">
                  <h1 className="text-3xl font-extrabold text-gray-800">
                    {hotel.name}
                  </h1>
                  <p className="text-2xl font-bold text-gray-800 mt-2">
                    ${hotel.price}
                  </p>
                  <div className="mt-4 flex items-center">
                    {Array.from(
                      { length: Math.floor(hotel.rating) },
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
                      ({hotel.rating})
                    </p>
                  </div>

                  {/* Tombol WhatsApp */}
                  <div className="mt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="button"
                        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-6 py-3 transition duration-300"
                      >
                        Pesan Lewat WhatsApp
                      </button>
                    </a>
                  </div>

                  <hr className="my-6 border-gray-300" />

                  <p className="mb-6 text-gray-800 text-lg">
                    {hotel.description}
                  </p>

                  <p className="text-gray-800">
                    <strong>Kegiatan:</strong>{" "}
                    {hotel.activities
                      ? hotel.activities.join(", ")
                      : "Tidak ada kegiatan."}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Baselayout>
    </>
  );
}
