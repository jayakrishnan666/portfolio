import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Logo Design",
      category: "graphic-design",
      image: "https://ik.imagekit.io/jfrxd48vxl/61c16ab5-f328-498c-b529-9f6c3e0e043c.png?updatedAt=1751048386148",
      description: "Completed Logo Design for a Cyber Security App ZYNC   ",
      tags: ["App", "Logo Design", "Identity"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "BookNest   ",
      category: "web-development",
      image: "https://ik.imagekit.io/jfrxd48vxl/booknest.png?updatedAt=1750735356755",
      description: "Developed a full-featured e-commerce site for books with secure payment, user authentication, and admin controls",
      tags: ["python", "Django", "HTML", "CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/jayakrishan666/booknest"
    },  
    {
      id: 3,
      title: "Logo Design",
      category: "graphic-design",
      image: "https://ik.imagekit.io/jfrxd48vxl/PVM.png?updatedAt=1751048386838",
      description: "Minimalist logo design for furniture mart reflecting comfort and elegance.",
      tags: ["Branding", "Logo Design", ],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Laundry Management System",
      category: "web-development",
      image: "https://ik.imagekit.io/jfrxd48vxl/output.png?updatedAt=1750735356770",
      description: "Developed a web-based laundry management system for Hostels and apppartments",
      tags: ["Python", "Django", "HTML", "CSS"],
      link: "https://lms.pythonanywhere.com/login",
      github: "https://github.com/jayakrishan666/laundry_management.git"
    },
    // {
    //   id: 5,
    //   title: "Poster Series",
    //   category: "graphic-design",
    //   image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
    //   description: "Creative poster series for music festival featuring bold typography and colors.",
    //   tags: ["Poster", "Typography", "Creative"],
    //   link: "#",
    //   github: "#"
    // },
    {
      id: 6,
      title: "BCA Books",
      category: "web-development",
      image: "https://ik.imagekit.io/jfrxd48vxl/ChatGPT%20Image%20Jun%2024,%202025,%2009_45_36%20AM.png?updatedAt=1750738556262",
      description: "Created a portal for BCA students to access semester-wise notes and study materials.",
      tags: ["HTML", "CSS", "PHP", "MySQL"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "graphic-design", label: "Graphic Design" },
    { id: "web-development", label: "Web Development" }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-32 left-32 w-20 h-20 border-2 border-purple-500/10 rounded-lg rotate-45"
        />
        <motion.div
          animate={{ 
            y: [-40, 40, -40],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my best work in graphic design and web development
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.div
              key={filter.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "border-purple-300/50 text-purple-300 hover:bg-purple-900/20 hover:border-purple-400/70"
                }`}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="group hover:scale-105 transition-all duration-500 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-2">
                      {project.link && project.link !== "#" ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      ) : (
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700" disabled>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.github && project.github !== "#" ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-slate-700 hover:bg-slate-600">
                            <Github className="w-4 h-4" />
                          </Button>
                        </a>
                      ) : (
                        <Button size="sm" className="bg-slate-700 hover:bg-slate-600" disabled>
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-700/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
