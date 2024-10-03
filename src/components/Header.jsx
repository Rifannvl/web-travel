import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Hook untuk mendapatkan lokasi saat ini

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menentukan apakah berada di halaman beranda
  const isHomePage = location.pathname === "/";

  // Mengatur latar belakang navbar
  const navbarBackground = isHomePage
    ? isScrolled
      ? "bg-black"
      : "bg-transparent"
    : "bg-black";

  return (
    <div
      className={`text-white fixed w-full z-50 ${navbarBackground} transition-all duration-300`}
    >
      <header className="container mx-auto flex justify-between items-center p-4 shadow-lg top-0 left-0 w-full z-50">
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
                href="/#hero"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => {
                  setIsOpen(false); // Close sidebar when link is clicked
                }}
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to="/destination"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => {
                  setIsOpen(false); // Close sidebar when link is clicked
                }}
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                to="/penginapan"
                className="hover:text-blue-400 transition duration-300"
                onClick={() => {
                  setIsOpen(false); // Close sidebar when link is clicked
                }}
              >
                Penginapan
              </Link>
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
