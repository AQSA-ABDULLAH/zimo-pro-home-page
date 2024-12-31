import React from "react";

function BottomSection() {
  return (
    <div>
      {/* Content Section */}
      <div className="absolute bottom-6 px-4 md:px-8 2xl:px-20 w-full flex flex-col gap-6 md:flex-row items-center md:items-end justify-between">
        <div className="flex-shrink-0">
          <img
            src="/assets/g12.png"
            alt="logo"
            className="md:max-2xl:mb-1 max-2xl:h-14"
          />
        </div>
        <div className="flex flex-col items-center gap-2 md:gap-3 tracking-wider">
          <div className="tracking-widest text-[12px] md:text-[16px] 2xl:text-[24px]">
            £5,000,000 GBP
          </div>
          <div className="text-center text-[8px] md:text-[14px] 2xl:text-[22px] flex gap-2 md:gap-5 2xl:gap-8">
            <p>SHELTON STREET</p>
            <p>CONVENT GARDEN</p>
            <p>LONDON</p>
            <p>WC2H 9JQ</p>
            <p>UNITED KINGDOM</p>
          </div>
        </div>
        <div> 
          <img
            src="/assets/Ces-Logo.png"
            alt=""
            className="h-6 md:h-8 2xl:h-12"
          />
          <div className="flex gap-4 md:gap-6 items-end text-[11px] md:text-[14px] 2xl:text-[22px] mt-3 md:mt-10 2xl:mt-14 tracking-wider">
            <p>£25.00 GBP</p>
            <p className="cursor-pointer">BUY ENTRY NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
