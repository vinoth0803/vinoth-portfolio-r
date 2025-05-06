
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-20 md:pb-32">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-3xl flex flex-col items-center text-center">
          <p className="text-primary mb-4 font-medium">Hi, my name is</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 glow-text lg:text-6xl">Vinoth Balasubramanian</h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
            I'm a full-stack developer specializing in crafting digital experiences
            that are elegant, accessible, and high-performing. Let's turn your vision into reality.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size={isMobile ? "default" : "lg"} 
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size={isMobile ? "default" : "lg"} 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
