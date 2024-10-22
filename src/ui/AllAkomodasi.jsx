import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-lg p-4 animate-pulse">
    <div className="h-40 bg-gray-200 rounded mb-2"></div>
    <div className="h-6 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
  </div>
);

export default function AllAkomodasi() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "/destinations"
        );
        setDestinations(response.data.destinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto bg-gradient-to-r from-blue-400 to-purple-500 p-8">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Akomodasi
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-gradient-to-r from-blue-400 to-purple-500 p-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">
        Akomodasi
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/destination/${destination.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {destination.name}
              </h2>
              <h3 className="text-gray-600 mb-2 text-lg font-medium">
                {destination.description}
              </h3>
              <p className="text-gray-800 font-bold">
                Price: ${destination.price}
              </p>
              <p className="text-yellow-500">Rating: {destination.rating} ★</p>
              <p className="text-gray-600">
                Activities: {destination.activities.join(", ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
