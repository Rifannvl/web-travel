import React from "react";
import Baselayout from "../layout/Baselayout";
import HeroSection from "../components/HeroSection";
import BentoImage from "../components/BentoImage";
import About from "../components/About";
export default function Home() {
  return (
    <div>
      <Baselayout>
        <HeroSection />
        <BentoImage />
        <About />
      </Baselayout>
    </div>
  );
}
