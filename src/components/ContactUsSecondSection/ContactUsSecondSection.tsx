import React from "react";

const ContactUsSecondSection = () => {
  return (
    <div className="flex flex-col items-center w-full bg-black md:h-[100vh]">
      <div className=" relative flex flex-col items-center justify-center w-6/12  md:h-[90vh]">
        {/* Background Image */}
        <img
          src="/assets/contact-us-2.png"
          alt="Background"
          className="absolute w-3/5 md:w-full opacity-50 z-30 top-0"
        />

        {/* Foreground Image */}
        <img
          src="/assets/contact-us-3.png"
          alt="Foreground"
          className="absolute w-2/5 md:w-10/12 z-20 bottom-0  "
        />
        <div className="z-50 absolute right-0 bottom-[-20px] w-36 h-28 border border-white bg-white/10 backdrop-blur-md rounded-3xl"></div>
        <div className="z-10 absolute left-4 top-24 w-36 h-28 border border-white bg-white/10 backdrop-blur-md rounded-3xl"></div>
      </div>
    </div>
  );
};

export default ContactUsSecondSection;
