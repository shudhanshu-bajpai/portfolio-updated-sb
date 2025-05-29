"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      longDescription:
        "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, and an admin dashboard. Built with React, Node.js, Express, and MongoDB.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates.",
      longDescription:
        "A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, file attachments, and progress tracking. Built with Next.js, Socket.io, and PostgreSQL.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "TypeScript"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather app with location-based forecasts.",
      longDescription:
        "A responsive weather dashboard that provides current weather conditions, 7-day forecasts, and interactive maps. Features location-based weather data, beautiful animations, and offline support.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "OpenWeather API", "Chart.js", "PWA"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management.",
      longDescription:
        "A comprehensive social media analytics dashboard that aggregates data from multiple platforms, provides insights through interactive charts, and helps manage social media presence effectively.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Vue.js", "D3.js", "Firebase", "Social APIs"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
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
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
            modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full border border-emerald-200 dark:border-emerald-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, "_blank")
                      }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.demo, "_blank")
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
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject)
                if (!project) return null

                return (
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
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
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full border border-emerald-200 dark:border-emerald-700"
                        >
                          {tech}
                        </span>
                      ))}
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
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
