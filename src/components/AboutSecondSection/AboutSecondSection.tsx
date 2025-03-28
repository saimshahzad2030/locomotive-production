"use client";
import { playfairDisplay, zenAntiqueSoft } from "@/utils/fonts";
import Footer from "../Footer/Footer";
import WhyUsHome from "../WhyUs/WhyUsHome";

const AboutSecondSection = () => {
  return (
    <div
      style={{ opacity: 1 }}
      className="  flex flex-col items-center w-full overflow-x-hidden overflow-y-hidden o "
    >
      {/* <div className="absolute top-[50vh] sm:top-[70vh]  left-0 w-screen h-full pointer-events-none z-50 backdrop-blur-sm bg-opacity-100"></div> */}

      <div className="bg-opacity-100 opac text-black z-20 sm:pt-4 overflow-y-hidden overflow-x-hidden  flex flex-col items-center justify-center   absolute top-[70vh] sm:top-[100vh]">
        <div
          data-aos="fade-up"
          className="
          bg-opacity-100 opacity-100
                       bg-gradient-to-b from-[#D9A433] to-[#FFBF35]

           px-8 lg:px-20 xl:px-24
          w-full sm:min-h-[40vh] lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between  "
        >
          <div
            className="  w-full lg:w-6/12 flex flex-col items-center text-black text-center    lg:min-h-[50vh] justify-between"
            data-aos="fade-right"
          >
            <h1
              className={`py-4      font-bold   ${playfairDisplay.className} md:w-7/12
                text-[12vw]   
                leading-[12vw]   
                sm:text-[7vw] lg:text-[4.6vw] 
                  sm:leading-[7vw] lg:leading-[5vw]

                `}
            >
              TAHA <br />
              Bin Abdul rahman
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
          <div className="mt-6 lg:mt-0 w-full lg:w-5/12 flex flex-col items-end sm:min-h-[40vh] lg:min-h-[80vh] justify-between">
            <div className="  flex flex-col items-center w-full">
              <p
                className={`mb-2 text-[5vw] md:text-[6vw] text-black lg:text-[2vw] ${playfairDisplay.className}`}
              >
                Founder of Locomotive Films
              </p>
              <div
                className="border border-gray-500 relative w-11/12 lg:w-11/12 min-h-[60vh] sm:min-h-[50vh] lg:min-h-[70vh]  bg-black  flex flex-col items-center justify-center"
                data-aos="fade-left"
              >
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
              </div>
              {/* <img
                className="w-11/12 lg:w-4/6 min-h-[60vh] sm:min-h-[40vh] lg:min-h-[80vh] object-cover"
                src="/assets/About-Section2-img.png"
              /> */}
            </div>
          </div>
        </div>

        <div
          className="  
                   bg-gradient-to-b   from-[#FFBF35]   to-[#cf8d00]  

        
        pt-8  flex flex-col items-center w-full lg:py-8    px-8 lg:px-20 xl:px-24"
        >
          <div className=" lg:h-[100vh] flex flex-col lg:flex-row items-center justify-between w-full">
            <div
              className="  flex flex-col items-center w-full  lg:w-6/12 "
              data-aos="fade-right"
            >
              <p
                className={`mb-2 text-[4vw] md:text-[6vw] text-black text-center lg:text-[1.2vw] ${playfairDisplay.className}`}
              >
                Our films are not just meant to be watched—they’re meant to be
                lived
              </p>
              <div className="border border-gray-500 relative   lg:h-[80vh] bg-black  flex flex-col items-center justify-center">
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
              className={`mt-4 text-center lg:mt-0 w-full lg:w-5/12 text-[3.5vw] md:text-[4vw]   lg:text-[2.4vw] ${playfairDisplay.className}`}
            >
              At Locomotive, we elevate Middle Eastern cinema with authentic
              films that resonate deeply.
            </p>
          </div>
        </div>
        <div className=" bg-gradient-to-b  from-[#cf8d00]       via-black  to-black  pt-8  flex flex-col items-center w-full lg:py-8    px-8 lg:px-20 xl:px-24">
          <div className=" lg:h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between w-full">
            <p
              data-aos="fade-right"
              className={`mt-6  text-white text-center lg:mt-0 w-full lg:w-5/12 text-[3.5vw] md:text-[4vw] lg:text-[2.4vw] ${playfairDisplay.className}`}
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
        <div className="text-white text-center bg-black  pt-8  flex flex-col items-center w-full lg:py-8  py-4  px-8 lg:px-20 xl:px-24">
          <div className=" lg:h-[100vh] flex flex-col lg:flex-row items-center justify-between w-full">
            <div
              className="flex flex-col-reverse lg:flex-col items-center w-full lg:w-6/12"
              data-aos="fade-right"
            >
              <p
                className={`mb-2 mt-4 lg:mt-0 text-[5vw] md:text-[6vw] lg:text-[2.3vw] ${playfairDisplay.className}`}
              >
                Executive producer
              </p>
              <div className="border border-gray-500 relative w-full lg:w-11/12  lg:h-[80vh]  bg-black  flex flex-col items-center justify-center">
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
              className={`w-full lg:w-5/12 lg:h-[75vh] flex flex-col items-center justify-center`}
              data-aos="fade-left"
            >
              <p
                className={` lg:w-11/12 mb-8 ${playfairDisplay.className} text-[3.5vw] md:text-[4vw] lg:text-[1.2vw] text-center`}
              >
                Mariam Al Kaabi, our Executive Producer, plays a pivotal role in
                bringing Locomotive’s vision to life. As a key investor, her
                support and dedication to elevating Middle Eastern cinema have
                been instrumental in our journey.
              </p>
              <p
                className={` lg:w-11/12  ${playfairDisplay.className} text-[3.5vw] md:text-[4vw] lg:text-[1.2vw] text-center`}
              >
                Mariam’s belief in the power of storytelling and her commitment
                to quality are integral to ensuring that every project we
                undertake reaches its full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecondSection;
