import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Impor axios

const SkeletonHotelCard = () => (
  <div className="bg-white rounded-lg shadow-lg p-4 animate-pulse">
    <div className="h-40 bg-gray-200 rounded mb-4"></div>
    <div className="h-6 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
  </div>
);

export default function AllHotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "/hotel"
        );
        setHotels(response.data); // Ambil data dari response
      } catch (err) {
        setError(err.message); // Tangkap error
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto bg-gradient-to-r from-blue-400 to-purple-500 pt-10 p-4">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Daftar Hotel
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonHotelCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto bg-gradient-to-r from-blue-400 to-purple-500 pt-10 p-4">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">
        Daftar Hotel
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Link
            key={hotel.id}
            to={`/penginapan/${hotel.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {hotel.name}
              </h2>
              <p className="text-gray-700 mb-2">{hotel.description}</p>
              <p className="text-gray-800 font-semibold">
                Harga: ${hotel.price}
              </p>
              <p className="text-yellow-500">Rating: {hotel.rating} ★</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
