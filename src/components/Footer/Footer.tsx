"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="  flex flex-col items-center justify-center px-8 bg-black absolute top-[500vh] w-full border-t-[1px]">
      <div className="flex flex-row items-center justify-evenly w-full py-4 text-white">
        <div className="w-3/12">
          <p>Legal and copyright info</p>
        </div>
        <div className="uppercase">
          <Link
            href={"/"}
            className="mr-4 relative group text-white hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
          >
            Contact
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"/"}
            className="mr-4 relative group text-white hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
          >
            films
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"/"}
            className="mr-4 relative group text-white hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
          >
            About Us
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"/"}
            className="relative group text-white hover:text-[#ffb41c] hover:font-bold transition-all ease-in-out duration-300"
          >
            Social media
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
