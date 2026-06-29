"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function ScrollReveal({ children, className, delay = 0, staggerChildren = false }: ScrollRevealProps) {
  const containerVariants: Variants = {
    hidden: { opacity: staggerChildren ? 1 : 0, y: staggerChildren ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
        when: "beforeChildren",
        staggerChildren: staggerChildren ? 0.15 : 0,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
