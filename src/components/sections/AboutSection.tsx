
import { Card } from "@/components/ui/card";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            
            <p className="mb-4 text-muted-foreground">Hello, I'm Vinoth B, a full-stack web developer with a Master's degree in Computer Applications. I have experience building scalable web solutions, including management systems and e-commerce platforms. My work combines technical precision with a strong focus on user experience.</p>
            
            <p className="mb-6 text-muted-foreground">Beyond development, I've led student councils and organized tech events, showcasing strong leadership and collaboration skills. I value continuous learning and actively explore new tools and frameworks. My approach is always solution-driven, with an eye toward innovation and impact.</p>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative max-w-sm mx-auto">
              {/* Circular image with border */}
              <div className="aspect-square rounded-full overflow-hidden relative border-4 border-primary/30 glow">
                <img src="/lovable-uploads/784a8bfd-3722-433d-a8c4-335a4d51a63a.png" alt="Profile" className="h-full w-full object-cover" />
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
