import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white">
      <header className="container mx-auto flex justify-between items-center p-4 shadow-lg fixed top-0 left-0 w-full z-50">
        <h1 className="text-2xl font-bold">My Luxury Travel</h1>
        <button className="md:hidden" onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-2xl"
          />
        </button>
        <nav
          className={`fixed inset-0 bg-black bg-opacity-75 transform transition-transform duration-300 ease-in-out 
                      ${isOpen ? "translate-x-0" : "translate-x-full"} 
                      md:static md:bg-transparent md:flex md:translate-x-0`}
        >
          <div className="flex justify-end p-4 md:hidden">
            <button onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faTimes} className="text-white text-2xl" />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:space-x-6 md:justify-end md:bg-transparent md:p-0 p-6">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => {
                  setIsOpen(false); // Close sidebar when link is clicked
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => {
                  setIsOpen(false); // Close sidebar when link is clicked
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => {
                  setIsOpen(false); // Close sidebar when link is clicked
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-blue-400 transition duration-300"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-blue-400 transition duration-300"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-blue-400 transition duration-300"
            />
          </a>
        </div>
      </header>
    </div>
  );
}
