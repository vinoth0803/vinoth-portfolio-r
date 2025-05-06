
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  grade?: string;
}

const educationData: Education[] = [
  {
    degree: "Master of Computer Applications",
    institution: "SRM University, Chengalpet",
    duration: "2023 - 2025",
    description: "Specialized in software development and computer algorithms with focus on web technologies",
    grade: "8.97 / 10"
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "SRM Arts and Science College, Chengalpet",
    duration: "2020 - 2023",
    description: "Science stream with Computer Science as elective",
    grade: "8.32 / 10"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background that has shaped my knowledge and expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
                <div className="mt-1 p-2 bg-primary/10 text-primary rounded-full">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mb-2">{edu.duration}</p>
                  
                  {edu.grade && (
                    <p className="text-sm font-medium">
                      CGPA: <span className="text-primary">{edu.grade}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
