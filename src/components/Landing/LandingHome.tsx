 
"use client";
import { playfairDisplay } from "@/utils/fonts";
import React from "react";

const LandingHome = () => {
  return (
    <div className="fixed   left-0 w-full sm:h-[100vh] h-[70vh]    flex flex-col items-center justify-center   z-0  ">
      <div className="flex flex-row items-center justify-evenly lg:justify-between  px-8 lg:px-24  xl:px-32   h-auto overflow-hidden  pt-8  ">
        <div
          className="flex flex-col items-start w-7/12 sm:w-6/12"
          data-aos="fade-left"
        >
          <h1
            className={`font-semibold 
               text-[5vw]
               leading-[5vw]
              ${playfairDisplay.className} uppercase`}
          >
            Experience
            <br /> Cinema Like
            <br /> Never Before.
          </h1>

          <p
            className={`mt-4 w-11/12  text-[2vw] sm:text-[1.7vw]
               sm:leading-[1.9vw] ${playfairDisplay.className}`}
          >
            Welcome to Locomotive, where we’re reshaping Middle Eastern cinema.
            Our debut action film, available in theaters and online, brings you
            unmatched quality and storytelling that immerses you in a world that
            feels as real as life itself.
          </p>
        </div>
        <img
          data-aos="fade-right"
          className="w-5/12 sm:w-4/12    h-auto  "
          src="/assets/landingSection-side-image.png"
          alt="landing side image"
        />
      </div>
      <div className="  flex flex-col items-center justify-end w-full mt-8 sm:mt-4 2xl:mt-8 xl:mt-2">
        <h2
          className={` ${playfairDisplay.className} text-center text-[4vw] sm:text-[2vw]`}
        >
          Action, Authenticity and Innovation
        </h2>
      </div>
    </div>
  );
};

export default LandingHome;
