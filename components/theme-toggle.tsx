// "use client"

// import { motion } from "framer-motion"
// import { Sun, Moon } from "lucide-react"

// interface ThemeToggleProps {
//   darkMode: boolean
//   setDarkMode: (darkMode: boolean) => void
// }

// export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
//   const handleToggle = () => {
//     setDarkMode(!darkMode)
//   }

//   return (
//     <motion.button
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       onClick={handleToggle}
//       className="fixed top-3 right-6 z-50 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-emerald-200 dark:border-gray-600 transition-all duration-300 hover:shadow-xl"
//       aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
//     >
//       <motion.div initial={false} animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
//         {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
//       </motion.div>
//     </motion.button>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleToggle}
      className="fixed top-16 right-3 z-50 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-emerald-200 dark:border-gray-600 transition-all duration-300 hover:shadow-xl md:top-6"
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
    >
      <motion.div initial={false} animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
      </motion.div>
    </motion.button>
  )
}
