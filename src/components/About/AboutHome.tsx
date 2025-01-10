"use client";
import { playfairDisplay, zenAntiqueSoft } from "@/utils/fonts";
import React from "react";
import Footer from "../Footer/Footer";
import WhyUsHome from "../WhyUs/WhyUsHome";

const AboutHome = () => {
  return (
    <div className="z-10 flex flex-col items-center w-full overflow-y-hidden">
      <div
        className="overflow-y-hidden py-8  flex flex-col items-center justify-center px-8 bg-black absolute top-[50vh] sm:top-[100vh] pt-[28px]"
        // data-aos="fade-up"
      >
        <div
          id="about"
          className="w-full sm:min-h-[40vh] lg:min-h-[100vh] flex flex-col items-center justify-center"
        >
          <div
            className="flex flex-col items-center w-full mb-8"
            data-aos="fade-up"
          >
            <div
              className={` sm:hidden flex flex-col items-center   leading-[40px]  font-bold text-[40px]   text-white ${playfairDisplay.className} w-4/12`}
            >
              <h1 className={`   `}>ABOUT</h1>
              <h1 className={` opacity-55`}>ABOUT</h1>
              <h1 className={`  opacity-25`}>ABOUT</h1>
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-x-4 sm:grid-cols-3 w-full items-center justify-between mt-8"
            data-aos="fade-up"
          >
            <div
              className={`hidden sm:flex flex-col items-center font-bold 
                 sm:leading-[50px] sm:text-[55px] 
                 md:leading-[60px] md:text-[60px] 
                 lg:leading-[85px] lg:text-[90px] 
                 xl:leading-[100px] xl:text-[110px]
                 2xl:leading-[140px] 2xl:text-[140px]
                 3xl:leading-[160px] 3xl:text-[160px]
                 4xl:leading-[180px] 4xl:text-[180px]
                 5xl:leading-[190px] 5xl:text-[190px]
                 6xl:leading-[200px] 6xl:text-[200px]
                  text-white w-full ${playfairDisplay.className} `}
            >
              <h1 className={`  text-center  `}>ABOUT</h1>
              <h1 className={` text-center opacity-55`}>ABOUT</h1>
              <h1 className={` text-center  opacity-25`}>ABOUT</h1>
            </div>
            <div
              className={` h-full w-full   flex flex-col items-center justify-center  text-white ${playfairDisplay.className}`}
            >
              <p
                className="text-justify text-[10px] sm:text-[9px] md:text-[10px]
                 lg:text-[14px] xl:text-[16px] xl:leading-[26px] wxl:leaeding-auto
              2xl:text-2xl
              3xl:text-2xl
              4xl:text-3xl
              5xl:text-4xl
              "
              >
                At Locomotive, we believe in the power of storytelling. Founded
                in 2021 in the Emirates, we are a film production company
                reshaping Middle Eastern cinema. Our mission is simple: to
                create films that feel as real as life itself, connecting deeply
                with audiences. We’re not just making movies; we’re crafting
                experiences. Our debut action film is a testament to our
                commitment to quality, realism, and authenticity, delivering
                stories that leave viewers feeling like they’ve lived the
                journey themselves.
              </p>
            </div>

            <div className="relative w-full">
              <img
                src="/assets/AboutSection-side-image-clr.png"
                alt="about image"
                className="w-full h-auto transition-opacity opacity-100 duration-300 top-0 left-0z-30"
              />
              <img
                src="/assets/AboutSection-side-image-bw.png"
                alt="about image"
                className="w-full h-auto transition-opacity duration-300 absolute top-0 left-0  hover:opacity-0  opacity-100 z-40"
              />
            </div>
          </div>
        </div>

        <div
          id="films"
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-between mt-8 w-full lg:pt-20 "
          data-aos="fade-up"
        >
          {/* Image with hover effect */}
          <div className=" relative w-full  bg-pink-300   xl:min-h-[80vh] flex flex-col items-center justify-center">
            <img
              src="/assets/AboutSection-bg-image-clr.png"
              alt="about Bg"
              className="xl:h-[80vh] w-full h-auto transition-opacity opacity-100 duration-300  bg-contain bg-center z-10"
            />
            <img
              src="/assets/AboutSection-bg-image-bw.png"
              alt="about Bg"
              className="xl:h-[80vh] w-full h-auto transition-opacity duration-300 absolute bg-contain bg-center  hover:opacity-0 opacity-100 z-20"
            />
          </div>

          {/* Text Content */}
          <div
            className={`hidden xl:flex flex-col items-center justify-end p-4 relative ${playfairDisplay.className} w-full   xl:h-[80vh]`}
          >
            <div
              className="   absolute 
            left-[10%] xl:left-auto
             top-0 sm:top-[10px] xl:top-[-20px]  xl:right-[100%] 
            h-24 w-24 sm:h-40 md:h-52 lg:h-60 sm:w-40 md:w-52 lg:w-60 
            5xl:w-[400px] 5xl:h-[400px] 4xl:w-[350px] 4xl:h-[350px]
             3xl:w-[300px]  3xl:h-[300px]  2xl:w-[250px]  2xl:h-[250px]
             bg-white rounded-full flex flex-col items-center justify-center z-40"
            >
              <div
                className="relative text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px]
              5xl:text-[80px] 4xl:text-[70px]  3xl:text-[60px]
              flex flex-row items-center justify-center"
              >
                <h1
                  className="uppercase font-bold ml-12 absolute
                right-[-110px] sm:right-[-182px] md:right-[-235px] lg:right-[-270px]
                5xl:right-[-430px] 4xl:right-[-380px] 3xl:right-[-350px] 
                min-w-[130px] sm:min-w-[180px] md:min-w-[250px] lg:min-w-[310px]
                5xl:min-w-[490px] 4xl:min-w-[440px] 3xl:min-w-[390px]
                 leading-[25px] sm:leading-[30px] md:leading-[50px] 
                 5xl:leading-[90px]  4xl:leading-[80px] 3xl:leading-[70px]"
                >
                  <span className="text-black">More</span>
                  <span className="text-white"> than </span>Just a{" "}
                  <span className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[60px] 5xl:text-[90px]  4xl:text-[80px] 3xl:text-[70px]">
                    Mov<span className="text-white">ie</span>
                  </span>
                </h1>
              </div>
            </div>
            <p
              className={`
                pt-28  
                xl:pt-0   text-start text-white text-[10px] sm:text-[9px] md:text-[10px] lg:text-xs 
                xl:text-xl
                xl:leading-[25px]
              2xl:text-3xl 
              2xl:leading-[50px]
              4xl:leading-auto
              4xl:text-xl`}
            >
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
          <div
            className={`  grid   xl:hidden grid-cols-3 p-4 relative ${playfairDisplay.className} w-full   xl:h-[80vh]`}
          >
            <div
              className=" 
           
            h-24 w-24 sm:h-40 md:h-52 lg:h-60 sm:w-40 md:w-52 lg:w-60 
            5xl:w-[400px] 5xl:h-[400px] 4xl:w-[350px] 4xl:h-[350px]
             3xl:w-[300px]  3xl:h-[300px]  2xl:w-[250px]  2xl:h-[250px]
             bg-white rounded-full flex flex-col items-center justify-center z-40"
            >
              <div
                className="relative text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px]
              5xl:text-[80px] 4xl:text-[70px]  3xl:text-[60px]
              flex flex-row items-center justify-center"
              >
                <h1
                  className="uppercase font-bold ml-12 absolute
                right-[-110px] sm:right-[-182px] md:right-[-245px] lg:right-[-270px]
                5xl:right-[-430px] 4xl:right-[-380px] 3xl:right-[-350px] 
                min-w-[130px] sm:min-w-[180px] md:min-w-[250px] lg:min-w-[310px]
                5xl:min-w-[490px] 4xl:min-w-[440px] 3xl:min-w-[390px]
                 leading-[25px] sm:leading-[30px] md:leading-[50px] 
                 5xl:leading-[90px]  4xl:leading-[80px] 3xl:leading-[70px]"
                >
                  <span className="text-black">More</span>
                  <span className="text-white"> than </span>Just a{" "}
                  <span className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[60px] 5xl:text-[90px]  4xl:text-[80px] 3xl:text-[70px]">
                    Mov<span className="text-white">ie</span>
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center w-full col-span-2">
              <p
                className={` 
                w-full 
                pt-24  
                md:px-4 lg:px-0
             sm:pt-40 md:pt-40 lg:pt-48
                xl:pt-0   text-start text-white text-[10px] sm:text-lg md:text-lg lg:text-lg 
                xl:text-xl
                xl:leading-[25px]
              2xl:text-3xl 
              2xl:leading-[50px]
              4xl:leading-auto
              4xl:text-xl`}
              >
                When you watch our debut action film, you're not just observing
                a story—you’re entering a world that feels real. Every scene,
                every sound, is crafted to pull you in. We focus on realistic
                action, stunning cinematography, and performances that bring
                complex, flawed characters to life —characters you’ll see parts
                of yourself in. Our commitment to authenticity makes this more
                than just entertainment. It’s a gripping, immersive experience
                that lingers long after the credits roll.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex lg:flex-row flex-col items-center justify-between mt-24 lg:mt-8 lg:min-h-[100vh] lg:pt-28"
          data-aos="fade-up"
          id="contact us"
        >
          <div className=" w-full  rounded-md py-8  lg:hidden flex flex-col items-center  justify-center text-black  bg-white hover:bg-black hover:border-white hover:text-white transition-colors duration-300">
            <h1 className="uppercase text-center font-bold text-[30px] sm:text-[70px]   leading-[40px] sm:leading-[70px] py-4">
              Setting <br /> New <br />
              Standards
            </h1>
          </div>
          <div
            className={`pt-8 lg:pt-0 my-4 lg:my-0 w-full lg:w-3/12 flex text-[10px] flex-col items-start text-white
          4xl:text-[24px] 2xl:text-[20px] xl:text-[12px] lg:text-[11px]  
            ${zenAntiqueSoft.className}`}
          >
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
          <div className=" lg:min-h-[60vh] my-4 lg:my-0 lg:py-0 2xl:py-12 hidden w-4/12 lg:flex flex-col items-center  border border-white justify-center text-black  bg-white hover:bg-black hover:border-white hover:text-white transition-colors duration-300">
            <h1
              style={{
                WebkitTextStroke: "4px ",
              }}
              className={`text-center font-extrabold text-[50px] xl:text-[60px] 2xl:text-[70px] uppercase ${zenAntiqueSoft.className}`}
            >
              Setting <br /> New <br />
              Standards
            </h1>
          </div>
          <div className="  h-full relative my-4 lg:my-0 w-full lg:w-4/12 flex flex-row items-center justify-center bg-black">
            <img
              className="w-full h-auto transition-opacity duration-300 absolute top-0 lg:top-auto left-0   opacity-100 lg:z-40 z-30"
              src="/assets/AboutSection-side-image2-clr.png"
              alt="About Image 2"
            />
            <img
              className="w-full h-auto transition-opacity duration-300 lg:absolute top-0 lg:top-auto left-0  hover:opacity-0 opacity-0 lg:opacity-100 lg:z-40"
              src="/assets/AboutSection-side-image2-bw.png"
              alt="About Image 2"
            />
          </div>
          {/* <div className="my-4 lg:my-0 w-full lg:w-4/12 flex flex-col items-center justify-center bg-white">
            <img
              className="w-auto h-full"
              src="/assets/AboutSection-side-image2-bw.png"
              alt="About Image 2"
            />
          </div> */}
        </div>
        <WhyUsHome />
        <Footer />
      </div>
    </div>
  );
};

export default AboutHome;
