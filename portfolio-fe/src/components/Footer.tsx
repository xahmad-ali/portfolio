import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000711] border-t border-[#000711]-800/70 py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Branding */}
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <Sparkles className="w-6 h-6 text-lavender-400 mr-2 animate-soft-pulse" />
              <h3 className="text-2xl font-extrabold text-white tracking-wide">
                Ahmad Ali
              </h3>
            </div>
            <p className="text-lavender-300 leading-relaxed text-sm">
              Full-Stack Developer crafting elegant and efficient digital
              solutions. Let’s build something extraordinary together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-lavender-300 hover:text-lavender-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-lavender-300 hover:text-lavender-400 transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-lavender-300 hover:text-lavender-400 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Connect */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://github.com/xahmad-ali"
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full bg-midnight-800/50 hover:bg-lavender-500/20 transition-all duration-300 hover:scale-105 group"
              >
                <Github className="w-5 h-5 text-lavender-300 group-hover:text-lavender-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-ali-982049296/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-midnight-800/50 hover:bg-lavender-500/20 transition-all duration-300 hover:scale-105 group"
              >
                <Linkedin className="w-5 h-5 text-lavender-300 group-hover:text-lavender-400" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=ahmadhashmi152003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="p-2 rounded-full bg-midnight-800/50 hover:bg-lavender-500/20 transition-all duration-300 hover:scale-105 group"
              >
                <Mail className="w-5 h-5 text-lavender-300 group-hover:text-lavender-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-midnight-700/50 pt-6 text-center text-sm text-lavender-400">
          <p>© {new Date().getFullYear()} Ahmad Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
