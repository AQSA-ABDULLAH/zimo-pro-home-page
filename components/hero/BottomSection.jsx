import React from "react";

function BottomSection() {
  return (
    <div>
      {/* Content Section */}
      <div className="absolute bottom-6 px-10 w-full flex items-end justify-between">
        <div className="flex-shrink-0">
          <img src="/assets/g12.png" alt="logo" className="md:max-2xl:h-16" />
        </div>
        <div className="flex flex-col items-center gap-3 2xl:text-[22px]">
          <div>£5,000,000 GBP</div>
          <div className="text-center flex gap-8">
            <p>SHELTON STREET</p>
            <p>CONVENT GARDEN</p>
            <p>LONDON</p>
            <p>WC2H 9JQ</p>
            <p>UNITED KINGDOM</p>
          </div>
        </div>
        <div>
          <div>
            <img src="/assets/Ces-Logo.png" alt="" className="md:max-2xl:h-8 2xl:h-11" />
          </div>
          <div className="flex gap-6 items-end 2xl:text-[22px] mt-14">
            <p>£25.00 GBP</p>
            <p className="cursor-pointer">BUY ENTRY NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
