import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-white p-8">
      <div className="flex w-full">
        {/* First Div */}
        <div className="flex items-center gap-6 flex-1">
          <img src="/assets/Group 3055.png" alt="Zima Logo" />
          <img src="/assets/Group 3385.png" alt="Zima Logo" />
        </div>

        {/* Second Div */}
        <div className="flex justify-center flex-1">
          <img src="/assets/Group 3005.png" alt="Center Logo" />
        </div>

        {/* Third Div */}
        <div className="flex items-center gap-6 justify-end flex-1">
          <div className="flex gap-8">
            <p className="text-[20px] tracking-wide">JUST FOR YOU</p>
            <img src="/assets/Group 3035.png" alt="UK Flag" />
          </div>
          <div className="flex gap-12">
            <img src="/assets/Path 7680.png" alt="glob" />
            <img src="/assets/Path 7582.png" alt="bag" />
            <img src="/assets/Group 2867.png" alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
}
