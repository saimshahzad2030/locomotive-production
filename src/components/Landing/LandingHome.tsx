"use client";
import { playfairDisplay } from "@/utils/fonts";
import React from "react";

const LandingHome = () => {
  return (
    <div className="fixed   left-0 w-full sm:h-[100vh] h-[50vh]    flex flex-col items-center justify-center   z-0  ">
      <div className="flex flex-row items-center justify-evenly lg:justify-between  px-8  xl:px-20   h-auto overflow-hidden  pt-8  ">
        <div
          className="flex flex-col items-start w-7/12 sm:w-6/12"
          data-aos="fade-left"
        >
          <h1
            className={`font-semibold 
               text-[22px] xs:text-[32px] sm:text-[45px] md:text-[60px] lg:text-[80px] xl:text-[70px] 2xl:text-[100px] 3xl:text-[120px] 4xl:text-[140px] 5xl:text-[160px]
               leading-[22px] xs:leading-[32px] sm:leading-[45px] md:leading-[60px] lg:leading-[80px] xl:leading-[70px] 2xl:leading-[100px] 3xl:leading-[110px] 4xl:leading-[130px] 5xl:leading-[150px] 
               ${playfairDisplay.className} uppercase`}
          >
            Experience
            <br /> Cinema Like
            <br /> Never Before.
          </h1>

          <p
            className={`mt-4 text-[9px] xs:text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[36px]  5xl:text-[40px]  6xl:text-[48px] ${playfairDisplay.className}`}
          >
            Welcome to Locomotive, where we’re reshaping Middle Eastern cinema.
            Our debut action film, available in theaters and online, brings you
            unmatched quality and storytelling that immerses you in a world that
            feels as real as life itself.
          </p>
        </div>
        <img
          data-aos="fade-right"
          className="w-4/12    h-auto  "
          src="/assets/landingSection-side-image.png"
          alt="landing side image"
        />
      </div>
      <div className="  flex flex-col items-center justify-end w-full mt-8 sm:mt-4 2xl:mt-8 xl:mt-2">
        <h2
          className={` ${playfairDisplay.className} text-center text-[16px]  lg:text-[28px] xl:text-[28px] 2xl:text-[36px]`}
        >
          Action, Authenticity and Innovation
        </h2>
        {/* <div className="hidden sm:block bg-black lg:h-2 2xl:h-16 w-full"></div> */}
      </div>
    </div>
  );
};

export default LandingHome;
