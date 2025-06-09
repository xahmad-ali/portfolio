import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-midnight-950">
      <HeroSection onContactClick={handleScrollToContact} />
      <AboutSection />
      <ProjectsSection />
      <ContactSection contactRef={contactRef} />
      <Footer />
    </div>
  );
};

export default Index;
