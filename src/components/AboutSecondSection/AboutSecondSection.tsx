"use client";
import { playfairDisplay, zenAntiqueSoft } from "@/utils/fonts";
import Footer from "../Footer/Footer";
import WhyUsHome from "../WhyUs/WhyUsHome";

const AboutSecondSection = () => {
  return (
    <div
      style={{ opacity: 1 }}
      className={` flex flex-col items-center w-full overflow-x-hidden overflow-y-hidden  ${playfairDisplay.className} `}
    >
      <div
        data-aos="fade-up"
        className="  bg-opacity-100 opac text-white z-20   overflow-y-hidden overflow-x-hidden  flex flex-col items-center justify-center   absolute top-[70vh] sm:top-[100vh]"
      >
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/10  to-[#D9A433] z-10 pointer-events-none" />

        <div
          className=" mt-64
          bg-opacity-100 opacity-100
                       bg-gradient-to-b from-[#D9A433] to-[#FFBF35]
           px-8 lg:px-20 xl:px-24
          w-full sm:min-h-[40vh] lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between  "
        >
          <div
            className="  w-full lg:w-7/12 flex flex-col items-center text-white text-center    lg:min-h-[50vh] justify-between"
            data-aos="fade-right"
          >
            <h1
              className={`py-4      font-normal   ${playfairDisplay.className} md:w-7/12
                text-[12vw]   
                leading-[12vw]   
                sm:text-[7vw] lg:text-[4.6vw] 
                  sm:leading-[7vw] lg:leading-[5vw]

                `}
            >
              TAHA <br />
              Bin Abdulrahman
            </h1>
            <p className="w-full  text-[3.5vw] sm:text-[2vw]  lg:text-[1vw]">
              Taha Bin Abdulrahman is a passionate filmmaker, actor, and
              director committed to transforming the cinematic landscape in the
              Middle East. With over seven years of experience, Taha has
              carefully curated his journey, blending his deep love for
              storytelling with a drive to innovate. He founded Locomotive Films
              to create a platform that elevates diverse voices and nurtures
              emerging talent.
            </p>
            <p className=" text-[3.5vw] sm:text-[2vw]  lg:text-[1vw] mt-4">
              Taha’s work focuses on crafting impactful narratives that resonate
              globally while staying rooted in Middle Eastern culture. He
              strives to challenge traditional filmmaking norms by exploring new
              ideas, technologies, and creative approaches. At Locomotive, he
              envisions a space where both established and emerging filmmakers
              can collaborate and push bound.
            </p>
          </div>
          <div
            className=" 
lg:mb-0 md:mb-12 mb-4
          
          mt-6 lg:mt-0   w-full lg:w-4/12 flex flex-col items-end sm:min-h-[40vh] lg:min-h-[80vh] justify-between"
          >
            <div className="  flex flex-col items-center w-full">
              <div
                className="border border-gray-500 relative w-11/12 lg:w-11/12 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh]  bg-black  flex flex-col items-center justify-center"
                data-aos="fade-left"
              >
                <span className="z-[45] uppercase tracking-[20px] sm:tracking-normal absolute left-[-14%] sm:left-[-10%] lg:left-[-32%] top-1/2 transform -translate-y-1/2 text-white text-[11vw] sm:text-[8vw] 2xl:text-[9.5vw] font-semibold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                  <span className="text-transparent">F</span>
                  <span>O</span>
                  <span className="text-transparent">U</span>
                  <span className="text-transparent">N</span>
                  <span className="text-transparent">D</span>
                  <span className="text-transparent">E</span>
                  <span className="text-transparent">R</span>
                </span>
                <span className="z-10 uppercase tracking-[20px] sm:tracking-normal absolute left-[-14%] sm:left-[-10%] lg:left-[-32%] top-1/2 transform -translate-y-1/2 text-white text-[11vw] sm:text-[8vw] 2xl:text-[9.5vw] font-semibold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                  <span>F</span>
                  <span>O</span>
                  <span>U</span>
                  <span>N</span>
                  <span>D</span>
                  <span>E</span>
                  <span>R</span>
                </span>

                <img
                  src="/assets/About-landing-1.png"
                  alt="about 2 image"
                  className="w-full  h-full  object-cover transition-opacity duration-300 absolute    z-30"
                />
                <img
                  src="/assets/About-landing-1-bw.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity duration-300 absolute     hover:opacity-0  opacity-100 z-40"
                />
                <h1 className="absolute bottom-[8%] sm:bottom-[5%] left-[10%] sm:left-[2%] lg:left-[8%] 2xl:left-[8.5%] z-[41] text-[12vw] sm:text-[7.1vw] 2xl:text-[10vw]">
                  F
                </h1>
                <p className="font-normal w-6/12 absolute bottom-[9%] left-[22%] sm:left-[8%] lg:left-[27%] 2xl:left-[29%] leading-[7.5vw] z-[41] text-[5vw] sm:text-[2vw] 2xl:text-[3vw] 2xl:leading-[5.2vw] capitalize sm:leading-[3.5vw] ">
                  {` Locomotive 
                   Films`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="  text-white text-center  bg-gradient-to-b   from-[#FFBF35]   to-[#875d00]   pt-8  flex flex-col items-center w-full lg:py-8  py-4  px-8 lg:px-16 xl:px-20">
          <div className=" lg:h-[100vh] flex flex-col lg:flex-row items-center justify-between w-full">
            <div
              className="flex flex-col-reverse lg:flex-col items-center w-full  lg:w-8/12"
              data-aos="fade-right"
            >
              <div className="border border-gray-500 relative w-full lg:w-11/12   lg:h-[70vh]  bg-black  flex flex-col items-center justify-center">
                <img
                  src="/assets/About-Section5-img.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity opacity-100 duration-300    z-30"
                />
                <img
                  src="/assets/About-Section5-img-bw.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity duration-300 absolute     hover:opacity-0  opacity-100 z-40"
                />
                {/* <span className="z-10   absolute left-0  top-[-25%]   text-white text-[8vw] font-semibold whitespace-nowrap  ">
                  Executive
                </span> */}
                <span className="z-[45]   absolute left-0 top-[-20%] lg:top-[-25%]  xl:top-[-22%] 2xl:top-[-18%]  text-white text-[8vw] font-normal whitespace-nowrap  ">
                  <span>E</span>
                  <span className="text-transparent">x</span>
                  <span className=" ">e</span>
                  <span className="text-transparent">c</span>
                  <span>u</span>
                  <span className="text-transparent">t</span>
                  <span>i</span>
                  <span className="text-transparent">v</span>
                  <span>e</span>
                </span>
                <span className="z-10   absolute left-0 top-[-20%] lg:top-[-25%] xl:top-[-22%] 2xl:top-[-18%]   text-white text-[8vw] font-normal whitespace-nowrap  ">
                  <span>E</span>
                  <span>x</span>
                  <span>e</span>
                  <span>c</span>
                  <span>u</span>
                  <span>t</span>
                  <span>i</span>
                  <span>v</span>
                  <span>e</span>
                </span>
                <span className="z-[45]   absolute right-[2%]  bottom-[-6%]   text-white text-[4vw] font-normal whitespace-nowrap  ">
                  Producer
                </span>
              </div>
              {/* <img
                src="/assets/About-Section5-img.png"
                className="w-full lg:w-11/12  lg:h-[80vh] object-cover"
                alt="about 3rd image"
              /> */}
            </div>
            <div
              className={`w-full lg:w-4/12 lg:h-[75vh] flex flex-col items-center justify-center `}
              data-aos="fade-left"
            >
              <p
                className={`lg:my-0 my-12 md:[word-spacing:0.2rem] lg:[word-spacing:0.5rem] lg:w-11/12 mb-2 md:mb-4 lg:mb-8 font-light  ${playfairDisplay.className} text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] text-center`}
              >
                Mariam Al Kaabi, our Executive Producer, plays a pivotal role in
                bringing Locomotive’s vision to life. As a key investor, her
                support and dedication to elevating Middle Eastern cinema have
                been instrumental in our journey.
              </p>
              <p
                className={` lg:w-11/12 md:[word-spacing:0.2rem] lg:[word-spacing:0.5rem] font-light ${playfairDisplay.className} text-[2.5vw]  md:text-[2vw] lg:text-[1.2vw] text-center`}
              >
                Mariam’s belief in the power of storytelling and her commitment
                to quality are integral to ensuring that every project we
                undertake reaches its full potential.
              </p>
            </div>
          </div>
        </div>
        <div
          className="  
                  
 bg-gradient-to-b from-[#875d00] to-black
        
        pt-8  flex flex-col items-center w-full lg:py-8    px-8 lg:px-20 xl:px-24"
        >
          <div className=" lg:h-[100vh] flex flex-col lg:flex-row items-center justify-between w-full">
            <div
              className="  flex flex-col items-start w-full  lg:w-8/12 "
              data-aos="fade-right"
            >
              <h1
                className={`uppercase text-[3vw] lg:text-[4vw] tracking-[0.8vw] font-normal`}
              >
                Our films
              </h1>
              <p
                className={`text-justifYy text-[2vw] md:text-[3vw] text-white w-full lg:text-[2vw] mb-4 ${playfairDisplay.className}`}
              >
                Are not just meant to be watched—they’re meant to be lived
              </p>
              <div className="border border-gray-500 relative   lg:h-[70vh] bg-black  flex flex-col items-center justify-center">
                <img
                  src="/assets/About-Section3-img.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity opacity-100 duration-300    z-30"
                />
                <img
                  src="/assets/About-Section3-img-bw.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity duration-300 absolute     hover:opacity-0  opacity-100 z-40"
                />
              </div>
            </div>

            <p
              data-aos="fade-left"
              className={` mt-4 text-center lg:mt-[20vh] w-full lg:w-4/12 text-[3.5vw] md:text-[4vw]   lg:text-[2.1vw] ${playfairDisplay.className}`}
            >
              At Locomotive, we elevate Middle Eastern cinema with authentic
              films that resonate deeply.
            </p>
          </div>
        </div>
        <div className="pt-16 relative  bg-gradient-to-b   from-black     via-black  to-black    flex flex-col items-center w-full lg:py-8    px-8 lg:px-20 xl:px-24">
          <div className="absolute top-0 left-0 w-full h-64  z-5 pointer-events-none" />

          <div className="lg:mt-20 lg:h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between w-full py-8">
            <p
              className={`mt-2 md:mt-6  text-white text-center lg:mt-0 w-full lg:w-4/12 text-[3.5vw] md:text-[2vw] lg:text-[2.4vw] ${playfairDisplay.className}`}
            >
              Drawing from a diverse background and love for authentic
              storytelling.
            </p>
            <div className="flex flex-col items-center w-full lg:w-8/12">
              {/* <img
                src="/assets/About-Section4-img.png"
                className="w-full lg:w-11/12 h-auto lg:h-[80vh] object-cover"
                alt="about 3rd image"
              /> */}
              <div
                className="border border-gray-500 relative w-full lg:w-11/12 h-auto lg:h-[80vh]  bg-black  flex flex-col items-center justify-center"
                data-aos="fade-left"
              >
                <img
                  src="/assets/About-Section4-img.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity opacity-100 duration-300    z-30"
                />
                <img
                  src="/assets/About-Section4-img-bw.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity duration-300 absolute     hover:opacity-0  opacity-100 z-40"
                />
              </div>
              {/* <p
                className={`mt-2 font-bold text-[6vw] lg:text-[2.5vw] ${playfairDisplay.className}`}
              >
                Our Founder
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecondSection;
