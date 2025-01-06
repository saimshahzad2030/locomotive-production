import { gabirato, lexend, playfairDisplay } from "@/utils/fonts";
import React from "react";

const WhyUsHome = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] w-full px-8 absolute top-[400vh] bg-black">
      <div
        style={{ backgroundImage: "url(/assets/WhyUsHomeBg.png)" }}
        className="flex flex-col items-center justify-between w-full h-[100vh] bg-cover bg-center p-4 "
      >
        <div className="flex flex-col items-start w-full">
          <h1
            className={`w-7/12 text-[80px] text-start ${playfairDisplay.className} text-white font-bold leading-[80px]`}
          >
            Experience the Revolution in Cinema
          </h1>
        </div>
        <div className="flex flex-col items-center w-full px-12">
          <button
            className={`bg-white text-black rounded-lg p-2 ${lexend.className}`}
          >
            WATCH NOW
          </button>
          <p className={`mt-4 text-center text-white ${gabirato.className}`}>
            Ready for an unforgettable cinematic journey? Watch the trailer for
            our debut action film now and get a taste of what’s to come. Join us
            in breaking new ground in Middle Eastern cinema—where every story is
            a step toward something greater. (attach link for trailer)
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsHome;
