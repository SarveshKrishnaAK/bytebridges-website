import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const binaryChatter = [
  "01001000 01101001",
  "Handshake complete",
  "Commit confidence: 99.1%",
  "Packets stable",
  "BinaryBase online",
];

export default function BinaryCompanion() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [20, 880]);
  const [open, setOpen] = useState(false);
  const [line, setLine] = useState(binaryChatter[0]);

  const nextLine = () => {
    const next = binaryChatter[Math.floor(Math.random() * binaryChatter.length)];
    setLine(next);
    setOpen(true);
    setTimeout(() => setOpen(false), 1600);
  };

  return (
    <motion.div
      className="fixed bottom-6 left-0 z-[60] hidden md:block pointer-events-none"
      style={{ x }}
      transition={{ type: "spring", stiffness: 75, damping: 20 }}
    >
      <motion.button
        type="button"
        onClick={nextLine}
        className="pointer-events-auto relative"
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -2 }}
      >
        <motion.div
          className="w-14 h-14 rounded-lg border border-cyan-500/60 bg-black/85 shadow-[0_0_16px_rgba(16,185,129,0.45)]"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-full w-full grid place-items-center text-cyan-400 font-bold text-[10px] leading-3 tracking-tight">
            <span>10</span>
            <span>01</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-1 left-1 w-5 h-1 bg-cyan-500/70 rounded"
          animate={{ scaleX: [1, 0.75, 1], x: [0, 2, 0] }}
          transition={{ duration: 0.38, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-1 right-1 w-5 h-1 bg-blue-400/70 rounded"
          animate={{ scaleX: [0.8, 1, 0.8], x: [1, -1, 1] }}
          transition={{ duration: 0.38, repeat: Infinity, delay: 0.19 }}
        />
      </motion.button>

      <motion.div
        className="absolute -top-11 left-16 whitespace-nowrap rounded-md border border-cyan-500/40 bg-black/85 px-3 py-1.5 text-xs text-cyan-300"
        initial={{ opacity: 0, y: 8, scale: 0.9 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : 8, scale: open ? 1 : 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {line}
      </motion.div>
    </motion.div>
  );
}
