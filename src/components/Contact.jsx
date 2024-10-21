import React from "react";
import FAQ from "./Faq";

export default function Contact() {
  const position = [51.505, -0.09]; // Ganti dengan koordinat yang Anda inginkan

  return (
    <div className="mx-5 flex flex-col md:flex-row my-10">
      <div className="w-full md:w-1/2 mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white md:mr-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <form className="">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-1"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-96 ">
        <FAQ />
      </div>
    </div>
  );
}
