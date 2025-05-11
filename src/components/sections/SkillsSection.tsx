
import { Card } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <Card className="glass-card p-6">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js(Familiar)", "Express (Familiar)", "MongoDB","My SQL", "REST API", "Firebase", "Python"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Webpack", "Vercel", "Netlify", "Postman", "Agile Methodologies"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and expertise gained 
            through years of professional experience and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
