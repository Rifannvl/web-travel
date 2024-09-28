import React from "react";
import Baselayout from "../layout/Baselayout";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <Baselayout>
        <HeroSection />

        <h1 className="text-3xl font-bold ">Home</h1>
      </Baselayout>
    </div>
  );
}
