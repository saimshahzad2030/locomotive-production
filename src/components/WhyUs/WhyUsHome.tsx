"use client";
import { gabirato, lexend, playfairDisplay } from "@/utils/fonts";
import React from "react";

const WhyUsHome = () => {
  return (
    <div
      className=" flex flex-col items-center justify-between w-full min-h-[50vh] sm:min-h-[40vh] md:h-[80vh] bg-cover bg-center lg:p-8 py-6 mt-8 transition-all duration-500 ease-in-out bg-[url('/assets/WhyUsHomeBg-bw.png')] hover:bg-[url('/assets/WhyUsHomeBg-clr.png')]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex flex-col items-start w-full px-4 lg:p-0"
        data-aos="fade-up"
      >
        <h1
          className={`w-11/12 sm:w-9/12 lg:w-7/12 text-[36px] sm:text-[60px] lg:text-[80px] text-start ${playfairDisplay.className} text-white font-bold leading-[30px] sm:leading-[55px] lg:leading-[80px]`}
        >
          Experience the Revolution in Cinema
        </h1>
      </div>
      <div className="flex flex-col items-center w-full" data-aos="fade-up">
        <button
          className={`bg-white text-black rounded-lg p-2 ${lexend.className}`}
        >
          WATCH NOW
        </button>
        <p
          className={`text-[10px] sm:text-[20px] bg-black bg-opacity-40 sm:bg-transparent sm:bg-none w-full mt-4 text-center text-white ${gabirato.className} sm:px-12`}
        >
          Ready for an unforgettable cinematic journey? Watch the trailer for
          our debut action film now and get a taste of what’s to come. Join us
          in breaking new ground in Middle Eastern cinema—where every story is a
          step toward something greater. (attach link for trailer)
        </p>
      </div>
    </div>
  );
};

export default WhyUsHome;
