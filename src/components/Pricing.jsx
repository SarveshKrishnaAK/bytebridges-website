import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const plans = [
  {
    name: "Starter",
    price: "Starting at ₹25,000",
    features: [
      "Business Website (Up to 5 pages)",
      "Responsive Design",
      "Basic SEO Setup",
      "Deployment Support",
    ],
  },
  {
    name: "Growth",
    price: "Starting at ₹60,000",
    features: [
      "Custom Web Application",
      "API Integration",
      "Authentication System",
      "Performance Optimization",
      "Deployment + Support",
    ],
  },
  {
    name: "Advanced",
    price: "Starting at ₹1,00,000",
    features: [
      "Full-Scale Application",
      "Architecture Planning",
      "Advanced Integrations",
      "Scalable Backend",
      "Ongoing Technical Support",
    ],
  },
];

export default function Pricing() {
  return (
    <SectionWrapper>
        <section className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-neutral-950 transition-colors">
        <div className="max-w-6xl mx-auto">

            <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center tracking-tight text-black dark:text-white"
            >
            Pricing
            </motion.h2>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-indigo-500/30 transition duration-300 flex flex-col"
                >
                <h3 className="text-xl font-semibold text-black dark:text-white">
                    {plan.name}
                </h3>

                <p className="mt-4 text-2xl font-bold text-black dark:text-white">
                    {plan.price}
                    <span className="text-sm align-top">*</span>
                </p>

                <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400 flex-grow">
                    {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                    ))}
                </ul>

                <a
                    href="#contact"
                    className="mt-8 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-center hover:scale-105 transition"
                >
                    Get Started
                </a>
                </motion.div>
            ))}
            </div>
            <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
              * Final pricing varies based on project scope, integrations, performance requirements, and delivery timeline.
            </p>

        </div>
        </section>
    </SectionWrapper>
    
  );
}