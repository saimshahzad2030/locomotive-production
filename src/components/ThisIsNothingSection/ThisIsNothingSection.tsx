// "use client";
// import { playfairDisplay } from "@/utils/fonts";
// import React from "react";

// const ThisIsNothingSection = () => {
//   return (
//     <div className="fixed   left-0 w-full  h-[100vh]    flex flex-col items-center justify-center   z-50   ">
//       <div className="flex flex-col items-center justify-end lg:justify-between   h-auto overflow-hidden  pt-8  w-full">
//         <div className="w-full flex flex-row items-center justify-end">
//           <p>sdads</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThisIsNothingSection;
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ThisIsNothingSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-0 w-full h-screen flex flex-col items-center justify-center z-40">
      <div className="flex flex-col items-center justify-end lg:justify-between h-auto   pt-8 w-full">
        {/* Animated Arrow Button */}
        <div className="relative w-full flex flex-row items-center justify-end">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-[-100] bg-black bg-opacity-20  backdrop-blur-md border border-white/20 text-white h-12 w-24 rounded-full  flex flex-row items-center justify-start pl-4"
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19L12.7071 12.7071C12.3166 12.3166 12.3166 11.6834 12.7071 11.2929L19 5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 19L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L11 5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </motion.span>
          </motion.button>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
            exit={{ x: "100%", opacity: 0 }} // Ensures a smooth exit animation
            transition={{ type: "spring", stiffness: 100, damping: 40 }}
            className={`fixed z-50 right-0  transform -translate-y-1/2 bg-black bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg p-6 flex flex-col items-center justify-center w-72 h-auto transition-all`}
          >
            <div className="flex flex-row items-center justify-end w-full">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-800 rounded-full transition"
              >
                <svg
                  className="w-4 h-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 5L11.7929 11.2929C12.1834 11.6834 12.1834 12.3166 11.7929 12.7071L5.5 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 5L19.7929 11.2929C20.1834 11.6834 20.1834 12.3166 19.7929 12.7071L13.5 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <img
              src="/assets/logo-movie.png"
              alt="Movie Logo"
              className="w-6/12 h-auto mb-4"
            />
            <p className="text-center text-gray-300 text-sm">
              {/* The search of Amir begins after his sudden disappearance following
              a daring heist, leaving his lifelong companion Omar grappling with
              guilt and confusion. A malicious private detective looms overhead,
              revealing soul-shifting events, fueling Omar’s relentless quest
              for vengeance against those responsible. */}
              Our Upcoming Thrilling movie film, featuring blasting cast
            </p>
            <Link
              href={"https://thisisnothing.vercel.app/"}
              className="p-2     hover:scale-105   rounded-md mt-2 transition   text-white underline "
            >
              Visit Site
            </Link>
          </motion.div>
        </div>

        {/* Animated Pop-up from the Right */}
      </div>
    </div>
  );
};

export default ThisIsNothingSection;
