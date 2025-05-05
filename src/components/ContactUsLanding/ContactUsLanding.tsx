import { playfairDisplay } from "@/utils/fonts";
import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactUsLanding = () => {
  return (
    <div
      className={`mt-14 sm:mt-0 border border-r-0 border-b-white border-t-0 border-l-0 relative w-full flex flex-col md:flex-row items-center md:h-[100vh] justify-between bg-black`}
    >
      {/* Background Image */}
      <img
        src="/assets/contact-us-bg.png"
        alt="Background"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full object-contain opacity-40"
      />

      <div
        data-aos="fade-right"
        className="  h-[50vh] border border-r-white border-t-0 border-l-0 relative w-full md:w-6/12 flex flex-col items-center justify-center sm:h-[100vh] bg-white/0 backdrop-blur-xl p-8 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"
      >
        <img className="w-32 h-auto" src="/assets/logo-nav.png" alt="logo" />
        <h1 className={`text-white text-6xl font-bold text-center   ${playfairDisplay.className}`}>
          CONTACT US
        </h1>
      </div>

      <div className=" overflow-hidden p-8 sm:p-0 relative w-full md:w-6/12 flex flex-col items-center justify-center md:h-[100vh] md:pt-12">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsLanding;
