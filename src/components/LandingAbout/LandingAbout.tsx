"use client";
import { playfairDisplay } from "@/utils/fonts";
import React from "react";

const LandingAbout = () => {
  return (
    <div className=" text-white fixed   left-0 w-full sm:h-[100vh] h-[70vh]    flex flex-col items-center justify-center   z-0  ">
      <div className="flex flex-col items-center justify-between w-full sm:pt-24 bg-gradient-to-b from-black via-black to-[#FFBF35]">
        <div className="grid grid-cols-3 md:grid-cols-4   w-full sm:h-[100vh] h-[70vh]">
          <div className="relative pb-4 px-8 lg:px-16 xl:px-24 flex flex-col items-start justify-end w-full col-span-2 md:col-span-3 border-l-0 sm:h-[20vh] h-[20vh] border-gradient-l-to-r">
            <h1
              className={`font-semibold text-[7vw] lg:text-[5vw] leading-[5vw] ${playfairDisplay.className} uppercase`}
            >
              ABOUT US
            </h1>
          </div>

          <div className="relative flex flex-col items-start w-full col-span-1  sm:h-[20vh] h-[20vh]  border-gradient-r-to-l border-r-0 "></div>

          <div className="overflow-hidden p-2 md:px-4 lg:px-16  xl:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between w-full  col-span-2 md:col-span-3 border-gradient-t-to-b  sm:h-[80vh] h-[50vh]">
            {/* <img
              className="w-10/12 md:w-4/12 h-[20vh] md:h-2/3 object-cover "
              src="/assets/About-landing-1.png"
            /> */}
            <div
              className=" relative w-10/12 md:w-4/12 h-[20vh] md:h-2/3  bg-black  flex flex-col items-center justify-center"
              data-aos="fade-left"
            >
              <img
                src="/assets/About-landing-1.png"
                alt="about image"
                className="w-full  h-full  object-cover transition-opacity opacity-100 duration-300    z-30"
              />
              <img
                src="/assets/About-landing-1-bw.png"
                alt="about image"
                className="w-full  h-full  object-cover transition-opacity duration-300 absolute     hover:opacity-0  opacity-100 z-40"
              />
            </div>
            <div
              className=" relative mt-4 md:mt-0 w-10/12 md:w-7/12 h-[20vh] md:h-2/3   bg-black  flex flex-col items-center justify-center"
              data-aos="fade-left"
            >
              <img
                src="/assets/About-landing-2.png"
                alt="about image"
                className="w-full  h-full  object-cover transition-opacity opacity-100 duration-300    z-30"
              />
              <img
                src="/assets/About-landing-2-bw.png"
                alt="about image"
                className="w-full  h-full  object-cover transition-opacity duration-300 absolute     hover:opacity-0  opacity-100 z-40"
              />
            </div>
            {/* <img
              className="mt-4 md:mt-0 w-10/12 md:w-7/12 h-[20vh] md:h-2/3 object-cover "
              src="/assets/About-landing-2.png"
            /> */}
          </div>

          <div className="p-2 sm:px-4 flex flex-row items-center w-full col-span-1 border-gradient-t-to-b  sm:h-[80vh] h-[50vh]">
            <div className="flex flex-col items-start sm:justify-start  justify-center h-[50vh] sm:h-2/3 ">
              <h1
                className={`w-1/2 sm:w-full font-semibold text-[4vw] sm:text-[2vw] leading-[5vw] ${playfairDisplay.className} uppercase text-[#EFA300]`}
              >
                At Locomotive
              </h1>
              <p className="text-justify font-light w-full text-[3vw] sm:text-[1.2vw] sm:w-8/12 leading-[5vw] sm:leading-[3vw]">
                We Believe That Great Stories Have The Power To Move People
              </p>
              <p className=" text-justify font-light  w-full text-[3vw] sm:text-[1.2vw] sm:w-8/12 leading-[5vw] sm:leading-[3vw] mt-4">
                Challenge Perspectives And Connect Us All
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
