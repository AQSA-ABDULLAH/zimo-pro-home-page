// components/Hero.js
import React from "react";
import Header from "../header/Header";
import Navbar from "../header/Navbar";

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-screen text-white"
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

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-6">
        <h1 className="text-5xl font-bold mb-4">
          ZIMA Sotheby's International Realty
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
        </p>
        <div className="text-lg">
          <p className="font-bold">£5,000,000 GBP</p>
          <a
            href="#entry"
            className="bg-white text-black px-6 py-3 mt-4 inline-block rounded"
          >
            Buy Entry Now
          </a>
        </div>
      </div>
    </div>
  );
}
