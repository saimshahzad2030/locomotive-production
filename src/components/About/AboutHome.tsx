"use client";
import { playfairDisplay } from "@/utils/fonts";
import React from "react";

const AboutHome = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-[100vh] flex flex-col items-center justify-center px-8 bg-black absolute top-[100vh]">
        <div className="flex flex-row items-center justify-between">
          <div
            className={`flex flex-col items-start  leading-[100px]  font-bold text-[110px] text-white ${playfairDisplay.className} w-4/12`}
          >
            <h1 className={`   `}>ABOUT</h1>
            <h1 className={` opacity-55`}>ABOUT</h1>
            <h1 className={`  opacity-25`}>ABOUT</h1>
          </div>
          <div
            className={`flex flex-col items-center justify-center w-3/12 text-white ${playfairDisplay.className}`}
          >
            <p className="text-start text-sm">
              At Locomotive, we believe in the power of storytelling. Founded in
              2021 in the Emirates, we are a film production company reshaping
              Middle Eastern cinema. Our mission is simple: to create films that
              feel as real as life itself, connecting deeply with audiences.
              We’re not just making movies; we’re crafting experiences. Our
              debut action film is a testament to our commitment to quality,
              realism, and authenticity, delivering stories that leave viewers
              feeling like they’ve lived the journey themselves.
            </p>
          </div>
          <img
            src="/assets/AboutSection-side-image.png"
            alt="about image"
            className="w-4/12 h-auto"
          />
        </div>
      </div>
      <div className="h-[100vh] flex flex-col items-center justify-center px-8 bg-black absolute top-[200vh]">
        <div className="flex flex-row items- justify-between">
          <img
            className="w-7/12 h-auto"
            src="/assets/AboutSection-bg-image.png"
            alt="about Bg"
          />
          <div
            className={`flex flex-col items-center justify-end p-4 relative  ${playfairDisplay.className}`}
          >
            <div className=" absolute top-[10px] left-[-190px] h-60 w-60 bg-white rounded-full flex flex-col items-center justify-center">
              <div className="relative text-[50px] flex flex-row items-center justify-center">
                <h1 className="uppercase font-bold ml-12 absolute right-[-270px] min-w-[310px]  leading-[50px]">
                  <span className="text-black">More</span>
                  <span className="text-white"> than </span>Just a{" "}
                  <span className="text-[60px]">
                    Mov<span className="text-white">ie</span>
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-start text-white">
              When you watch our debut action film, you're not just observing a
              story—you’re entering a world that feels real. Every scene, every
              sound, is crafted to pull you in. We focus on realistic action,
              stunning cinematography, and performances that bring complex,
              flawed characters to life —characters you’ll see parts of yourself
              in. Our commitment to authenticity makes this more than just
              entertainment. It’s a gripping, immersive experience that lingers
              long after the credits roll.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[100vh] flex flex-col items-center justify-center px-8 bg-black absolute top-[300vh] text-white">
        <div className="flex flex-row items- justify-between">
          <div className="w-3/12 flex flex-col items-start">
            <p>
              We are not just another production company we are a movement. At
              Locomotive, we are setting a new standard for Arabic cinema by
              focusing on authenticity, high-quality production, and stories
              that resonate with the modern viewer.We go above and beyond to
              deliver films that stand out, not just in the Middle East, but on
              a global scale.
            </p>
            <p className="mt-2">
              Our approach is different. From the cutting-edge technology we use
              to our unwavering commitment to excellence, we ensure that every
              film we produce reflects the highest standards of craftsmanship.
              We are proud to be the first in the region to offer our films both
              in theaters and on our website, creating a seamless viewing
              experience for all our fans.
            </p>
          </div>
          <div className="w-4/12 flex flex-col items-center justify-center bg-white">
            <h1 className="text-center font-bold text-[70px] text-black">
              Setting <br />a <br />
              New <br />
              Standard
            </h1>
          </div>
          <div className="w-4/12 flex flex-col items-center justify-center bg-white">
            <img
              className="w-auto h-full"
              src="/assets/AboutSection-side-image2.png"
              alt="About Image 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
