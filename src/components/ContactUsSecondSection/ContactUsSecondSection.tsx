import React from "react";

const ContactUsSecondSection = () => {
  return (
    <div className="flex flex-col items-center w-full bg-black md:h-[100vh]">
      <div className=" relative flex flex-col items-center justify-center w-11/12 sm:w-9/12 md:w-6/12 h-[40vh] sm:h-[80vh] md:h-[90vh]">
        {/* Background Image */}
        <img
          src="/assets/contact-us-2.png"
          alt="Background"
          className="absolute  w-full sm:w-3/5 md:w-full opacity-50 z-30 top-0"
        />

        {/* Foreground Image */}
        <img
          data-aos="flip-left"
          src="/assets/contact-us-3.png"
          alt="Foreground"
          className="absolute w-11/12 sm:w-2/5 md:w-10/12 z-20 bottom-0  "
        />
        <div
          data-aos="fade-left"
          className="z-30 absolute right-0 bottom-[-20px] w-32  sm:w-40 md:w-56 lg:w-64 h-24 sm:h-20 md:h-24 lg:h-28 border border-white bg-white/10 backdrop-blur-md rounded-3xl"
        ></div>
        <div
          data-aos="fade-right"
          className="z-10 absolute left-0 sm:left-4  top-24 w-32  sm:w-40 md:w-56 lg:w-64 h-24 sm:h-20 md:h-24 lg:h-28 border border-white bg-white/10 backdrop-blur-md rounded-3xl"
        ></div>
      </div>
      <div className="h-20  bg-gradient-to-b from-black   to-gray-900 w-full mt-12"></div>
    </div>
  );
};

export default ContactUsSecondSection;
