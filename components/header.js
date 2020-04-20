import React, { useState } from "react";
import Link from "next/link";

import { FiHeart } from "react-icons/fi";
import Logo from "../assets/images/brand/mask.svg";

const NavLink = ({ href, title, end }) => (
  <Link href={href}>
    <a
      className={`trans block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-dark ${
        end || false ? "" : "mr-4"
      }`}
    >
      {title}
    </a>
  </Link>
);

const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <header
      id="header"
      className="flex items-center justify-between flex-wrap p-8 container mx-auto"
    >
      <div className="flex-shrink-0 mr-8">
        <Link href="/">
          <a className="flex items-center font-bold text-2xl tracking-tight">
            <img src={Logo} alt="Logo" className="h-12 mr-4" />
            <span>Project YCRO</span>
          </a>
        </Link>
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
        } `}
      >
        <div className="text-lg lg:flex-grow">
          <NavLink href="/about" title="About" />
          <NavLink href="/contact" title="Contact" />
          <a
            className="inline-block cursor-pointer md:ml-2"
            href="https://www.gofundme.com/f/projectycro"
            target="_blank"
          >
            <div className="trans bg-accent hover:bg-red-700 text-light px-4 py-2 md:mt-0 mt-4 rounded flex items-center">
              <FiHeart />
              <span className="ml-2">Donate</span>
            </div>
          </a>
        </div>
        <div className="text-lg">
          <NavLink href="/ppe-request" title="Request PPE" />
          <NavLink href="/ppe-donate" title="Donate PPE" end={true} />
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
