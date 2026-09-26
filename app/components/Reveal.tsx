"use client";

import { motion, type Variants } from "motion/react";

export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "blur";

const TRANSITIONS: Record<RevealVariant, Variants> = {
  up: { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -18 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 32 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -32 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.93 }, show: { opacity: 1, scale: 1 } },
  blur: {
    hidden: { opacity: 0, y: 12, filter: "blur(7px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const variants = TRANSITIONS[variant];

  return (
    <motion.div
      className={`reveal${className ? ` ${className}` : ""}`}
      initial="hidden"
      variants={variants}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 20,
        mass: 0.9,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}