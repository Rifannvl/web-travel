import React, { useEffect, useState } from "react";
import Baselayout from "../layout/Baselayout";
import { useParams } from "react-router-dom";

// SkeletonLoader component for loading state
const SkeletonLoader = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg animate-pulse">
    <div className="mb-4 h-8 bg-gray-300 rounded"></div>
    <div className="mb-6 grid grid-cols-2 gap-4">
      <div className="col-span-2 sm:col-span-1">
        <div className="mb-2 h-6 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <div className="mb-2 h-6 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
      <div>
        <div className="mb-2 h-6 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
      <div>
        <div className="mb-2 h-6 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
    <div className="mt-4 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
    <div className="mt-6 space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6">
      <div className="h-6 bg-gray-300 rounded"></div>
      <div className="h-6 bg-gray-300 rounded"></div>
      <div className="h-6 bg-gray-300 rounded"></div>
      <div className="h-6 bg-gray-300 rounded"></div>
      <div className="h-6 bg-gray-400 rounded"></div>
    </div>
  </div>
);

export default function Payment() {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState(""); // State for full name input
  const { id } = useParams();

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

  if (loading) return <SkeletonLoader />;
  if (!destination)
    return <div className="text-center">Destinasi tidak ditemukan.</div>;

  const handlePayNow = (e) => {
    e.preventDefault(); // Prevent form submission
    const whatsappMessage = `Saya ingin memesan ${destination.name}. Harga: $${destination.price}. Nama: ${fullName}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank"); // Open WhatsApp link
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen">
      <Baselayout>
        <section className="mt-20 py-8 antialiased md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto max-w-5xl shadow-lg rounded-lg p-8 bg-white transition-transform duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Payment
              </h2>
              <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                <form
                  onSubmit={handlePayNow}
                  className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-lg lg:max-w-xl transition-transform duration-300 transform hover:scale-105"
                >
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)} // Update full name state
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-300 transform hover:scale-105"
                  >
                    Pay now
                  </button>
                </form>

                <div className="mt-6 grow sm:mt-8 lg:mt-0">
                  <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-lg transition-transform duration-300 transform hover:scale-105">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {destination.name}
                    </h3>
                    <p className="text-gray-700">Price: ${destination.price}</p>
                    <p className="text-gray-700">{destination.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Baselayout>
    </div>
  );
}
