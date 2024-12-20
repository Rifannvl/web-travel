import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faSmile,
  faGlobe,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="container mx-auto relative grid grid-cols-1 items-center justify-start h-full text-white text-start p-4">
        <div className="max-w-xl mt-8 pt-20 md:pt-32">
          <div className="mb-4 max-w-xs md:max-w-60 justify-start ">
            <h1 className="text-xl rounded-full border border-white p-2 px-4 text-center">
              Feel the Experience
            </h1>
          </div>
          <div className="justify-start mb-3">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-start">
              Discover Your Next Luxury Adventure
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-start">
              Explore exclusive destinations with our premium travel packages
            </p>
            <button className="text-white text-start font-semibold py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black shadow-md transition duration-300 flex items-center ">
              Start Your Journey
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-center">
          <div className="text-center bg-white bg-opacity-20 backdrop-blur-xs p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <FontAwesomeIcon
                icon={faSmile}
                className="text-2xl md:text-4xl text-white mr-2"
              />
              <CountUp
                className="text-xl md:text-2xl font-bold text-white"
                start={0}
                end={500}
                duration={2.5}
              />
            </div>
            <p className="text-white text-sm md:text-lg text-start md:text-center">
              Happy Customers
            </p>
          </div>

          <div className="text-center bg-white bg-opacity-10 backdrop-blur-xs p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-2xl md:text-4xl text-white mr-2"
              />
              <CountUp
                className="text-xl md:text-2xl font-bold text-white"
                start={0}
                end={150}
                duration={2.5}
              />
            </div>
            <p className="text-white text-sm md:text-lg text-start md:text-center">
              Luxury Destinations
            </p>
          </div>

          <div className="text-center bg-white bg-opacity-20 backdrop-blur-xs p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <FontAwesomeIcon
                icon={faStar}
                className="text-2xl md:text-4xl text-white mr-2"
              />
              <CountUp
                className="text-xl md:text-2xl font-bold text-white"
                start={0}
                end={300}
                duration={2.5}
              />
            </div>
            <p className="text-white text-sm md:text-lg text-start md:text-center">
              Experiences Offered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
