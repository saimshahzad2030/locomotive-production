import { playfairDisplay } from "@/utils/fonts";
import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactUsLanding = () => {
  return (
    <div
      className={`border border-r-0 border-b-white border-t-0 border-l-0 relative w-full flex flex-col md:flex-row items-center md:h-[100vh] justify-between bg-black ${playfairDisplay.className}`}
    >
      {/* Background Image */}
      <img
        src="/assets/contact-us-2.png" // Replace with your image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className=" border border-r-white  border-t-0 border-l-0 relative w-full md:w-6/12 flex flex-col items-center justify-center sm:h-[100vh] bg-white/10 backdrop-blur-lg  p-8">
        <img className="w-32 h-auto" src="/assets/logo-nav.png" alt="logo" />
        <h1 className="text-white text-6xl font-bold">CONTACT US</h1>
      </div>

      <div className="relative w-full md:w-6/12 flex flex-col items-center justify-center md:h-[100vh] md:pt-12">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsLanding;
