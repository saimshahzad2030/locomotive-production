// "use client";
// import { playfairDisplay } from "@/utils/fonts";
// import React from "react";

// const AboutHome = () => {
//   return (
//     <div className="flex flex-col items-center w-full">
//       <div className="py-8 h-[100vh] flex flex-col items-center justify-center px-8 bg-black absolute top-[100vh]">
//         <div className="flex flex-col items-center w-full mb-8">
//           <div
//             className={` sm:hidden flex flex-col items-center   leading-[40px]  font-bold text-[40px]   text-white ${playfairDisplay.className} w-4/12`}
//           >
//             <h1 className={`   `}>ABOUT</h1>
//             <h1 className={` opacity-55`}>ABOUT</h1>
//             <h1 className={`  opacity-25`}>ABOUT</h1>
//           </div>
//         </div>
//         <div className="flex flex-row items-center justify-between">
//           <div
//             className={`hidden sm:flex flex-col items-start sm:leading-[50px] sm:text-[55px] md:leading-[60px] md:text-[60px] lg:leading-[85px] xl:leading-[100px]  font-bold lg:text-[90px] xl:text-[110px] text-white ${playfairDisplay.className} w-4/12`}
//           >
//             <h1 className={`   `}>ABOUT</h1>
//             <h1 className={` opacity-55`}>ABOUT</h1>
//             <h1 className={`  opacity-25`}>ABOUT</h1>
//           </div>
//           <div
//             className={`flex flex-col items-center justify-center w-5/12 sm:w-3/12 text-white ${playfairDisplay.className}`}
//           >
//             <p className="text-start text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm">
//               At Locomotive, we believe in the power of storytelling. Founded in
//               2021 in the Emirates, we are a film production company reshaping
//               Middle Eastern cinema. Our mission is simple: to create films that
//               feel as real as life itself, connecting deeply with audiences.
//               We’re not just making movies; we’re crafting experiences. Our
//               debut action film is a testament to our commitment to quality,
//               realism, and authenticity, delivering stories that leave viewers
//               feeling like they’ve lived the journey themselves.
//             </p>
//           </div>
//           <img
//             src="/assets/AboutSection-side-image.png"
//             alt="about image"
//             className="w-6/12 sm:w-4/12 h-auto"
//           />
//         </div>
//       </div>
//       <div className="h-[100vh] flex flex-col items-center justify-center px-8 bg-black absolute top-[200vh]">
//         <div className="flex xl:flex-row flex-col justify-between  ">
//           <img
//             className="w-11/12 sm:w-9/12 xl:w-7/12 h-auto"
//             src="/assets/AboutSection-bg-image.png"
//             alt="about Bg"
//           />
//           <div
//             className={`flex flex-col items-center justify-end p-4 relative  ${playfairDisplay.className}`}
//           >
//             <div className=" absolute bottom-[350px] sm:bottom-[320px] md:bottom-[320px] right-[8%] sm:right-[20%] xl:top-[10px] xl:left-[-190px] h-32 w-32 sm:h-40 md:h-52 lg:h-60 sm:w-40 md:w-52 lg:w-60 bg-white rounded-full flex flex-col items-center justify-center z-[100]">
//               <div className="relative text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px] flex flex-row items-center justify-center">
//                 <h1 className="uppercase font-bold ml-12 absolute right-[-145px] sm:right-[-182px] md:right-[-235px] lg:right-[-270px] min-w-[150px] sm:min-w-[180px] md:min-w-[250px] lg:min-w-[310px]  sm:leading-[30px] md:leading-[50px]">
//                   <span className="text-black">More</span>
//                   <span className="text-white"> than </span>Just a{" "}
//                   <span className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[60px]">
//                     Mov<span className="text-white">ie</span>
//                   </span>
//                 </h1>
//               </div>
//             </div>
//             <p className="text-start text-white">
//               When you watch our debut action film, you're not just observing a
//               story—you’re entering a world that feels real. Every scene, every
//               sound, is crafted to pull you in. We focus on realistic action,
//               stunning cinematography, and performances that bring complex,
//               flawed characters to life —characters you’ll see parts of yourself
//               in. Our commitment to authenticity makes this more than just
//               entertainment. It’s a gripping, immersive experience that lingers
//               long after the credits roll.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`pt-4 h-[100vh] flex flex-col items-center justify-center px-8 bg-black absolute top-[300vh] text-white  ${playfairDisplay.className}`}
//       >
//         <div className="flex lg:flex-row flex-col items-center justify-between">
//           <div className="w-9/12   lg:hidden flex flex-col items-center justify-center bg-white">
//             <h1 className="text-center font-bold text-[70px] text-black leading-[70px] py-4">
//               Setting <br />a New <br />
//               Standard
//             </h1>
//           </div>
//           <div className="pt-8 lg:pt-0 my-4 lg:my-0 w-full lg:w-3/12 flex flex-col items-start">
//             <p>
//               We are not just another production company we are a movement. At
//               Locomotive, we are setting a new standard for Arabic cinema by
//               focusing on authenticity, high-quality production, and stories
//               that resonate with the modern viewer.We go above and beyond to
//               deliver films that stand out, not just in the Middle East, but on
//               a global scale.
//             </p>
//             <p className="mt-2">
//               Our approach is different. From the cutting-edge technology we use
//               to our unwavering commitment to excellence, we ensure that every
//               film we produce reflects the highest standards of craftsmanship.
//               We are proud to be the first in the region to offer our films both
//               in theaters and on our website, creating a seamless viewing
//               experience for all our fans.
//             </p>
//           </div>
//           <div className=" my-4 lg:my-0 hidden w-4/12 lg:flex flex-col items-center justify-center bg-white">
//             <h1 className="text-center font-bold text-[70px] text-black">
//               Setting <br />a <br />
//               New <br />
//               Standard
//             </h1>
//           </div>
//           <div className="my-4 lg:my-0 w-full lg:w-4/12 flex flex-col items-center justify-center bg-white">
//             <img
//               className="w-auto h-full"
//               src="/assets/AboutSection-side-image2.png"
//               alt="About Image 2"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutHome;

