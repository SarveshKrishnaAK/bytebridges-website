import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const points = [
  {
    title: "We Think Like Builders, Not Just Developers",
    description:
      "Every solution is designed with long-term scalability and business impact in mind.",
  },
  {
    title: "Clear Communication",
    description:
      "No technical confusion. You always know what’s being built and why.",
  },
  {
    title: "Performance First Approach",
    description:
      "Speed, optimization, and clean architecture are priorities — not afterthoughts.",
  },
  {
    title: "Accountability",
    description:
      "We take ownership. Deadlines, quality, and delivery matter.",
  },
];

export default function WhyChoose() {
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
            Why Choose Us
            </motion.h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
            {points.map((point, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                >
                <h3 className="text-xl font-semibold text-black dark:text-white">
                    {point.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {point.description}
                </p>
                </motion.div>
            ))}
            </div>

        </div>
        </section>
    </SectionWrapper>
  );
}