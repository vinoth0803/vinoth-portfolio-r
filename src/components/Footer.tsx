
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-gradient">Vinoth B</a>
            <p className="text-muted-foreground mt-2 text-sm">Full Stack Web Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/vinoth0803" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vinothb0803/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vinothkrish0803@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-xs">© {currentYear} Vinoth Balasubramanian. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
