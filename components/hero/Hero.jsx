// components/Hero.js
"use client";
import React, { useState } from "react"; // Add useState to the import
import Header from "../header/Header";
import Navbar from "../header/Navbar";
import BottomSection from "./BottomSection";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/background.png",
    "/assets/Rectangle 168.png",
    "/assets/b1.png",
    "/assets/b2.png",
    "/assets/b3.png",
    "/assets/b4.png",
    "/assets/b5.png",
  ];
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="relative bg-cover bg-center h-[1200px] text-white"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Overlay Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/assets/Group 3121.png"
          alt="Overlay Image"
          className="h-full w-full"
        />
      </div>

      {/* Header Component */}
      <div className="relative">
        <Header />
      </div>

      <div className="relative mt-4">
        <Navbar />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-14 right-10 transform flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-[2px] w-8 rounded-full cursor-pointer ${
              currentImageIndex === index ? "bg-gold" : "bg-white"
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      <div className="z-10 w-full">
        <BottomSection />
      </div>
    </div>
  );
}
