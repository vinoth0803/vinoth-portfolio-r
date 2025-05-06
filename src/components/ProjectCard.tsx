
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden glass-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="gap-1">
                  <Github size={16} /> Code
                </Button>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="gap-1">
                  View Live <ArrowRight size={14} />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
