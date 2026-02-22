import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    step: "01",
    title: "Understanding Your Vision",
    description:
      "We begin by listening — your goals, constraints, expectations, and long-term vision. Every strong product starts with clarity.",
  },
  {
    step: "02",
    title: "Planning & System Design",
    description:
      "Before writing code, we design the structure. We define architecture, performance strategy, and scalability to avoid future rewrites.",
  },
  {
    step: "03",
    title: "Focused Development",
    description:
      "Clean implementation with regular updates. You’ll always know what’s happening and where your project stands.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "We test for stability, performance, and real-world usage. No rushed deployments.",
  },
  {
    step: "05",
    title: "Launch & Ongoing Support",
    description:
      "After deployment, we stay involved. Improvements, fixes, and enhancements don’t stop at launch.",
  },
];

export default function Process() {
  return (
    <SectionWrapper>
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-black transition-colors">
        <div className="max-w-6xl mx-auto">

            <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center tracking-tight text-black dark:text-white"
            >
            Our Process
            </motion.h2>

            <div className="mt-20 space-y-16">
            {steps.map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-center gap-6"
                >
                <div className="text-4xl font-bold text-gray-300 dark:text-neutral-800">
                    {item.step}
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                    {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
                    {item.description}
                    </p>
                </div>
                </motion.div>
            ))}
            </div>

        </div>
        </section>
    </SectionWrapper>
  );
}