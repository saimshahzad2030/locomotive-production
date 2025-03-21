import React from "react";

const ContactUsForm = () => {
  return (
    <form className="space-y-3 p-6 border border-white rounded-lg bg-white/10 backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]">
      <div className="flex flex-row items-center w-full justify-between">
        <div className="w-5/12">
          <label className="block text-white text-xs mb-1">First Name</label>
          <input
            type="text"
            className="w-full p-2 bg-white/20 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
        </div>

        <div className="w-5/12">
          <label className="block text-white text-xs mb-1">Last Name</label>
          <input
            type="text"
            className="w-full p-2 bg-white/20 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
        </div>
      </div>

      <div className="flex flex-row items-center w-full justify-between">
        <div className="w-5/12">
          <label className="block text-white text-xs mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 bg-white/20 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
        </div>

        <div className="w-5/12">
          <label className="block text-white text-xs mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full p-2 bg-white/20 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
        </div>
      </div>

      <div>
        <label className="block text-white text-xs mb-1">Subject</label>
        <input
          type="text"
          className="w-full p-2 bg-white/20 text-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        />
      </div>

      <div>
        <textarea
          placeholder="Message..."
          className="w-full p-2 bg-white/20 border border-white text-white placeholder-white rounded-md outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 h-24 resize-none"
        ></textarea>
      </div>

      <div className="flex justify-center mt-4 relative">
        <button className="relative px-6 py-3 text-white font-semibold bg-[#e6a522] rounded-full shadow-lg hover:bg-[#ffbb34] transition-all duration-300">
          SEND NOW
          <span className="absolute inset-0 rounded-full bg-[#ffb41c] blur-lg opacity-50 animate-pulse"></span>
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
