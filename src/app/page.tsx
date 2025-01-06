import AboutHome from "@/components/About/AboutHome";
import Footer from "@/components/Footer/Footer";
import LandingHome from "@/components/Landing/LandingHome";
import Navbar from "@/components/Navbar/Navbar";
import WhyUsHome from "@/components/WhyUs/WhyUsHome";

export default function Home() {
  return (
    <div className="relative w-full">
      <Navbar />
      <LandingHome />
      <AboutHome />
    </div>
  );
}
