import { playfairDisplay } from "@/utils/fonts";
import React from "react";

const LandingHome = () => {
  return (
    <div className="fixed top-[28px] left-0 w-full h-screen flex flex-col items-center justify-center z-0  ">
      <div className="flex flex-row items-center justify-between  px-8   h-auto overflow-hidden  ">
        <div className="flex flex-col items-start w-6/12" data-aos="fade-left">
          <h1
            className={`font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] leading-[30px] sm:leading-[30px] md:leading-[40px] lg:leading-[60px] xl:leading-[70px] 2xl:leading-[80px] ${playfairDisplay.className} uppercase`}
          >
            Experience
            <br /> Cinema Like
            <br /> Never Before.
          </h1>

          <p
            className={`mt-4 text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[28px] ${playfairDisplay.className}`}
          >
            Welcome to Locomotive, where we’re reshaping Middle Eastern cinema.
            Our debut action film, available in theaters and online, brings you
            unmatched quality and storytelling that immerses you in a world that
            feels as real as life itself.
          </p>
        </div>
        <img
          data-aos="fade-right"
          className="w-4/12 h-auto  "
          src="/assets/landingSection-side-image.png"
          alt="landing side image"
        />
      </div>
      <div
        className="  flex flex-row items-center justify-center w-full "
        data-aos="flip-up"
      >
        <h2
          className={` ${playfairDisplay.className} text-center text-[16px]  lg:text-[28px] xl:text-[32px] 2xl:text-[36px]`}
        >
          Action, Authenticity and Innovation
        </h2>
      </div>
    </div>
  );
};

export default LandingHome;
