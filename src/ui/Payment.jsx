import React, { useEffect, useState } from "react";
import Baselayout from "../layout/Baselayout";

export default function Payment({ id }) {
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

  return (
    <div className="bg-gray-100">
      <Baselayout>
        <section className=" mt-20 py-8 antialiased md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto max-w-5xl shadow-lg rounded-lg p-8 bg-white transition-transform duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Payment
              </h2>
              <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                <form className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-md lg:max-w-xl transition-transform duration-300 transform hover:scale-105">
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="full_name"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Full name (as displayed on card)*
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-primary-700 focus:ring focus:ring-primary-200"
                        placeholder="Bonnie Green"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="card-number-input"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Card number*
                      </label>
                      <input
                        type="text"
                        id="card-number-input"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-primary-700 focus:ring focus:ring-primary-200"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="card-expiration-input"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Card expiration*
                      </label>
                      <input
                        type="text"
                        id="card-expiration-input"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-primary-700 focus:ring focus:ring-primary-200"
                        placeholder="12/23"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvv-input"
                        className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900"
                      >
                        CVV*
                      </label>
                      <input
                        type="number"
                        id="cvv-input"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-primary-700 focus:ring focus:ring-primary-200"
                        placeholder="•••"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-gray-600 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-transform duration-300 transform hover:scale-105"
                  >
                    Pay now
                  </button>
                </form>

                <div className="mt-6 grow sm:mt-8 lg:mt-0">
                  <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-md transition-transform duration-300 transform hover:scale-105">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                          ${destination.price}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-500">
                          -${(destination.price * 0.1).toFixed(2)}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                          $99
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                          $799
                        </dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                      <dt className="text-base font-bold text-gray-900">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900">
                        $
                        {(
                          destination.price +
                          99 +
                          799 -
                          destination.price * 0.1
                        ).toFixed(2)}
                      </dd>
                    </dl>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-8">
                    <img
                      className="h-8 w-auto"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                      alt="Paypal"
                    />
                    <img
                      className="h-8 w-auto"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                      alt="Visa"
                    />
                    <img
                      className="h-8 w-auto"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                      alt="Mastercard"
                    />
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
