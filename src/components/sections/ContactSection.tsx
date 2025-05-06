
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_4hhd87s',
        'template_l4ftzcw',
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'JziAuLBQEYiE4N5_r'
      );
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-medium mb-2">Email</h3>
              <a href="mailto:vinothkrish0803@gmail.com" className="text-sm text-primary hover:underline">
                vinothkrish0803@gmail.com
              </a>
            </Card>

            <Card className="glass-card p-6 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Github className="text-primary" size={24} />
              </div>
              <h3 className="font-medium mb-2">GitHub</h3>
              <a href="https://github.com/vinoth0803" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                github.com/vinoth0803
              </a>
            </Card>

            <Card className="glass-card p-6 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Linkedin className="text-primary" size={24} />
              </div>
              <h3 className="font-medium mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/vinothb0803/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                linkedin.com/in/vinothb0803
              </a>
            </Card>
          </div>

          <Card className="glass-card p-8 mt-8">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-primary/20 focus-visible:ring-primary"
                    placeholder="Arun kumar"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-primary/20 focus-visible:ring-primary"
                    placeholder="user@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-primary/20 focus-visible:ring-primary"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-primary/20 focus-visible:ring-primary min-h-[120px]"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
