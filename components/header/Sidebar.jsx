import React, { useEffect, useRef } from "react";

function Sidebar({ toggleSidebar, isSidebarOpen }) {
  const sidebarRef = useRef(null); // To reference the sidebar element

  useEffect(() => {
    // Function to handle clicks outside the sidebar
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(); // Close the sidebar
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup listener on component unmount or when sidebar closes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <div
      ref={sidebarRef} // Attach the ref to the sidebar div
      className={`fixed top-0 left-0 w-[300px] md:w-[400px] h-full bg-black text-white z-10 opacity-85 overflow-y-auto scrollbar-hidden transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
    >
      <div className="flex m-6 px-2 gap-6 items-center">
        <img src="/assets/Group 3058.png" alt="logo" onClick={toggleSidebar} className="max-md:w-6" />
        <h3 className="text-[18px] md:text-[22px]">WELCOME</h3>
      </div>

      <img src="/assets/Line 93.png" alt="line" className="px-6" />
      
      <div className="p-8">
        <ul className="space-y-9 text-[16px] md:text-[22px] uppercase">
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
        <ul className="space-y-9 text-[16px] md:text-[22px] uppercase">
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

      <img src="/assets/Group 3122.png" alt="zimo pro logo" className="px-6 my-8 max-md:h-12" />
    </div>
  );
}

export default Sidebar;
