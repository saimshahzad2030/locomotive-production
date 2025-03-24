"use client";
import { playfairDisplay, zenAntiqueSoft } from "@/utils/fonts";
import Footer from "../Footer/Footer";
import WhyUsHome from "../WhyUs/WhyUsHome";

const AboutSecondSection = () => {
  return (
    <div className="  flex flex-col items-center w-full overflow-y-hidden">
      <div className="absolute top-[50vh] sm:top-[70vh]  left-0 w-screen h-full pointer-events-none z-50 backdrop-blur-sm bg-opacity-85"></div>

      <div className="text-white z-20 sm:pt-4 overflow-y-hidden  flex flex-col items-center justify-center bg-gradient-to-b from-[#4D4D4D] to-black     absolute top-[70vh] sm:top-[100vh] px-8 lg:px-20 xl:px-24">
        <div
          data-aos="fade-up"
          className="w-full sm:min-h-[40vh] lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between  "
        >
          <div
            className="w-full lg:w-6/12 flex flex-col items-start  lg:min-h-[80vh] justify-between"
            data-aos="fade-right"
          >
            <h1
              className={`py-4  text-white    font-bold   ${playfairDisplay.className} w-4/12
                   text-[7vw] lg:text-[5vw] 
                  leading-[7vw] lg:leading-[5vw]

                `}
            >
              TAHA ALHAMID
            </h1>
            <p className="w-full lg:w-6/12 text-[1.4vw]">
              Taha Alhamid, the founder of Locomotive, is a passionate filmmaker
              with a deep commitment to changing the landscape of cinema in the
              Middle East.
            </p>
            <p className="text-[1.4vw]">
              Our films are not just meant to be watched—they’re meant to be
              lived
            </p>
          </div>
          <div className="mt-6 lg:mt-0 w-full lg:w-5/12 flex flex-col items-end sm:min-h-[40vh] lg:min-h-[80vh] justify-between">
            <div className="relative flex flex-row justify-end w-full">
              <p
                className="absolute left-0 lg:left-32  top-[60vh] lg:top-[80vh] -translate-y-1/2 -rotate-90 
              origin-left text-lg  text-white px-4 whitespace-nowrap"
              >
                We are a bold new force in Middle Eastern cinema
              </p>
              <div
                className=" relative w-11/12 lg:w-4/6 min-h-[60vh] sm:min-h-[40vh] lg:min-h-[80vh]  bg-black  flex flex-col items-center justify-center"
                data-aos="fade-left"
              >
                <img
                  src="/assets/WhyUsHomeBg-clr.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity opacity-100 duration-300    z-30"
                />
                <img
                  src="/assets/WhyUsHomeBg-bw.png"
                  alt="about image"
                  className="w-full  h-full  object-cover transition-opacity duration-300 absolute     hover:opacity-0  opacity-100 z-40"
                />
              </div>
              {/* <img
                className="w-11/12 lg:w-4/6 min-h-[60vh] sm:min-h-[40vh] lg:min-h-[80vh] object-cover"
                src="/assets/About-Section2-img.png"
              /> */}
            </div>
          </div>
        </div>

        <div className="   mt-8  flex flex-col items-center w-full lg:py-8  ">
          <div className=" lg:h-[80vh] flex flex-col lg:flex-row items-center justify-between w-full">
            <div
              className=" relative w-full  lg:w-6/12   lg:h-[80vh] bg-black  flex flex-col items-center justify-center"
              data-aos="fade-right"
            >
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
            {/* <img
              src="/assets/About-Section3-img.png"
              className="w-full  lg:w-6/12   lg:h-[80vh] object-cover"
              alt="about 3rd image"
            /> */}
            <p
              data-aos="fade-left"
              className={`mt-4 lg:mt-0 w-full lg:w-5/12 text-[4vw] sm:text-[4vw] lg:text-[1.4vw] ${playfairDisplay.className}`}
            >
              At Locomotive, we elevate Middle Eastern cinema with authentic
              films that resonate deeply.
            </p>
          </div>
        </div>
        <div className="   mt-8  flex flex-col items-center w-full lg:py-8  ">
          <div className=" lg:h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between w-full">
            <p
              data-aos="fade-right"
              className={`mt-6 lg:mt-0 w-full lg:w-5/12 text-[4vw] lg:text-[1.4vw] ${playfairDisplay.className}`}
            >
              Drawing from a diverse background and love for authentic
              storytelling.
            </p>
            <div className="flex flex-col items-center w-full lg:w-6/12">
              {/* <img
                src="/assets/About-Section4-img.png"
                className="w-full lg:w-11/12 h-auto lg:h-[80vh] object-cover"
                alt="about 3rd image"
              /> */}
              <div
                className=" relative w-full lg:w-11/12 h-auto lg:h-[80vh]  bg-black  flex flex-col items-center justify-center"
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
              <p
                className={`mt-2 font-bold text-[6vw] lg:text-[2.5vw] ${playfairDisplay.className}`}
              >
                Our Founder
              </p>
            </div>
          </div>
        </div>
        <div className="   mt-8  flex flex-col items-center w-full lg:py-8  py-4">
          <div className=" lg:h-[100vh] flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="flex flex-col-reverse lg:flex-col items-center w-full lg:w-6/12">
              <p
                className={`mb-2 font-bold text-[6vw] lg:text-[2.5vw] ${playfairDisplay.className}`}
              >
                Our Debut Film
              </p>
              <div
                className=" relative w-full lg:w-11/12  lg:h-[80vh]  bg-black  flex flex-col items-center justify-center"
                data-aos="fade-right"
              >
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
              </div>
              {/* <img
                src="/assets/About-Section5-img.png"
                className="w-full lg:w-11/12  lg:h-[80vh] object-cover"
                alt="about 3rd image"
              /> */}
            </div>
            <div
              className={`w-full lg:w-5/12 lg:h-[75vh] flex flex-col items-start justify-end`}
              data-aos="fade-left"
            >
              <p
                className={` lg:w-11/12 mb-8 ${playfairDisplay.className} text-[4vw] lg:text-[1.4vw]`}
              >
                Mariam Al Kaabi, our Executive Producer, plays a pivotal role in
                bringing Locomotive’s vision to life. As a key investor, her
                support and dedication to elevating Middle Eastern cinema have
                been instrumental in our journey.
              </p>
              <p
                className={` lg:w-11/12  ${playfairDisplay.className} text-[4vw] lg:text-[1.4vw]`}
              >
                Mariam’s belief in the power of storytelling and her commitment
                to quality are integral to ensuring that every project we
                undertake reaches its full potential.
              </p>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AboutSecondSection;
