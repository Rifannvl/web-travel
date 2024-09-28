import React from "react";

export default function Footer() {
  return (
    <div className="container mx-auto bg-gray-800">
      <footer className=" text-white py-6">
        <p className="text-center text-sm">
          &copy; 2024 My Website. All rights reserved.
        </p>
        <nav className="flex justify-center mt-4">
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 mx-4 text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 mx-4 text-sm"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 mx-4 text-sm"
          >
            Contact Us
          </a>
        </nav>
      </footer>
    </div>
  );
}
