"use client"

import { motion } from "framer-motion"
import { Code, Users, Zap, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const strengths = [
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach to building amazing products with diverse teams.",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Creative solutions to complex challenges using modern technologies.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Fast Learning",
      description: "Quickly adapting to new technologies and industry best practices.",
      color: "from-emerald-500 to-green-400",
    },
  ]

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50/50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating beautiful, functional web experiences. With
            expertise in modern JavaScript frameworks and a keen eye for design. Diving deep and trying to dominate the backend development..
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated web developer who believes in the power of clean code and intuitive design. My journey in
              web development started with curiosity and has evolved into a passion for creating digital experiences
              that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl flex items-center justify-center border-2 border-emerald-200 dark:border-emerald-800">
              <Code className="w-24 h-24 text-emerald-600 dark:text-emerald-400" />
            </div>
          </motion.div> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white dark:bg-gray-700 border border-emerald-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${strength.color} flex items-center justify-center shadow-lg`}
                    >
                      <strength.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{strength.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{strength.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white dark:bg-gray-700 border-2 border-emerald-200 dark:border-emerald-600 rounded-lg text-emerald-700 dark:text-emerald-300 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
