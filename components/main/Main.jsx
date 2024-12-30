"use client";
import React from "react";
import dynamic from "next/dynamic";
import Card from "./card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick to ensure it runs only on the client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Main() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center py-10 px-6">
        <h1 className="text-2xl uppercase">Featured</h1>
        <p className="uppercase text-[30px]">View All Homes</p>
        <div className="flex gap-3">
          <img src="/assets/Group 3100.png" alt="" />
          <img src="/assets/Group 3094.png" alt="" />
        </div>
      </div>

      {/* Slider Section */}
      <div className="mx-auto px-4">
        <Slider {...settings}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <Card />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Main;


