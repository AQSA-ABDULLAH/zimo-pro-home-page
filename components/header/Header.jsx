import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-white p-6">
      <div className="flex items-center gap-6">
        <img src="/assets/Group 3055.png" alt="Zima Logo" className="h-8" />
        <img src="/assets/Group 3385.png" alt="Zima Logo" className="h-8" />
      </div>
      <div>
        <img src="/assets/Group 3005.png" />
      </div>
      <div className="flex items-center gap-4">
        <a href="#login" className="hidden md:block hover:underline">
          Just For You
        </a>
        <img src="/assets/Group 3035.png" alt="UK Flag" className="h-6" />
        <div className="flex gap-8">
          <img src="/assets/Path 7680.png" alt="glob" className="h-6" />
          <img src="/assets/Path 7582.png" alt="bag" className="h-6" />
          <img src="/assets/Group 2867.png" alt="user" className="h-6" />
        </div>
      </div>
    </header>
  );
}
