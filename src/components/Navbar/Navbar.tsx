// "use client";
// import { jomolhari } from "@/utils/fonts";
// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 w-full  ">
//       <div className=" px-8 w-full relative flex flex-row items-center justify-center py-4 border-b-black border-b-[1px] z-0">
//         <div className="absolute left-8 flex flex-row items-center ">
//           <img
//             className="h-12 w-auto drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]"
//             src="/assets/logo-nav.png"
//             alt="logo"
//           />
//         </div>
//         <div
//           className={`font-text-[14px] flex flex-row items-center justify-evenly w-5/12 ${jomolhari.className}`}
//         >
//           <Link
//             href={"/"}
//             className="relative group text-gray-800 hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
//           >
//             Home
//             <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//           <Link
//             href={"/"}
//             className="relative group text-gray-800 hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
//           >
//             About
//             <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//           <Link
//             href={"/"}
//             className="relative group text-gray-800 hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
//           >
//             Films
//             <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//           <Link
//             href={"/"}
//             className="relative group text-gray-800 hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
//           >
//             Contact Us
//             <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import { jomolhari } from "@/utils/fonts";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 w-full z-50 bg-white`}>
      <div
        className={`px-8 w-full relative flex flex-row items-center md:justify-center justify-between py-4 border-b-black border-b-[0.5px] z-0`}
      >
        <div className=" flex flex-row items-center ">
          <img
            className="absolute left-8 h-12 w-auto drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]"
            src="/assets/logo-nav.png"
            alt="logo"
          />
        </div>
        <div
          className={`font-text-[14px] hidden md:flex flex-row items-center justify-evenly w-5/12 ${jomolhari.className}`}
        >
          <Link
            href={"/"}
            className="relative group text-gray-800 hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
          >
            Home
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"/"}
            className="relative group text-gray-800 hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
          >
            About
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"/"}
            className="relative group text-gray-800 hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
          >
            Films
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"/"}
            className="relative group text-gray-800 hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
          >
            Contact Us
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <div className="md:hidden  flex items-center mr-4">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-90 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-row items-center w-full justify-end px-8 py-4">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
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
          {["Home", "About", "Films", "Contact Us"].map((link, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
