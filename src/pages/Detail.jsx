import Breadcrumbs from "../components/Breadcrumbs";
import Baselayout from "../layout/Baselayout";
import DetailAkomodasi from "../ui/DetailAkomodasi";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/destinations/${id}`
        );

        if (!response.ok) {
          throw new Error("Respon jaringan tidak baik");
        }

        const data = await response.json();
        setDestination(data.destination);
      } catch (error) {
        console.error("Kesalahan saat mengambil data:", error);
        setError("Destinasi tidak ditemukan.");
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto bg-gradient-to-r from-blue-400 to-purple-500 p-8">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto bg-gradient-to-r from-blue-400 to-purple-500 p-8">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          {error}
        </h1>
      </div>
    );
  }

  // Update breadcrumbs to match the current route
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destination" },
    {
      label:
        destination.name.length > 5
          ? `${destination.name.substring(0, 5)}...`
          : destination.name,
      path: `/destination/${id}`,
    },
  ];

  return (
    <div className="bg-gray-200">
      <Baselayout>
        <div className="container mx-auto bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg">
          <Breadcrumbs items={breadcrumbs} />
          <DetailAkomodasi destination={destination} />
        </div>
      </Baselayout>
    </div>
  );
}
