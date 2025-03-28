"use client";
import { lexend } from "@/utils/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const LandingSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetRef = useRef<HTMLDivElement>(null); // Track scrolling

  // Get scroll progress relative to the entire page
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.5]); // Shrinks as you scroll
  const opacity = useTransform(scrollY, [300, 500], [1, 0.3]); // Fades out at 50vh
  useEffect(() => {
    handleOpenDialog();
  }, []);
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleCloseDialog = () => {
    videoRef.current?.pause();
    setIsDialogOpen(false);
  };

  return (
    <div ref={targetRef} className="w-full max-h-[100vh] relative">
      {/* Background Video */}
      <div className="fixed inset-0 flex flex-col items-center w-full min-h-screen justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/trailer-no-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Motion Image */}
        <motion.img
          src="/assets/logo-movie.png"
          alt="movie logo"
          className="w-7/12 sm:w-4/12 h-auto"
          style={{ scale, opacity }}
        />

        {/* Button */}
        <button
          onClick={handleOpenDialog}
          className={`mt-3 font-semibold p-2 bg-black rounded-md border border-white text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-300 ${lexend.className}`}
        >
          WATCH TRAILER
        </button>
      </div>

      {/* Video Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative z-50 w-10/12 max-w-4xl bg-white rounded-lg overflow-hidden">
            <button
              onClick={handleCloseDialog}
              className="absolute top-3 right-3 rounded-full w-8 h-8 flex items-center justify-center font-bold bg-black text-white transition duration-300 z-50"
            >
              X
            </button>

            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              muted
              poster="/assets/thumbnail.png"
            >
              <source src="/assets/trailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingSection;
