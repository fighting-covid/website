import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <header
      id="header"
      className="flex items-center justify-between flex-wrap p-8 container mx-auto"
    >
      <div className="flex items-center flex-shrink-0 mr-8">
        <span className="font-bold text-2xl tracking-tight">Project YCRO</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setActive(!isActive)}
          className={`hamburger hamburger--3dxy ${isActive ? "is-active" : ""}`}
          aria-label="Menu"
          aria-controls="navigation"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <nav
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          isActive ? "block" : "hidden"
        }`}
      >
        <div className="text-lg lg:flex-grow">
          <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-dark mr-4">
            <Link href="/home">Home</Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-dark">
            <Link href="/about">About</Link>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .hamburger-inner,
        .hamburger-inner::after,
        .hamburger-inner::before {
          height: 3px;
        }
      `}</style>
    </header>
  );
};

export default Header;
