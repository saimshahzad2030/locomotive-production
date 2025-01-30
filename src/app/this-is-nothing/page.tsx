import CastSection from "@/components/Cast/CastSection";
import LandingSection from "@/components/Landing copy/LandingSection";
import Navbar from "@/components/Navbar/Navbar";
import PictureSection from "@/components/PictureSection/PictureSection";
import SypnsosisSection from "@/components/SypnosisSection/SypnsosisSection";
import React from "react";

const ThisIsNothingPage = () => {
  return    <div className="w-full flex flex-col items-center "> 
  <Navbar /> 
<div className="bg-black w-full">
  <LandingSection />
</div>
<div
  className="bg-black top-[100vh] w-full flex flex-col items-center  bg-repeat-y bg-center relative"
  // style={{ backgroundImage: "url(/assets/noise-bg-3.gif)" }}
>
  <SypnsosisSection />
  <CastSection />
  <PictureSection />
</div>
</div>
};

export default ThisIsNothingPage;
