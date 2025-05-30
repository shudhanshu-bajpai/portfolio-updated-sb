"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Streamly",
      description:
        "Real-time chat application with authentication, online status, and modern UI.",
      longDescription:
        "Streamly Chat is a full-stack, real-time chat application built using the MERN stack with Socket.io for instant messaging. It features JWT-based authentication and authorization, online user status indication, and global state management with Zustand. The app boasts a responsive, modern UI built using TailwindCSS and DaisyUI. It includes robust error handling on both client and server sides and is deployable for free with best practices. Designed to be scalable, responsive, and developer-friendly.",
      image: "/assets/streamly.png?height=300&width=400",
      tech: [
        { name: "MongoDB", icon: "🍃", category: "database" },
        { name: "Express.js", icon: "🚂", category: "backend" },
        { name: "React", icon: "⚛️", category: "frontend" },
        { name: "Node.js", icon: "🟢", category: "backend" },
        { name: "Socket.io", icon: "📡", category: "realtime" },
        { name: "TailwindCSS", icon: "🎨", category: "frontend" },
        { name: "DaisyUI", icon: "🌼", category: "frontend" },
        { name: "Zustand", icon: "🧠", category: "state-management" },
        { name: "JWT", icon: "🔐", category: "security" },
      ],
      github: "https://github.com/shudhanshu-bajpai/chatApp_using_MERN",
      demo: "https://chatapp-3i01.onrender.com",
      featured: false,
      category: "Chat Application",
    },

    {
      id: 2,
      title: "Greencart",
      description:
        "Full-stack e-commerce solution with real-time inventory and payment processing.",
      longDescription:
        "A modern e-commerce platform featuring real-time inventory management, secure payment processing with Stripe, advanced search and filtering, user authentication, order tracking, and an admin dashboard with analytics.",
      image: "/assets/greencart.png?height=300&width=400",
      tech: [
        { name: "React", icon: "⚛️", category: "frontend" },
        { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
        { name: "Node.js", icon: "🟢", category: "backend" },
        { name: "Express.js", icon: "🚀", category: "backend" },
        { name: "MongoDB", icon: "🍃", category: "database" },
        { name: "Stripe", icon: "💳", category: "payment" },
        { name: "Vercel", icon: "▲", category: "deployment" },
      ],
      github: "https://github.com/shudhanshu-bajpai/greencart",
      demo: "https://greencart-frontend-pink.vercel.app/",
      featured: true,
      category: "Full-Stack",
    },
    {
      id: 3,
      title: "Netflix",
      description:
        "A full-featured movie streaming platform with user authentication and modern UI.",
      longDescription:
        "It is a dynamic movie streaming platform built using the MERN stack. It features user authentication with OAuth and Firebase, responsive UI, personalized movie collections, watch history, and seamless video playback. The platform supports secure user sessions, admin-level content management, and integrates cloud services for efficient data handling and hosting. Optimized for performance and user engagement, CineStream offers a Netflix-like experience with modern tooling and best practices.",
      image: "/assets/netflix.png?height=300&width=400",
      tech: [
        { name: "MongoDB", icon: "🍃", category: "database" },
        { name: "Express.js", icon: "🚂", category: "backend" },
        { name: "React", icon: "⚛️", category: "frontend" },
        { name: "Node.js", icon: "🟢", category: "backend" },
        { name: "Firebase", icon: "🔥", category: "cloud" },
        { name: "OAuth", icon: "🛡️", category: "security" },
        { name: "TailwindCSS", icon: "🎨", category: "frontend" },
        { name: "JWT", icon: "🔐", category: "security" },
      ],
      github: "https://github.com/shudhanshu-bajpai/netflix_clone",
      demo: "https://netflixdev.vercel.app/",
      featured: false,
      category: "Streaming Platform",
    },
  ];

  const allTechs = Array.from(
    new Set(
      projects.flatMap((project) => project.tech.map((tech) => tech.name))
    )
  );

  const filteredProjects = selectedSkill
    ? projects.filter((project) =>
        project.tech.some((tech) => tech.name === selectedSkill)
      )
    : projects;

  const getSkillColor = (category: string) => {
    const colors = {
      frontend:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700",
      backend:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700",
      database:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700",
      devops:
        "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700",
      cloud:
        "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700",
      default:
        "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-700",
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills in
            full-stack development, DevOps, and modern web technologies.
          </p>

          {/* Skill Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSkill(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !selectedSkill
                  ? "bg-emerald-500 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/20"
              }`}
            >
              All Projects
            </motion.button>
            {allTechs.slice(0, 8).map((tech, index) => (
              <motion.button
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setSelectedSkill(selectedSkill === tech ? null : tech)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSkill === tech
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/20"
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <Card className="h-full bg-white dark:bg-gray-800 border border-emerald-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 6).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSkill(
                            selectedSkill === tech.name ? null : tech.name
                          );
                        }}
                        className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border cursor-pointer transition-all duration-300 hover:shadow-md ${getSkillColor(
                          tech.category
                        )}`}
                      >
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </motion.span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4 justify-start">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {project.longDescription}
                    </p>

                    {/* All Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium border ${getSkillColor(
                              tech.category
                            )}`}
                          >
                            <span className="text-base">{tech.icon}</span>
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        className="flex items-center space-x-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </Button>
                      <Button
                        className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredProjects.length === 0 && selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found using{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {selectedSkill}
              </span>
            </p>
            <Button
              onClick={() => setSelectedSkill(null)}
              variant="outline"
              className="mt-4 border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
            >
              Show All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
