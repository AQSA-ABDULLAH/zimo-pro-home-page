"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import SquareProgressBar from "./ProgressBar";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const Timer = dynamic(() => import("./Timer"), { ssr: false });

const images = [
  "/assets/Rectangle.png",
  "/assets/Rectangle193.png",
  "/assets/b1.png",
  "/assets/b2.png",
  "/assets/b3.png",
  "/assets/b4.png",
  "/assets/b5 .png",
];

const Card = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="text-white bg-white w-full max-w-[430px] desktop:max-w-[480px] ">
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        {/* Background Image Carousel */}
        <div
          className="h-[380px] 2xl:h-[490px] desktop:h-[547px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundColor: "#ccc",
            boxShadow:
              "inset 0px 90px 80px -38px rgba(0, 0, 0, 0.8), inset 0px -90px 60px -35px rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={prevImage}>
            <img src="/assets/Path2.png" alt="previous-button" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={nextImage}>
            <img src="/assets/Path1.png" alt="next-button" />
          </button>
        </div>

        {/* Countdown Timer */}
        <Timer />

        {/* Share And Like */}
        <div className="absolute top-24 desktop:top-28 right-7 flex items-center space-x-4">
          <img
            src="/assets/Path 7830.png"
            alt="share-icon"
            className="w-5 h-5"
          />
          {isLiked ? (
            <IoMdHeart
              className="cursor-pointer text-red-500 w-5 h-5 2xl:w-6 md:h-6"
              onClick={() => setIsLiked(false)} // Toggle to unliked state
            />
          ) : (
            <FaRegHeart
              className="cursor-pointer text-white w-5 h-5 2xl:w-6 md:h-6"
              onClick={() => setIsLiked(true)} // Toggle to liked state
            />
          )}
        </div>

        {/* Circular Progress Bar and Price */}
        <div className="absolute bottom-14 desktop:bottom-[4.5rem] flex justify-center w-[100%] px-6">
          {/* Slide Indicators */}
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`cursor-pointer mx-1 h-0.5 w-4 2xl:w-8 ${
                  index === currentImageIndex ? "bg-gold" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Address and Details Section */}
        <div className="absolute w-[100%] bottom-9 desktop:bottom-12 tracking-wider">
          <div className="flex justify-between font-lato text-[6px] desktop:text-[8px] uppercase  px-6">
            <p>Shelton Street</p>
            <p>Covent Garden</p>
            <p>London</p>
            <p>WC2H</p>
            <p>United Kingdom</p>
          </div>
        </div>

        <div className="absolute w-[100%] bottom-2 flex justify-between px-6">
          <div>
            <img
              src="/assets/Group 3005.png"
              alt="logo"
              className="px-1 w-16 2xl:w-20"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-end text-[8px] dektop:text-[14px] tracking-widest">
              £5,000,000 GBP
            </p>
            <p className="text-end text-[5px] desktop:text-[8px] tracking-widest">
              #ZM7861234567
            </p>
          </div>
          <div>
            <img
              src="/assets/g12.png"
              alt="logo"
              className="px-1 w-16 dektop:w-20"
            />
          </div>
        </div>
      </div>

      {/* Buy Entry Section */}
      <div className="h-[44px] desktop:h-[54px] bg-black tracking-widest rounded-xl mt-2 font-lato text-[12px] desktop:text-[16px]">
        <div className="flex justify-between pt-4 px-6">
          <p>£25.00 GBP</p>
          <button>BUY ENTRY NOW</button>
        </div>
        <p className="text-end text-[5px] desktop:text-[7px] px-5">#ZM7861234567</p>
      </div>
    </div>
  );
};

export default Card;
