"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-accent"
      style={{
        scaleX,
        boxShadow: "0 0 8px var(--accent), 0 0 2px var(--accent)",
      }}
    />
  );
}
