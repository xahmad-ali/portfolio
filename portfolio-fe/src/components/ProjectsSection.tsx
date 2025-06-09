import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Gravity Gears",
      description:
        "An online single-vendor platform for electronic accessories, built with the MERN stack. Features include product catalog, cart system, checkout process, and admin management. (Work in progress)",
      image:
        "/GG.PNG",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/xahmad-ali/Gravity-Gears",
      demo: "#",
      featured: true,
    },
    {
      title: "Movie Recommender System",
      description:
        "Created a movie recommendation engine using TF-IDF and cosine similarity. Suggests similar movies based on user input. Built with Python and scikit-learn.",
      image: "/movie.PNG",
      technologies: ["Python", "scikit-learn", "Pandas", "Flask"],
      github: "https://github.com/xahmad-ali/ML_movie_recommender",
      demo: "https://movie-recommender-2-fe.onrender.com",
      featured: true,
    },
    {
      title: "AI Garden Vision Plantify",
      description:
        "A computer vision system to identify plant species and detect early signs of disease using a deep learning model and a mobile-integrated app interface.",
      image:
        "https://plus.unsplash.com/premium_photo-1679438493858-ed7c1f51da60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnQlMjBzaG9wfGVufDB8MHwwfHx8MA%3D%3D",
      technologies: ["TensorFlow", "Next.js", "FastAPI"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Portfolio CMS",
      description:
        "A custom CMS solution to dynamically manage personal portfolio content with markdown support, image uploads, and authentication.",
      image:
        "https://images.unsplash.com/photo-1629839958207-5400ab5e1e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHBvcnRmb2xpbyUyMHRlbXBsYXRlc3xlbnwwfDB8MHx8fDA%3D",
      technologies: ["Next.js", "TypeScript", "Cloudinary", "Sanity"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-midnight-950 border border-midnight-900 border-dotted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-white via-lavender-400 to-lavender-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-lavender-200 max-w-3xl mx-auto leading-relaxed">
            A curated selection of real-world applications, machine learning
            systems, and full-stack platforms that highlight my development
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <Card
                key={project.title}
                className="bg-midnight-800/30 border-midnight-700/50 hover:border-lavender-500/50 transition-all duration-500 card-glow hover:scale-[1.02] group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-lavender-500/20 backdrop-blur-sm rounded-full p-2">
                      <Sparkles className="w-4 h-4 text-lavender-400 animate-pulse-lavender" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-lavender-200 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-lavender-500/20 text-lavender-400 rounded-full border border-lavender-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                      variant="outline"
                      size="sm"
                      className="border-lavender-500/50 text-lavender-400 hover:bg-lavender-500/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button
                      size="sm"
                      className="bg-lavender-accent hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                    </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <Card
                key={project.title}
                className="bg-midnight-800/20 border-midnight-700/30 hover:border-lavender-500/30 transition-all duration-300 hover:scale-[1.02] group"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/60 to-transparent"></div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-lavender-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-midnight-700/50 text-lavender-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-lavender-300 hover:text-lavender-400 p-0 h-auto"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-lavender-300 hover:text-lavender-400 p-0 h-auto"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
