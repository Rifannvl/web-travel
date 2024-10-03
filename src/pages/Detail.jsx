import Breadcrumbs from "../components/Breadcrumbs";
import Baselayout from "../layout/Baselayout";
import DetailAkomodasi from "../ui/DetailAkomodasi";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

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
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destination" },
    {
      label:
        destination.name.length > 5
          ? `${destination.name.substring(0, 5)}...`
          : destination.name,
      path: `/destination${id}`,
    },
  ];

  // Misalnya, untuk mencetak breadcrumbs
  console.log(breadcrumbs);

  return (
    <div className=" bg-gray-200">
      <Baselayout>
        <Breadcrumbs items={breadcrumbs} />
        <DetailAkomodasi destination={destination} />
      </Baselayout>
    </div>
  );
}