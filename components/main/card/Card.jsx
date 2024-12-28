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
  "/assets/Rectangle.png",
  "/assets/Rectangle.png",
  "/assets/Rectangle193.png",
  "/assets/Rectangle.png",
  "/assets/Rectangle.png",
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
    <div className="text-white bg-white w-full max-w-[454px]">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Background Image Carousel */}
        <div
          className="h-[380px] 2xl:h-[547px] bg-cover bg-center relative"
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
        <div className="absolute top-24 2xl:top-28 right-7 flex items-center space-x-4">
          <img src="/assets/Path 7830.png" alt="share-icon" className="w-5 h-5"/>
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
        <div className="absolute bottom-14 flex justify-between w-[100%] px-6">
          <SquareProgressBar percentage={23} />
          <div className="flex flex-col">
            <div className="flex justify-between text-white">
              <p className="text-[10px] 2xl:text-[14px] tracking-widest">£5,000,000 GBP</p>
              <img src="/assets/g12.png" alt="logo" className="px-1 w-16 2xl:w-20" />
            </div>

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
        </div>

        {/* Address and Details Section */}
        <div className="absolute w-[100%] bottom-2 tracking-wider">
          <div className="flex justify-between font-lato text-[6px] 2xl:text-[9px] uppercase  px-6">
            <p>Shelton Street</p>
            <p>Covent Garden</p>
            <p>London</p>
            <p>WC2H</p>
            <p>United Kingdom</p>
          </div>
          <p className="text-end text-[5px] 2xl:text-[8px] mt-1 px-5 tracking-widest">
            #ZM7861234567
          </p>
        </div>
      </div>

      {/* Buy Entry Section */}
      <div className="h-[44px] 2xl:h-[54px] bg-black tracking-widest rounded-2xl mt-2 font-lato text-[12px] 2xl:text-[16px]">
        <div className="flex justify-between pt-4 px-6">
          <p>£25.00 GBP</p>
          <button>BUY ENTRY NOW</button>
        </div>
        <p className="text-end text-[5px] 2xl:text-[7px] px-5">#ZM7861234567</p>
      </div>
    </div>
  );
};

export default Card;
