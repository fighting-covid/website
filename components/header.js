import React, { useState, useCallback } from "react";
import Link from "next/link";
import Logo from "../assets/images/brand/mask.svg";
import { HamburgerSpin } from "react-animated-burgers";
import { AiFillCaretDown } from "react-icons/ai";

const NavLink = ({ href, title, onClick, end }) => (
  <Link href={href}>
    <a
      onClick={onClick}
      className={`trans block mt-4 lg:inline-block lg:mt-0 text-light hover:text-gray-400 ${
        end || false ? "" : "mr-4"
      }`}
    >
      {title}
    </a>
  </Link>
);

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isInvolvedActive, setInvolvedActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );
  return (
    <>
      <div className="h-24 md:h-32"></div>
      <header
        id="header"
        className="flex items-center justify-between flex-wrap p-4 md:p-8 h-24 md:h-32 w-full fixed text-light bg-dark"
        style={{ minHeight: "6rem", zIndex: "999" }}
      >
        <div className="flex-shrink-0 lg:mr-8">
          <Link href="/">
            <a
              onClick={() => {
                setActive(false);
                setInvolvedActive(false);
              }}
              className="flex items-center font-bold text-2xl tracking-tight"
            >
              <img src={Logo} alt="Logo" className="h-12 mr-4" />
              <span style={{ color: "#f5f5f5" }}>Project YCRO</span>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <div>
            <HamburgerSpin
              buttonColor="transparent"
              barColor="#F5F5F5"
              {...{ isActive, toggleButton }}
            />
          </div>
        </div>
        <nav
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isActive
              ? "block absolute inset-0 mt-24 md:mt-32 flex-col"
              : "hidden"
          } `}
        >
          <div
            className={`text-lg lg:flex-grow ${
              isActive ? "bg-light px-4" : ""
            }`}
          ></div>
          <div
            className={`text-lg ${isActive ? "bg-dark p-4 pt-2 -mt-4" : ""}`}
          ></div>
          <div className={`text-lg ${isActive ? "bg-dark p-4 -mt-4" : ""}`}>
            <NavLink
              href="/ppe/request"
              title="Request"
              onClick={() => {
                setActive(false);
                setInvolvedActive(false);
              }}
            />
            <NavLink
              href="/ppe/donate"
              title="Donate"
              onClick={() => {
                setActive(false);
                setInvolvedActive(false);
              }}
            />
            <button
              className={`trans block mt-4 lg:inline-block lg:mt-0 pr-3 pb-2 pt-1 ${
                isInvolvedActive && !isActive ? "rounded-t-md" : "rounded-md"
              } text-light hover:text-gray-400`}
              onClick={() => setInvolvedActive(!isInvolvedActive)}
              style={{ outline: "none" }}
            >
              Make <AiFillCaretDown className="inline" />
            </button>
            <ul
              className={`${
                isInvolvedActive ? "" : "hidden"
              }  bg-dark rounded-b-md ${
                isActive ? "relative" : "absolute p-2 text-center"
              } px-2`}
              style={isActive ? { left: "1.5rem" } : { right: "26.0rem" }}
            >
              <li className="text-accent">
                <span>
                  <NavLink
                    href="/ppe/make/sewing"
                    title="Sewing"
                    onClick={() => {
                      setActive(false);
                      setInvolvedActive(false);
                    }}
                    end={true}
                  />
                </span>
              </li>
              <li
                className={`${
                  isInvolvedActive && !isActive ? "mt-2" : ""
                } text-accent`}
              >
                <span>
                  <NavLink
                    href="/ppe/make/3d"
                    title="3D Printing"
                    onClick={() => {
                      setActive(false);
                      setInvolvedActive(false);
                    }}
                    end={true}
                  />
                </span>
              </li>
              <li
                className={`${
                  isInvolvedActive && !isActive ? "mt-2" : ""
                } text-accent`}
              >
                <span>
                  <NavLink
                    href="/ppe/make/low-tech-ppe"
                    title="Low-Tech PPE"
                    onClick={() => {
                      setActive(false);
                      setInvolvedActive(false);
                    }}
                    end={true}
                  />
                </span>
              </li>
            </ul>
            <NavLink
              href="/newsletter"
              title="Newsletter"
              onClick={() => {
                setActive(false);
                setInvolvedActive(false);
              }}
            />
            <NavLink
              href="/contact"
              title="Contact"
              onClick={() => {
                setActive(false);
                setInvolvedActive(false);
              }}
            />
            <NavLink
              href="/about"
              title="About"
              onClick={() => {
                setActive(false);
                setInvolvedActive(false);
              }}
            />
            <NavLink
              href="/acknowledgments"
              title="Acknowledgments"
              onClick={() => {
                setActive(false);
                setInvolvedActive(false);
              }}
            />
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
    </>
  );
};

export default Header;
