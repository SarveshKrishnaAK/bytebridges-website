import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "AI-Based Video and Audio Verification System",
    problem:
      "Organizations needed a reliable way to identify manipulated or AI-generated audio and video content.",
    solution:
      "Developed a machine learning system capable of detecting synthetic audio / video patterns that is reliable and efficient in real-world scenarios.",
    impact:
      "Improved detection reliability and reduced risk of misinformation exposure.",
    tech: "Python, Machine Learning",
  },
  {
    title: "Automated Large Scale Test Case Generator for Aerospace Manufacturing",
    problem:
      "Online exposure of sensitive aerospace data and lack of personalization in test case generation.",
    solution:
      "Created an offline, AI-driven test case generator that produces personalized test scenarios based on specific aerospace component data.",
    impact:
      "Enhanced security by keeping data offline and improved testing efficiency with tailored test cases.",
    tech: "Ollama, RAG, Python",
  },
  {
    title: "AI-Assisted Law Bot",
    problem:
      "Individuals and small businesses found it difficult to understand legal documents and get basic legal advice without consulting a lawyer.",
    solution:
      "Built an AI-powered legal assistant that interprets and summarizes legal documents.",
    impact:
      "Improved accessibility to legal information and reduced reliance on expensive legal consultations.",
    tech: "Python, ChromaDB, Ollama",
  },
];

export default function CaseStudies() {
  return (
    <SectionWrapper>
        <section
        id="work"
        className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-neutral-950 transition-colors"
        >
        <div className="max-w-6xl mx-auto">

            <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center tracking-tight text-black dark:text-white"
            >
            What We’ve Built
            </motion.h2>

            <div className="mt-16 space-y-12">
            {projects.map((project, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl border border-transparent hover:border-indigo-500/30 transition duration-300"
                >
                    
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                    {project.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    <strong>Problem:</strong> {project.problem}
                </p>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                    <strong>Solution:</strong> {project.solution}
                </p>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                    <strong>Impact:</strong> {project.impact}
                </p>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                    Tech Stack: {project.tech}
                </p>
                </motion.div>
            ))}
            </div>

        </div>
        </section>
    </SectionWrapper>
  );
}