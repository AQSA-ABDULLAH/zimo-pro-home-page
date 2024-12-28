// components/Hero.js
import React from "react";
import Header from "../header/Header";
import Navbar from "../header/Navbar";
import BottomSection from "./BottomSection";

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-[1200px] text-white"
      style={{ backgroundImage: "url('/assets/Rectangle 168.png')" }}
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
      <div className="relative z-10">
        <Header />
      </div>

      <div className="relative z-10 mt-4">
        <Navbar />
      </div>

      <div className="z-10 w-full">
        <BottomSection />
      </div>
    </div>
  );
}
