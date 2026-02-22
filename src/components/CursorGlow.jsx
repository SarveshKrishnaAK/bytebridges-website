import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  if (window.innerWidth < 768) return null;
  return (
    <div
      className="pointer-events-none fixed z-50 w-32 h-32 rounded-full bg-indigo-500/20 dark:bg-indigo-400/30 blur-2xl transition-all duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 64}px, ${position.y - 64}px)`
      }}
    />
  );
}