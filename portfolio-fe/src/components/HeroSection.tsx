import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mb-2">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-lavender-500/20 rounded-full blur-3xl animate-pulse-lavender"></div>
        <div
          className="absolute bottom-40 right-20 w-48 h-48 bg-lavender-400/20 rounded-full blur-3xl animate-pulse-lavender"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lavender-600/10 rounded-full blur-3xl animate-pulse-lavender"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture Section */}
          <div className="mb-8 mt-12 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-lg blur-lg"></div>
              <div className="w-40 h-48 md:w-48 md:h-56 border border-black relative z-10 overflow-hidden rounded-lg bg-lavender-700/20">
                <img
                  src="/mii.JPG"
                  alt="Profile"
                  className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 mix-blend-luminosity"
                />
                <div className="absolute inset-0"></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-200 via-lavender-300 to-lavender-800 bg-clip-text text-transparent">
              Ahmad Ali
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-lavender-200 mb-4 font-light">
            Full-Stack Developer | MERN Stack Expert | Passionate Problem Solver
          </p>

          <p className="text-sm md:text-lg text-lavender-300 mb-12 max-w-2xl mx-12 md:mx-auto leading-relaxed">
            Full-Stack Developer skilled in the MERN stack, crafting fast,
            scalable, and user-focused web applications. From robust backend
            systems to sleek frontends, I turn ideas into modern digital
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                onClick={onContactClick}
                size="lg"
                className="bg-gradient-to-r from-lavender-500 to-lavender-800 hover:scale-105 hover:transition hover:duration-300 transition duration-1000 animate-glow px-8 py-3 text-lg font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>

            <a href="/Ahmad-Ali-19Feb25.docx" download>
              <Button
                variant="outline"
                size="lg"
                className="border-lavender-500/50 text-lavender-400 hover:bg-lavender-500/10 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume`
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/xahmad-ali"
              target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-midnight-800/50 hover:bg-lavender-500/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-lavender-300 group-hover:text-lavender-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-ali-982049296/"
              target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-midnight-800/50 hover:bg-lavender-500/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-lavender-300 group-hover:text-lavender-400" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=ahmadhashmi152003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-midnight-800/50 hover:bg-lavender-500/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-lavender-300 group-hover:text-lavender-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 right-1/3 transform -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-6 h-10 border-2 border-lavender-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lavender-400 rounded-full mt-2 animate-pulse-lavender"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
