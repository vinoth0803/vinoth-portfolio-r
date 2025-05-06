
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen 
          ? 'bg-background/95 backdrop-blur-md py-4 shadow-md' 
          : 'bg-background/70 backdrop-blur-sm py-6'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-gradient">VB</a>
        
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#about" className="text-sm hover:text-primary transition-colors">About</a></li>
          <li><a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a></li>
          <li><a href="#education" className="text-sm hover:text-primary transition-colors">Education</a></li>
          <li><a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a></li>
        </ul>
        
        <div className="flex items-center space-x-4">
          <a href="https://github.com/vinoth0803" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/vinothb0803/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:vinothkrish0803@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
          
          <Button className="ml-2 hidden md:flex" onClick={() => window.open('/resume.pdf', '_blank')}>Resume</Button>
          
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-primary"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-40 animate-fade-in">
          <div className="container mx-auto px-4 py-8">
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <a 
                  href="#about" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li className="pt-4">
                <Button className="w-full" onClick={() => window.open('/resume.pdf', '_blank')}>Resume</Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
