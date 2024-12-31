import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center text-white px-10 2xl:px-16 pt-14">
        <div className="flex w-full">
          {/* First Div */}
          <div className="flex items-center gap-6 flex-1"> 
            <img
              src="/assets/Group 3055.png"
              alt="Zima Logo"
              onClick={toggleSidebar}
              className="cursor-pointer md:max-2xl:h-9"
            />
            <img src="/assets/Group 3385.png" alt="Zima Logo" className="md:max-2xl:h-9" />
          </div>

          {/* Second Div */}
          <div className="flex justify-center flex-1">
            <img src="/assets/Group 3005.png" alt="Center Logo"  className="md:max-2xl:h-9" />
          </div>

          {/* Third Div */}
          <div className="flex items-center gap-6 justify-end flex-1">
            <div className="flex gap-6 2xl:gap-8">
              <p className="text-[16px] 2xl:text-[20px] tracking-wider">JUST FOR YOU</p>
              <img src="/assets/Group 3035.png" alt="UK Flag" className="md:max-2xl:h-5"/>
            </div>
            <div className="flex gap-8 2xl:gap-12 md:max-2xl:h-4">
              <img src="/assets/Path 7680.png" alt="glob" />
              <img src="/assets/Path 7582.png" alt="bag" />
              <img src="/assets/Group 2867.png" alt="user" />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}



