"use client";
import { jomolhari } from "@/utils/fonts";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(pathname === "/contact-us");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-40 transition-colors duration-500 ${
        isScrolled
          ? "bg-black  bg-opacity-30 backdrop-blur-md"
          : "bg-white bg-opacity-30 backdrop-blur-md"
      }`}
    >
      <div
        className={`px-8 w-full relative flex flex-row items-center md:justify-center justify-between py-4 ${
          isScrolled ? "  border-b-white" : "  border-b-black"
        }   border-b-[0.5px] `}
      >
        <div className="flex flex-row items-center">
          <img
            className="absolute left-8 h-12  4xl:h-16 w-auto drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]"
            src="/assets/logo-nav.png"
            alt="logo"
          />
        </div>
        <div
          className={`text-[14wpx] hidden md:flex flex-row items-center justify-evenly w-5/12 ${jomolhari.className} lg:text-[11px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[25px] 5xl:text-[29px]`}
        >
          <Link
            href={`/`}
            className={`relative group font-bold transition-all ease-in-out duration-300
              ${pathname === "/" && "text-[#ffb41c]"}
              ${pathname === "/about" && "text-white hover:text-[#ffb41c]"} ${
              isScrolled
                ? "text-white hover:text-[#ffb41c]"
                : ` hover:text-[#ffb41c]`
            }`}
          >
            Home
            <span
              className={`
                transition-all duration-300 
                 ${pathname === "/about" && "bg-white group-hover:w-full"}
                ${
                  isScrolled ? "bg-white" : "bg-black "
                } absolute left-0 bottom-[-2px] w-0 h-[2px]  group-hover:w-full`}
            ></span>
          </Link>
          {["About"].map((link, index) => (
            <Link
              key={index}
              href={`/${link.toLowerCase()}`}
              className={`relative group font-bold transition-all ease-in-out duration-300
                 ${
                   pathname === "/about" &&
                   "text-[#ffb41c] hover:text-[#ffb41c]"
                 }
                ${
                  isScrolled
                    ? "text-white hover:text-[#ffb41c]"
                    : ` hover:text-[#ffb41c]`
                }`}
            >
              {link}
              <span
                className={`
                transition-all duration-300 
                 ${pathname === "/about" && "bg-white group-hover:w-full"}
                ${
                  isScrolled ? "bg-white" : "bg-black "
                } absolute left-0 bottom-[-2px] w-0 h-[2px]  group-hover:w-full`}
              ></span>
            </Link>
          ))}
          <Link
            href={`/this-is-nothing`}
            className={`relative group font-bold transition-all ease-in-out duration-300 
              ${pathname === "/this-is-nothing" && "text-[#ffb41c]"}

               ${pathname === "/about" && "text-white hover:text-[#ffb41c]"}
              ${
                isScrolled
                  ? "text-white hover:text-[#ffb41c]"
                  : ` hover:text-[#ffb41c]`
              }`}
          >
            This is Nothing
            <span
              className={`
                transition-all duration-300 
                 ${pathname === "/about" && "bg-white group-hover:w-full"}
                ${
                  isScrolled ? "bg-white" : "bg-black "
                } absolute left-0 bottom-[-2px] w-0 h-[2px]  group-hover:w-full`}
            ></span>
          </Link>
          <Link
            href={`/contact-us`}
            className={`relative group font-bold transition-all ease-in-out duration-300 
               ${pathname === "/about" && "text-white hover:text-[#ffb41c]"}
              ${
                isScrolled
                  ? "text-white hover:text-[#ffb41c]"
                  : ` hover:text-[#ffb41c]`
              }`}
          >
            Contact Us
            <span
              className={`
                transition-all duration-300 
                 ${pathname === "/about" && "bg-white group-hover:w-full"}
                ${
                  isScrolled ? "bg-white" : "bg-black "
                } absolute left-0 bottom-[-2px] w-0 h-[2px]  group-hover:w-full`}
            ></span>
          </Link>
        </div>
        <div className="md:hidden flex items-center mr-4">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              isScrolled ? "text-white" : "text-black"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-90 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-row items-center w-full justify-end px-8 py-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5L5 19M5.00001 5L19 19"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start space-y-8 pt-24 pl-8">
          <Link
            href={`/`}
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-xl font-bold tracking-wide transform -translate-x-10 opacity-0 transition-all duration-500 ease-in-out delay-200 hover:text-[#ffb41c]"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100px)",
              opacity: isMenuOpen ? 1 : 0,
              transitionDelay: `${0 * 100}ms`,
            }}
          >
            Home
          </Link>
          {["About"].map((link, index) => (
            <Link
              key={index}
              href={`/${link.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-xl font-bold tracking-wide transform -translate-x-10 opacity-0 transition-all duration-500 ease-in-out delay-200 hover:text-[#ffb41c]"
              style={{
                transform: isMenuOpen ? "translateX(0)" : "translateX(-100px)",
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {link}
            </Link>
          ))}
          <Link
            href={`/this-is-nothing`}
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-xl font-bold tracking-wide transform -translate-x-10 opacity-0 transition-all duration-500 ease-in-out delay-200 hover:text-[#ffb41c]"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100px)",
              opacity: isMenuOpen ? 1 : 0,
              transitionDelay: `${2 * 100}ms`,
            }}
          >
            This is Nothing
          </Link>
          <Link
            href={`/contact-us`}
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-xl font-bold tracking-wide transform -translate-x-10 opacity-0 transition-all duration-500 ease-in-out delay-200 hover:text-[#ffb41c]"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100px)",
              opacity: isMenuOpen ? 1 : 0,
              transitionDelay: `${3 * 100}ms`,
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
