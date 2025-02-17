"use client";
import { playfairDisplay } from "@/utils/fonts";
import React from "react";

const LandingAbout = () => {
  return (
    <div className="  fixed   left-0 w-full sm:h-[100vh] h-[70vh]    flex flex-col items-center justify-center   z-0  ">
      <div className="  flex flex-col items-center justify-between w-full sm:pt-24 bg-[#E5E1D0]">
        <div className="grid grid-cols-3 md:grid-cols-4   w-full sm:h-[100vh] h-[70vh]">
          {/* Left section */}
          <div className=" pb-4 px-8 lg:px-16  xl:px-24  flex flex-col items-start justify-end w-full col-span-2 md:col-span-3 border border-black sm:h-[20vh] h-[20vh]">
            <h1
              className={`font-semibold text-[7vw] lg:text-[5vw] leading-[5vw] ${playfairDisplay.className} uppercase`}
            >
              ABOUT US
            </h1>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-start w-full col-span-1 border border-black  sm:h-[20vh] h-[20vh]"></div>

          {/* Left section again */}
          <div className="p-2 md:px-4 lg:px-16  xl:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between w-full  col-span-2 md:col-span-3 border border-black  sm:h-[80vh] h-[50vh]">
            <img
              className="w-10/12 md:w-4/12 h-[20vh] md:h-2/3 object-cover"
              src="/assets/About-landing-1.png"
            />
            <img
              className="mt-4 md:mt-0 w-10/12 md:w-7/12 h-[20vh] md:h-2/3 object-cover"
              src="/assets/About-landing-2.png"
            />
          </div>

          {/* Right section again */}
          <div className="p-2 sm:px-4 flex flex-row items-center w-full col-span-1 border border-black  sm:h-[80vh] h-[50vh]">
            <div className="flex flex-col items-start sm:justify-start  justify-center h-[50vh] sm:h-2/3 ">
              <h1
                className={`w-1/2 sm:w-full font-semibold text-[4vw] sm:text-[2vw] leading-[5vw] ${playfairDisplay.className} uppercase text-[#EFA300]`}
              >
                At Locomotive
              </h1>
              <p className="w-full text-[3vw] sm:w-7/12 leading-[5vw] sm:leading-[3vw]">
                We Believe That Great Stories Have The Power To Move People
              </p>
              <p className="w-full text-[3vw] sm:w-7/12 leading-[5vw] sm:leading-[3vw] mt-8">
                Challenge Perspectives And Connect Us All
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-evenly lg:justify-between  px-8 lg:px-24  xl:px-32   h-auto overflow-hidden  pt-8  ">  */}
      {/* <div className="  flex flex-col items-center justify-end w-full mt-8 sm:mt-4 2xl:mt-8 xl:mt-2">
        <h2
          className={` ${playfairDisplay.className} text-center text-[4vw] sm:text-[2vw]`}
        >
          Action, Authenticity and Innovation
        </h2>
      </div> */}
    </div>
  );
};

export default LandingAbout;
