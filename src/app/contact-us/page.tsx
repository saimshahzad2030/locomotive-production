import ContactUsLanding from "@/components/ContactUsLanding/ContactUsLanding";
import ContactUsFooter from "@/components/ContactUsSecondSection/ContactUsFooter";
import ContactUsSecondSection from "@/components/ContactUsSecondSection/ContactUsSecondSection";
import Navbar from "@/components/Navbar/Navbar";
export default function Contact() {
  return (
    <div className="relative w-full">
      <Navbar />
      <ContactUsLanding />
      <ContactUsSecondSection />
      <ContactUsFooter />
    </div>
  );
}
