export default function CTA() {
  return (
    <section className="py-20 px-6 bg-black text-white dark:bg-white dark:text-black transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Build Something Exceptional?
        </h2>

        <p className="mt-6 text-lg opacity-80">
          Let’s discuss your project and turn your ideas into scalable digital solutions.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block px-8 py-4 rounded-full bg-white text-black dark:bg-black dark:text-white font-semibold hover:scale-105 transition"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
}