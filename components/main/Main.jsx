import React from "react";
import Card from "./card/Card";

function Main() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Featured</h1>
        <p className="text-gray-600">View All Homes</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
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