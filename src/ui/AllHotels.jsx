import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllHotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotel"); // Ganti URL sesuai dengan konfigurasi server Anda
        if (!response.ok) {
          throw new Error("Gagal mengambil data hotel");
        }
        const data = await response.json();
        setHotels(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto bg-gray-200 pt-20">
      <h1 className="text-3xl font-bold mb-6">Daftar Hotel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {hotels.map((hotel) => (
          <Link
            key={hotel.id}
            to={`/hotel/${hotel.id}`} // Set the link to hotel detail page
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 block"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
            <p className="text-gray-700 mb-2">{hotel.description}</p>
            <p className="text-gray-800 font-semibold">Harga: ${hotel.price}</p>
            <p className="text-yellow-500">Rating: {hotel.rating} ★</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
