import AboutHome from "@/components/About/AboutHome";
import Footer from "@/components/Footer/Footer";
import LandingHome from "@/components/Landing/LandingHome";
import Navbar from "@/components/Navbar/Navbar";
import ThisIsNothingSection from "@/components/ThisIsNothingSection/ThisIsNothingSection";
import WhyUsHome from "@/components/WhyUs/WhyUsHome";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-4 backdrop-blur-sm bg-white bg-opacity-5"></div> */}

      <Navbar />
      <ThisIsNothingSection />
      <LandingHome />
      <AboutHome />
    </div>
  );
}
