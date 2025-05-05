import React from "react";

const ContactUsForm = () => {
  return (
    <div
      data-aos="fade-left"
      className=" w-11/12 md:w-7/12 space-y-3 p-1 border border-white rounded-sm bg-black   md:backdrop-blur-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"
    >
      <form className="bg-white/5 space-y-3 p-6 border border-white rounded-sm bg-black   md:backdrop-blur-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]">
        <h1 className="text-white w-full text-center text-lg md:text-xl lg:text-2xl">Get in Touch</h1>
        <div className="flex flex-row items-center w-full justify-between">
          <div className="w-[47%]">
            <label className="uppercase block text-white text-xs mb-2">Firstname</label>
            <input
              type="text"
              className="text-xs w-full p-2 bg-white/5 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>

          <div className="w-[47%]">
            <label className="uppercase block text-white text-xs mb-2">Lastname</label>
            <input
              type="text"
              className="text-xs w-full p-2 bg-white/5 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full justify-between">
          <div className="w-[47%]">
            <label className="uppercase block text-white text-xs mb-2">Email</label>
            <input
              type="email"
              className="text-xs w-full p-2 bg-white/5 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>

          <div className="w-[47%]">
            <label className="uppercase block text-white text-xs mb-2">
              Phone No.
            </label>
            <input
              type="tel"
              className="text-xs w-full p-2 bg-white/5 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>
        </div>

        <div>
          <label className="uppercase block text-white text-xs mb-2">Subject</label>
          <input
            type="text"
            className="text-xs w-full p-2 bg-white/5 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
        </div>

        <div >
          <textarea
            placeholder="Message..."
            className="text-xs mt-2 w-full p-2 bg-white/5 border border-white text-white placeholder-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 h-24 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center mt-4 relative">
          <button className="border border-white  text-xs relative px-4 py-2 text-white font-semibold bg-[#e6a522] rounded-full shadow-lg hover:bg-transparent hover:border-[#ffbb34] hover:text-[#ffbb34] transition-all duration-300">
            SEND NOW
            <span className="absolute inset-0 rounded-full bg-[#ffb41c] blur-sm opacity-10 "></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
