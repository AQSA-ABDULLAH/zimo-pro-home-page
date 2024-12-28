import React from "react";

function NewsletterSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start px-8 py-12 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Weekly Newsletter</h2>
        <p className="text-gray-700">
          Receive the beautifully curated selection of the latest listings from
          around the world and find out what's trending.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-start">
        <label htmlFor="email" className="text-sm font-bold mb-2">
          EMAIL ADDRESS
        </label>
        <input
          id="email"
          type="email"
          placeholder="EMAIL ADDRESS"
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button className="w-full md:w-2/3 bg-black text-white px-4 py-2 rounded-md">
          SUBSCRIBE
        </button>
        <p className="text-xs text-gray-500 mt-4">
          BY SHARING YOUR EMAIL, YOU ARE CONFIRMING THAT YOU AGREE TO OUR{" "}
          <span className="font-bold underline">TERMS AND CONDITIONS</span> AND{" "}
          <span className="font-bold underline">PRIVACY POLICY</span>.
        </p>
      </div>
    </div>
  );
}

export default NewsletterSection;
