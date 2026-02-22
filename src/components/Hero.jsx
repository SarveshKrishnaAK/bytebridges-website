import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <section className="min-h-screen pt-24 flex flex-col justify-center items-center px-6 bg-white dark:bg-black transition-colors duration-500 relative">
      
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-full border border-black dark:border-white text-black dark:text-white text-sm transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-center tracking-tight text-black dark:text-white leading-tight"
      >
        We Build High-Performance <br />
        Digital Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-center max-w-2xl text-gray-700 dark:text-gray-300"
      >
        Web development, performance optimization, mobile apps, and seamless API integrations — 
        delivered with speed, clarity, and precision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a
          href="#services"
          className="px-6 py-3 bg-indigo-600 text-white rounded-full transition hover:scale-105 hover:shadow-xl hover:bg-indigo-700"
        >
          View Services
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-black dark:border-white rounded-full text-black dark:text-white transition hover:scale-105 hover:shadow-xl"
        >
          Let’s Build
        </a>
      </motion.div>
    </section>
  );
}