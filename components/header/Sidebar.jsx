import React from "react";

function Sidebar({ toggleSidebar }) {
  return (
    <div className="fixed top-0 left-0 w-[300px] h-full bg-black text-white z-10 opacity-85 overflow-y-auto scrollbar-hidden">
      <div className="flex m-6 px-2 gap-6 items-center">
        <img src="/assets/Group 3058.png" alt="logo" onClick={toggleSidebar} />
        <h3 className="text-[22px]">WELCOME</h3>
      </div>
      <div className="p-8">
        <ul className="space-y-9 text-[22px] uppercase">
          <li>Real Estate</li>
          <li>Private Islands</li>
          <li>Yachts</li>
          <li>Jets</li>
          <li>Cars</li>
          <li>Watches</li>
          <li>Diamonds</li>
          <li>Travel the World</li>
        </ul>
      </div>

      <img src="/assets/Line 93.png" alt="line" className="px-6" />

      <div className="p-8">
        <ul className="space-y-9 text-[22px] uppercase">
          <li>Account</li>
          <li>Shopping Bag</li>
          <li>Helps & Support</li>
          <li>About</li>
          <li>Contact</li>
          <li>English / GBP</li>
          <li>Diamonds</li>
          <li>Travel the World</li>
        </ul>
      </div>

      <img src="/assets/Line 93.png" alt="line" className="px-6" />

      <img src="/assets/Group 3122.png" alt="zimo pro logo" className="px-6 my-8" />
    </div>
  );
}

export default Sidebar;
