
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track mobile menu state for dimming the content
  useEffect(() => {
    const handleMenuChange = (e: Event) => {
      if ((e.target as HTMLElement)?.closest('button')?.getAttribute('aria-label') === 'Toggle mobile menu') {
        setMobileMenuOpen(prev => !prev);
      }
    };

    document.addEventListener('click', handleMenuChange);
    return () => document.removeEventListener('click', handleMenuChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow pt-20 transition-all duration-300 ${mobileMenuOpen ? 'brightness-50' : ''}`}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
