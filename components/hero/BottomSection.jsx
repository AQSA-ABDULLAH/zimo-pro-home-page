import React from "react";

function BottomSection() {
  return (
    <div>
      {/* Content Section */}
      <div className="absolute bottom-6 px-8 2xl:px-20 w-full flex items-end justify-between">
        <div className="flex-shrink-0">
          <img src="/assets/g12.png" alt="logo" className="max-2xl:mb-1 md:max-2xl:h-14" />
        </div>
        <div className="flex flex-col items-center gap-3 tracking-wider">
          <div className="tracking-widest text-[16px] 2xl:text-[24px]">£5,000,000 GBP</div>
          <div className="text-center text-[14px] 2xl:text-[22px] flex gap-5 2xl:gap-8">
            <p>SHELTON STREET</p>
            <p>CONVENT GARDEN</p>
            <p>LONDON</p>
            <p>WC2H 9JQ</p>
            <p>UNITED KINGDOM</p>
          </div>
        </div>
        <div>
          <div>
            <img src="/assets/Ces-Logo.png" alt="" className="md:h-8 2xl:h-12" />
          </div>
          <div className="flex gap-6 items-end text-[14px] 2xl:text-[22px] mt-10 2xl:mt-14 tracking-wider">
            <p>£25.00 GBP</p>
            <p className="cursor-pointer">BUY ENTRY NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