"use client";
import { gabirato, lexend, playfairDisplay } from "@/utils/fonts";
import React from "react";
import Footer from "../Footer/Footer";
import WhyUsHome from "../WhyUs/WhyUsHome";

const AboutHome = () => {
  return (
    <div className="z-10 flex flex-col items-center w-full">
      <div className="py-8  flex flex-col items-center justify-center px-8 bg-black absolute top-[100vh]">
        <div className="flex flex-col items-center w-full mb-8">
          <div
            className={` sm:hidden flex flex-col items-center   leading-[40px]  font-bold text-[40px]   text-white ${playfairDisplay.className} w-4/12`}
          >
            <h1 className={`   `}>ABOUT</h1>
            <h1 className={` opacity-55`}>ABOUT</h1>
            <h1 className={`  opacity-25`}>ABOUT</h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div
            className={`hidden sm:flex flex-col items-start sm:leading-[50px] sm:text-[55px] md:leading-[60px] md:text-[60px] lg:leading-[85px] xl:leading-[100px]  font-bold lg:text-[90px] xl:text-[110px] text-white ${playfairDisplay.className} w-4/12`}
          >
            <h1 className={`   `}>ABOUT</h1>
            <h1 className={` opacity-55`}>ABOUT</h1>
            <h1 className={`  opacity-25`}>ABOUT</h1>
          </div>
          <div
            className={`flex flex-col items-center justify-center w-5/12 sm:w-3/12 text-white ${playfairDisplay.className}`}
          >
            <p className="text-start text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm">
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
            className="w-6/12 sm:w-4/12 h-auto"
          />
        </div>
        <div className="pt-8 flex xl:flex-row flex-col justify-between  ">
          <img
            className="w-11/12 sm:w-9/12 xl:w-7/12 h-auto"
            src="/assets/AboutSection-bg-image.png"
            alt="about Bg"
          />
          <div
            className={`flex flex-col items-center justify-end p-4 relative  ${playfairDisplay.className}`}
          >
            <div className=" absolute bottom-[280px] sm:bottom-[320px] md:bottom-[320px] right-[14%] sm:right-[20%] xl:top-[10px] xl:left-[-190px] h-24 w-24 sm:h-40 md:h-52 lg:h-60 sm:w-40 md:w-52 lg:w-60 bg-white rounded-full flex flex-col items-center justify-center z-[100]">
              <div className="relative text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px] flex flex-row items-center justify-center">
                <h1 className="uppercase font-bold ml-12 absolute right-[-132px] sm:right-[-182px] md:right-[-235px] lg:right-[-270px] min-w-[150px] sm:min-w-[180px] md:min-w-[250px] lg:min-w-[310px] leading-[25px] sm:leading-[30px] md:leading-[50px]">
                  <span className="text-black">More</span>
                  <span className="text-white"> than </span>Just a{" "}
                  <span className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[60px]">
                    Mov<span className="text-white">ie</span>
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-start text-white text-[12px] sm:text-[16px]">
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
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div className="w-full  rounded-md   lg:hidden flex flex-col items-center justify-center bg-white">
            <h1 className="uppercase text-center font-bold text-[30px] sm:text-[70px] text-black leading-[40px] sm:leading-[70px] py-4">
              Setting <br />a New <br />
              Standard
            </h1>
          </div>
          <div className="pt-8 lg:pt-0 my-4 lg:my-0 w-full lg:w-3/12 flex flex-col items-start text-white">
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
          <div className=" my-4 lg:my-0 hidden w-4/12 lg:flex flex-col items-center justify-center bg-white">
            <h1 className="text-center font-bold text-[70px] text-black uppercase">
              Setting <br />a <br />
              New <br />
              Standard
            </h1>
          </div>
          <div className="my-4 lg:my-0 w-full lg:w-4/12 flex flex-col items-center justify-center bg-white">
            <img
              className="w-auto h-full"
              src="/assets/AboutSection-side-image2.png"
              alt="About Image 2"
            />
          </div>
        </div>
        <WhyUsHome />
        <Footer />
      </div>
    </div>
  );
};

export default AboutHome;
