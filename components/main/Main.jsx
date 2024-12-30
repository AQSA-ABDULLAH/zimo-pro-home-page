"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Card from "./card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick to ensure it runs only on the client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Main() {
  const sliderRef1 = useRef(null); // Ref for the first slider
  const sliderRef2 = useRef(null); // Ref for the second slider

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false, // Disable default arrows
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

  const handlePrev = () => {
    if (sliderRef1.current) sliderRef1.current.slickPrev(); // Move first slider
    if (sliderRef2.current) sliderRef2.current.slickPrev(); // Move second slider
  };

  const handleNext = () => {
    if (sliderRef1.current) sliderRef1.current.slickNext(); // Move first slider
    if (sliderRef2.current) sliderRef2.current.slickNext(); // Move second slider
  };

  return (
    <div className="flex justify-center ml-16">
      <div className="w-full max-w-[1800px]">
        {/* Header Section */}
        <div className="flex justify-between items-center py-10 px-8 mr-20">
          <h1 className="text-2xl uppercase">Featured</h1>
          <p className="uppercase text-[30px]">View All Homes</p>
          <div className="flex gap-3">
            {/* Custom Arrows */}
            <img
              src="/assets/Group 3100.png"
              alt="Previous"
              className="cursor-pointer"
              onClick={handlePrev} // Trigger previous slide
            />
            <img
              src="/assets/Group 3094.png"
              alt="Next"
              className="cursor-pointer"
              onClick={handleNext} // Trigger next slide
            />
          </div>
        </div>

        {/* First Slider Section */}
        <div className="mx-auto">
          <Slider ref={sliderRef1} {...settings}>
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div className="px-8" key={index}>
                  <Card />
                </div>
              ))}
          </Slider>
        </div>

        {/* Second Slider Section */}
        <div className="mx-auto mt-12">
          <Slider ref={sliderRef2} {...settings}>
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div className="px-8" key={index}>
                  <Card />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Main;





