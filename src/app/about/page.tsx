import AboutHome from "@/components/About/AboutHome";
import AboutSecondSection from "@/components/AboutSecondSection/AboutSecondSection";
import LandingAbout from "@/components/LandingAbout/LandingAbout";
import Navbar from "@/components/Navbar/Navbar";

export default function About() {
  return (
    <div className="relative w-full opacity-100">
      <Navbar />
      <LandingAbout />
      <AboutSecondSection />
    </div>
  );
}
