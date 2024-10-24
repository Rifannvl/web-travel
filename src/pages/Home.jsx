import React from "react";
import Baselayout from "../layout/Baselayout";
import HeroSection from "../components/HeroSection";
import BentoImage from "../components/BentoImage";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Baselayout>
        <HeroSection />
        <BentoImage />
        <About />

        <Contact />
      </Baselayout>
    </div>
  );
}
