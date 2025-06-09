import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Sparkles, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Skilled in building scalable full-stack applications using React, TypeScript, Node.js, and the modern web ecosystem.",
      color: "lavender-400",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Focused on crafting elegant, user-centered interfaces that balance aesthetics with usability.",
      color: "lavender-500",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Driven by curiosity, I integrate emerging technologies to build innovative and impactful digital solutions.",
      color: "lavender-600",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "A strong team player who values open communication and collaborative problem-solving in agile environments.",
      color: "lavender-400",
    },
  ];

  return (
    <section className="py-20 px-6 bg-midnight-950 border border-midnight-900 border-dotted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-slate-200 via-lavender-300 to-lavender-800 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-lavender-200 max-w-3xl mx-auto leading-relaxed">
            I’m Ahmad Ali, a passionate Full-Stack Developer with a MERN stack foundation. I blend clean code, creative design, and modern practices to build exceptional digital products that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="bg-midnight-800/30 border-midnight-700/50 hover:border-lavender-500/50 transition-all duration-300 card-glow hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-full bg-${skill.color}/20 group-hover:animate-pulse-lavender`}>
                    <skill.icon className={`w-8 h-8 text-${skill.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
                <p className="text-lavender-300 leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-lavender-400">My Journey</h3>
            <p className="text-lavender-200 mb-6 leading-relaxed">
              My journey began with curiosity and a love for technology. Over time, I transformed that passion into a full-stack skillset, crafting backend systems and designing frontend experiences with equal dedication.
            </p>
            <p className="text-lavender-200 leading-relaxed">
              Outside of code, I explore new tech trends, contribute to open-source, and engage with the dev community. I believe in continuous learning and staying ahead in a fast-paced digital world.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-lavender-accent p-1 animate-glow">
              <div className="w-full h-full rounded-2xl bg-midnight-900 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lavender-500/20 rounded-full blur-2xl animate-pulse-lavender"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-lavender-400/20 rounded-full blur-2xl animate-pulse-lavender"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
