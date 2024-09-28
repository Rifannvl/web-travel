import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className=" text-white">
      <header className="container mx-auto flex justify-between items-center p-4 shadow-lg fixed top-0 left-0 w-full z-50 right-0">
        <h1 className="text-2xl font-bold">My Luxury Travel</h1>
        <nav className="flex items-center justify-center p-4 rounded-full border border-white">
          <ul className="flex space-x-6  ">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
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
