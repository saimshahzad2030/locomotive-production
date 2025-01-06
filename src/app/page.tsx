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
      <div className="relative z-10">
        <AboutHome />
        <WhyUsHome />
        <Footer />
      </div>
    </div>
  );
}
