import React from "react";

function BottomSection() {
  return (
    <div>
      {/* Content Section */}
      <div className="absolute bottom-6 w-full flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src="/assets/g12.png" alt="logo" className="h-12" />
        </div>
        <div className="text-center">
          <p>SHELTON STREET</p>
          <p>CONVENT GARDEN</p>
          <p>LONDON</p>
          <p>WC2H 9JQ</p>
          <p>UNITED KINGDOM</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">£25.00 GBP</p>
          <p className="underline font-bold cursor-pointer">BUY ENTRY NOW</p>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
