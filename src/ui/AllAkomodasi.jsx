import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function AllAkomodasi() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      console.log(import.meta.env.VITE_BASE_URL + "/destinations");
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

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto  bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Akomodasi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/destination/${destination.id}`} // Set the link to detail page
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 block" // Add block to make the entire card clickable
          >
            <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-gray-700 mb-2 font-semibold text-lg ">
              {destination.description}
            </h3>
            <p className="text-gray-800 font-semibold">
              Price: ${destination.price}
            </p>
            <p className="text-yellow-500">Rating: {destination.rating} ★</p>
            <p className="text-gray-600">
              Activities: {destination.activities.join(", ")}
            </p>
          </Link> // Wrap the card with Link component
        ))}
      </div>
    </div>
  );
}
