"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  [key: string]: any;
}

export const Reveal = ({ children, delay = 0, y = 40, className = "", ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const MaskLine = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <span className="line-mask block overflow-hidden">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Overline = ({ children, color = "text-ink-soft", className = "" }: { children: ReactNode; color?: string; className?: string }) => (
  <span className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold font-mono ${color} ${className}`}>
    <span className="h-px w-8 bg-current opacity-50" />
    {children}
  </span>
);
