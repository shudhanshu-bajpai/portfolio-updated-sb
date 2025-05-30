"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function TimelineSection() {
  const timelineItems = [
    {
      type: "education",
      title: "Bachelor of Computer Science",
      organization: "ABES Engineering College",
      location: "Ghaziabad, UP",
      date: "2022 - 2026",
      description:
        "Currently in pre-final year, specializing in web development and software engineering.",
      icon: "🎓",
      color: "from-emerald-400 to-green-500",
    },
    {
      type: "achievement",
      title: "Problem Solving",
      organization: "Multiple Coding Platforms",
      location: "Online",
      date: "2022 - 2025",
      description:
        "Successfully solved over 200+ coding problems on platforms like LeetCode, GFG, and HackerRank, demonstrating strong algorithmic thinking, consistency, and deep understanding of data structures.",
      icon: "💻",
      color: "from-indigo-400 to-purple-500",
    },

    {
      type: "achievement",
      title: "Hackathon Winner",
      organization: "Shivnadar University",
      location: "Greater Noida, UP",
      date: "2023",
      description:
        "Third place winner for developing an innovative web application in 36 hours.",
      icon: "🥇",
      color: "from-emerald-400 to-green-500",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in web development, from education to professional
            experience and achievements.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-600"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl shadow-lg border-4 border-white dark:border-gray-900`}
                >
                  {item.icon}
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="ml-8 flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200 dark:border-gray-700"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white shadow-md`}
                    >
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                    {item.organization}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "10+", label: "Technologies" },
            { number: "5+", label: "Certifications" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
