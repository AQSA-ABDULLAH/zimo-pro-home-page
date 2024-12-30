import React from "react";

function BottomSection() {
  return (
    <div>
      {/* Content Section */}
      <div className="absolute bottom-6 px-6 w-full flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src="/assets/g12.png" alt="logo" className="h-12" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-[20px]">£5,000,000 GBP</div>
          <div className="text-center flex gap-4 2xl:text-[20px]">
            <p>SHELTON STREET</p>
            <p>CONVENT GARDEN</p>
            <p>LONDON</p>
            <p>WC2H 9JQ</p>
            <p>UNITED KINGDOM</p>
          </div>
        </div>
        <div className="flex gap-4 text-[20px]">
          <p className="text-lg">£25.00 GBP</p>
          <p className="cursor-pointer">BUY ENTRY NOW</p>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
