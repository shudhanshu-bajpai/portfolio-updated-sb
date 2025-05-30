"use client"

import { motion } from "framer-motion"
import { Globe, Server, Cloud } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-emerald-400 to-green-500",
      skills: [
        {
          name: "React",
          icon: "⚛️",
          experience: "2+ years",
          description: "Used in 15+ projects",
          level: "Expert",
        },
        {
          name: "Next.js",
          icon: "▲",
          experience: "1+ years",
          description: "Production apps",
          level: "Advanced",
        },
        {
          name: "TypeScript",
          icon: "🔷",
          experience: "1+ years",
          description: "Type-safe development",
          level: "Advanced",
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          experience: "2+ years",
          description: "Responsive designs",
          level: "Expert",
        },
        {
          name: "Framer Motion",
          icon: "🎭",
          experience: "1+ year",
          description: "Smooth animations",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-400 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          icon: "🟢",
          experience: "2+ years",
          description: "RESTful APIs",
          level: "Expert",
        },
        {
          name: "Express.js",
          icon: "🚀",
          experience: "2+ years",
          description: "Web frameworks",
          level: "Advanced",
        },
        {
          name: "MongoDB",
          icon: "🍃",
          experience: "2+ years",
          description: "NoSQL databases",
          level: "Advanced",
        },
        {
          name: "PostgreSQL",
          icon: "🐘",
          experience: "1+ years",
          description: "Relational databases",
          level: "Advanced",
        },
        {
          name: "GraphQL",
          icon: "◉",
          experience: "1+ year",
          description: "API queries",
          level: "Intermediate",
        },
        {
          name: "Python",
          icon: "🐍",
          experience: "N/A",
          description: "Data processing",
          level: "Advanced",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      color: "from-emerald-500 to-green-400",
      skills: [
        {
          name: "Docker",
          icon: "🐳",
          experience: "N/A",
          description: "Containerization",
          level: "Advanced",
        },
        {
          name: "AWS",
          icon: "☁️",
          experience: "N/A",
          description: "Cloud deployment",
          level: "Intermediate",
        },
        {
          name: "Git",
          icon: "📝",
          experience: "3+ years",
          description: "Version control",
          level: "Expert",
        },
        {
          name: "Kubernetes",
          icon: "⚙️",
          experience: "N/A",
          description: "Used in KuberVault",
          level: "Intermediate",
        },
        {
          name: "CI/CD",
          icon: "🔄",
          experience: "1+ years",
          description: "GitHub Actions",
          level: "Advanced",
        },
        {
          name: "Vercel",
          icon: "▲",
          experience: "2+ years",
          description: "Frontend deployment",
          level: "Advanced",
        },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
      case "Advanced":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50/50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to build modern, scalable, and user-friendly applications.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-lg`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-200 dark:border-gray-600 cursor-pointer"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl">{skill.icon}</span>
                        <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      {/* <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span> */}
                    </div>

                    {/* Experience & Description */}
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{skill.experience}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Redis", icon: "🔴" },
              { name: "Prisma", icon: "⚡" },
              { name: "Socket.io", icon: "🔌" },
              { name: "Jest", icon: "🧪" },
              { name: "Cypress", icon: "🌲" },
              { name: "Figma", icon: "🎨" },
              { name: "Stripe", icon: "💳" },
              { name: "Firebase", icon: "🔥" },
              { name: "Supabase", icon: "⚡" },
              { name: "Cloudinary", icon: "☁️" },
              { name: "Webpack", icon: "📦" },
              { name: "Vite", icon: "⚡" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-200 dark:border-gray-600 cursor-pointer group"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "25+", label: "Technologies", icon: "⚡" },
            { number: "15+", label: "Projects Built", icon: "🚀" },
            { number: "4+", label: "Years Coding", icon: "💻" },
            { number: "20+", label: "Libraries Used", icon: "📚" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-emerald-200 dark:border-gray-600"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
