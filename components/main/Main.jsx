import React from "react";
import Card from "./card/Card";

function Main() {
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-4">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
}

export default Main;
