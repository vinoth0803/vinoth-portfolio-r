
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "../ProjectCard";

type ProjectCategory = "all" | "web" | "backend" | "beginner";

const projects = [
  {
    id: 1,
    title: "TOWNMENT",
    description: "Developed a structured residence & maintenance management system to streamline workflows. Focusing on backend development & API integration to enhance operational efficiency. Credentials: admin / chillisauce321@gmail.com / Townment@admin123, tenant / user@example.com / user@123.",
    tags: ["PHP", "My SQL", "Tailwindcss", "Razorpay"],
    imageUrl: "/lovable-uploads/183b20b6-3289-476b-9295-f14a26c354b4.png",
    liveUrl: "https://vrishaba.com/vinoth/",
    githubUrl: "https://github.com/vinoth0803/townment",
    category: "web"
  },
  {
    id: 2,
    title: "Budget Tracker",
    description: "Developed a simple static budget tracker application to help users manage their finances effectively. Focused on frontend development using HTML, CSS, and JavaScript. Currently, the app is static and does not include backend functionality. It is designed to provide a user-friendly interface for tracking income and expenses.",
    tags: ["HTML", "Tailwindcss", "Javascript"],
    imageUrl: "/lovable-uploads/d808a752-7692-4425-bcf2-65164d448747.png",
    liveUrl: "https://vinoth0803.github.io/Budget-Tracker-App-Static/",
    githubUrl: "https://github.com/vinoth0803/Budget-Tracker-App-Static",
    category: "web"
  },
  {
    id: 3,
    title: "Whatsapp-Birthday-Bot ",
    description: "A Bot System that automates birthday wishes on WhatsApp using Nodejs and Cron scheduler. It sends personalized messages to contacts on their birthdays, enhancing user engagement and interaction.",
    tags: ["node-cron", "google-sheets api", "Node.js", "venom bot"],
    imageUrl: "/lovable-uploads/chat-bot-2.png",
    liveUrl: "https://github.com/vinoth0803/whatsapp-birthday-bot",
    githubUrl: "https://github.com/vinoth0803/whatsapp-birthday-bot",
    category: "backend"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio website template with smooth animations and dark mode support.",
    tags: ["React", "Tailwind CSS", "Typescript", "shadcn /ui"],
    imageUrl: "/lovable-uploads/portfolio.jpg",
    liveUrl: "https://vinoth-portfolio-r.vercel.app/",
    githubUrl: "https://github.com/vinoth0803/vinoth-portfolio-r",
    category: "web" 
  },
  {
    id: 6,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and interactive maps.",
    tags: ["JavaScript", "OpenWeather API", "Mapbox", "CSS3"],
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    liveUrl: "https://weather-app-delta-mocha-38.vercel.app/",
    githubUrl: "https://github.com/vinoth0803/weather-app",
    category: "beginner"
  },
  {
    id: 7,
    title: "Instagram Reel Donwloader",
    description: "Simple instagram reel downloader application that allows users to download Instagram reels easily.",
    tags: ["Python", "Insta Loader"],
    imageUrl: "/lovable-uploads/instagram.png",
    liveUrl: "#",
    githubUrl: "https://github.com/vinoth0803/Instagram-Reel-Downloader",
    category: "backend"
  },
  {
    id: 8,
    title: "Job Admin Interface",
    description: "A dynamic full-stack job listing platform designed to streamline job posting and discovery for both employers and job seekers. The platform features a user-friendly interface for employers to post job listings and manage applications, while job seekers can easily search and apply for jobs.",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    imageUrl: "/lovable-uploads/job-admin-interface.png",
    liveUrl: "https://job-frontend-nl1m.onrender.com/",
    githubUrl: "https://github.com/vinoth0803/CMW-job-admin",
    category: "web"
  },
  {
    id: 8,
    title: "Personal Bio Link Page",
    description: "A Personal Bio Link Page is a simple yet effective way to showcase your social media profiles, portfolio, and other important links in one place. It allows you to create a single link that directs visitors to all your relevant online presence.",
    tags: ["React", "Vite", "Tailwind CSS", "shadcn/ui","Lovable"],
    imageUrl: "/lovable-uploads/linkbio.png",
    liveUrl: "https://linktree-vinothxai.vercel.app/",
    githubUrl: "https://github.com/buildwithvinoth/linktree-vinothxai",
    category: "web"
  }
  
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore a collection of my recent projects showcasing my skills in web development
            and UI/UX design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button 
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            <Button 
              variant={activeCategory === "web" ? "default" : "outline"}
              onClick={() => setActiveCategory("web")}
              className="rounded-full"
            >
              Web Development
            </Button>
            <Button 
              variant={activeCategory === "backend" ? "default" : "outline"}
              onClick={() => setActiveCategory("backend")}
              className="rounded-full"
            >
              Backend
            </Button>
            <Button 
              variant={activeCategory === "beginner" ? "default" : "outline"}
              onClick={() => setActiveCategory("beginner")}
              className="rounded-full"
            >
              Beginner
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
