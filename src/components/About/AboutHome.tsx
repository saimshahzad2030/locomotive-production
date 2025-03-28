"use client";
import { playfairDisplay, zenAntiqueSoft } from "@/utils/fonts";
import React from "react";
import Footer from "../Footer/Footer";
import WhyUsHome from "../WhyUs/WhyUsHome";

const AboutHome = () => {
  return (
    <div className="  flex flex-col items-center w-full overflow-y-hidden">
      <div className="absolute top-[50vh] sm:top-[70vh]  left-0 w-screen h-full pointer-events-none z-50 backdrop-blur-sm bg-yellow-900 bg-opacity-85"></div>

      <div
        className="z-20 sm:pt-4 overflow-y-hidden  flex flex-col items-center justify-center   bg-black  absolute top-[70vh] sm:top-[100vh] px-8 lg:px-[5%]  xl:px-[10%]"
        // data-aos="fade-up"
      >
        <div
          id="about"
          className="w-full sm:min-h-[40vh] lg:min-h-[80vh] flex flex-col items-center justify-center "
        >
          <div className="flex flex-col items-center w-full  bg-black">
            <div
              className={`py-4 bg-black sm:hidden flex flex-col items-center   leading-[40px]  font-bold text-[40px]   text-white ${playfairDisplay.className} w-4/12`}
            >
              <h1 className={`   `}>ABOUT</h1>
              <h1 className={` opacity-55`}>ABOUT</h1>
              <h1 className={`  opacity-25`}>ABOUT</h1>
            </div>
          </div>
          <div className="  grid grid-cols-2 sm:gap-[4%] lg:gap-[4%] xl:gap-[6%] sm:grid-cols-3 w-full items-center justify-between  sm:min-h-[40vh] lg:min-h-[100vh]">
            <div
              className={`hidden sm:flex flex-col items-center justify-center font-bold
                                              sm:text-[clamp(6vw,7.9vw,10vw)] 

                lg:min-h-[50vh]
                lg:max-h-[50vh]
                
                 leading-[7vw]
                  
 h-full
                  text-white w-full ${playfairDisplay.className} `}
              data-aos="fade-up"
            >
              <h1 className={`  text-center `}>ABOUT</h1>
              <h1 className={` text-center opacity-55 `}>ABOUT</h1>
              <h1 className={` text-center  opacity-25 `}>ABOUT</h1>
            </div>
            <div
              data-aos="fade-up"
              className={` pr-4 sm:pr-0 sm:min-h-[40vh] lg:min-h-[55vh]  bg-black  w-full   flex flex-col items-center justify-center  text-white ${playfairDisplay.className}`}
            >
              <p
                className=" 
                              sm:text-[clamp(7px,1.10vw,24px)] 
                              
                            text-[1.7vw]
              leading-auto
            bg-black
            h-full 
               text-justify  tracking-[1px]

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

            <div
              className=" relative w-full lg:h-[55vh] bg-black  flex flex-col items-center justify-center"
              data-aos="fade-up"
            >
              <img
                src="/assets/AboutSection-side-image-clr.png"
                alt="about image"
                className="w-full  h-full  object-cover transition-opacity opacity-100 duration-300    z-30"
              />
              <img
                src="/assets/AboutSection-side-image-bw.png"
                alt="about image"
                className="w-full  h-full  object-cover transition-opacity duration-300 absolute     hover:opacity-0  opacity-100 z-40"
              />
            </div>
          </div>
        </div>

        <div
          id="films"
          className="   mt-8  grid grid-cols-1 xl:grid-cols-2 gap-8 justify-between w-full lg:py-8  "
        >
          <div
            data-aos="fade-up"
            className=" relative w-full  bg-black   xl:min-h-[65vh] flex flex-col items-center justify-center"
          >
            <img
              src="/assets/AboutSection-bg-image-clr.png"
              alt="about Bg"
              className="xl:h-[65vh] w-full  h-auto transition-opacity opacity-100 duration-300 object-cover  bg-cover bg-center z-10"
            />
            <img
              src="/assets/AboutSection-bg-image-bw.png"
              alt="about Bg"
              className="xl:h-[65vh] w-full  h-auto transition-opacity duration-300 absolute object-cover bg-cover bg-center  hover:opacity-0 opacity-100 z-20"
            />
          </div>

          <div
            data-aos="fade-up"
            className={`hidden lg:flex flex-col items-center justify-end p-4 relative ${playfairDisplay.className} w-full   xl:h-[65vh]`}
          >
            <div
              className="   absolute 
            left-[10%] xl:left-auto
             top-0 sm:top-[10px] xl:top-[-20px]  xl:right-[100%] 
             3xl:right-[80%]
            h-24 w-24 sm:h-40 md:h-52 lg:h-60 sm:w-40 md:w-52 lg:w-60 
            5xl:w-[400px] 5xl:h-[400px] 4xl:w-[350px] 4xl:h-[350px]
             3xl:w-[380px]  3xl:h-[380px]  2xl:w-[250px]  2xl:h-[250px]
             xl-2:h-[280px] xl-2:w-[280px]
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
                5xl:right-[-430px] 4xl:right-[-380px] 3xl:right-[-340px]   
                min-w-[130px] sm:min-w-[180px] md:min-w-[250px] lg:min-w-[310px]
                xl-2:right-[-250px] 
                5xl:min-w-[490px] 4xl:min-w-[440px] 3xl:min-w-[390px]
                 leading-[25px] sm:leading-[30px] md:leading-[50px] 
                 5xl:leading-[90px]  4xl:leading-[80px] 3xl:leading-[90px]
                  xl-2:leading-[70px]"
                >
                  <span className="text-black">More</span>
                  <span className="text-white"> than </span>Just a{" "}
                  <span className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[60px] 5xl:text-[90px]  4xl:text-[80px] 3xl:text-[90px] xl-2:text-[80px]">
                    Mov<span className="text-white">ie</span>
                  </span>
                </h1>
              </div>
            </div>
            <p
              className={`
                pt-28  
                xl:pt-0   text-white  
                 text-[clamp(10px,1.05vw,30px)]
                xl-2:text-[clamp(17px,1.15vw,30px)]
                2xl:text-[clamp(20px,1.35vw,34px)]
                custom-xl:text-[clamp(18px,1.25vw,30px)]
              leading-auto
               text-justify  tracking-[1px]
               `}
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
            className={`  grid   lg:hidden grid-cols-3 p-4 relative ${playfairDisplay.className} w-full   xl:h-[80vh]`}
          >
            <div
              data-aos="fade-up"
              className=" 
           
            h-24 w-24 sm:h-40 md:h-52 lg:h-60 sm:w-40 md:w-52 lg:w-60 
            5xl:w-[400px] 5xl:h-[400px] 4xl:w-[350px] 4xl:h-[350px]
             3xl:w-[300px]  3xl:h-[300px]  2xl:w-[250px]  2xl:h-[250px]
             xl:h-[350px] xl:w-[350px]
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
            <div
              data-aos="fade-up"
              className="flex flex-col items-center w-full col-span-2"
            >
              <p
                className={` 
                w-full 
                pt-24  
                md:px-4  
             sm:pt-40 md:pt-40 lg:pt-48
                xl:pt-0    text-white text-[10px] sm:text-lg md:text-lg lg:text-lg 
                xl:text-xl
                xl:leading-[25px]
              2xl:text-3xl 
              2xl:leading-[50px]
              text-justify
              4xl:leading-auto
              4xl:text-xl
              
              `}
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
        <div className="    w-full   lg:min-h-[70vh] flex flex-col items-center justify-center ">
          <div
            className="       grid sm:gap-6 xl:gap-16 lg:grid-cols-3 grid-cols-1 w-full  "
            id="contact us"
          >
            <div
              data-aos="fade-up"
              className={`    sm:py-0
                flex flex-col items-start justify-center py-4 w-full pt-8 lg:pt-0
                      text-white    text-[clamp(9px,0.9vw,13px)] 
                   2xl:text-[clamp(16px,0.9vw,22px)]
              lg:h-[70vh]
               text-justify  tracking-[1px]

                ${playfairDisplay.className}`}
            >
              <p>
                We are not just another production company we are a movement. At
                Locomotive, we are setting a new standard for Arabic cinema by
                focusing on authenticity, high-quality production, and stories
                that resonate with the modern viewer.We go above and beyond to
                deliver films that stand out, not just in the Middle East, but
                on a global scale.
              </p>
              <p className="mt-2">
                Our approach is different. From the cutting-edge technology we
                use to our unwavering commitment to excellence, we ensure that
                every film we produce reflects the highest standards of
                craftsmanship. We are proud to be the first in the region to
                offer our films both in theaters and on our website, creating a
                seamless viewing experience for all our fans.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="  h-full lg:py-0 2xl:py-12   w-full  flex flex-col items-center justify-center"
            >
              <h1
                style={{
                  WebkitTextStroke: "4px",
                }}
                className={`p-4   py-6 text-center  border border-none justify-center text-black  bg-white  font-extrabold   
                                      text-[clamp(20px,9vw,40px)] 
                  w-full
                  md:w-auto
                  md:text-[clamp(30px,12vw,50px)] 
                  2xl:text-[clamp(50px,11vw,75px)]
                  uppercase ${zenAntiqueSoft.className}`}
              >
                Setting <br /> New <br />
                Standards
              </h1>
            </div>
            <div
              data-aos="fade-up"
              className="  mt-8 lg:mt-0 h-full relative    w-full   flex flex-row items-center justify-center  "
            >
              <img
                className=" 2xl:w-[90%] w-full h-auto transition-opacity duration-300 absolute top-0 lg:top-auto     opacity-100 lg:z-40 z-30"
                src="/assets/AboutSection-side-image2-clr.png"
                alt="About Image 2"
              />
              <img
                className=" 2xl:w-[90%] w-full h-auto transition-opacity duration-300 lg:absolute top-0 lg:top-auto  hover:opacity-0 opacity-0 lg:opacity-100 lg:z-40"
                src="/assets/AboutSection-side-image2-bw.png"
                alt="About Image 2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full ">
          <WhyUsHome />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutHome;
