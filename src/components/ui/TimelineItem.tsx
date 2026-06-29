"use client";

import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ScrollReveal, revealVariants } from "./ScrollReveal";

export interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export function TimelineItem({ 
  role, 
  company, 
  period, 
  description, 
  technologies,
  current = false
}: TimelineItemProps) {
  return (
    <ScrollReveal>
      <motion.div variants={revealVariants} className="relative pl-8 sm:pl-32 py-6 group">
        {/* Timeline Line */}
        <div className="absolute left-3 sm:left-[7.5rem] top-0 bottom-0 w-px bg-theme-border group-last:bottom-auto group-last:h-full" />
        
        {/* Timeline Dot */}
        <div className={cn(
          "absolute left-[0.4rem] sm:left-[7.1rem] top-8 h-3 w-3 rounded-full border-[length:var(--theme-border-width)]",
          current 
            ? "border-theme-primary bg-theme-base ring-4 ring-theme-primary/20" 
            : "border-theme-muted bg-theme-base group-hover:border-theme-primary transition-colors"
        )} />

        <div className="flex flex-col flex-1 gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
            <h3 className="text-xl font-bold tracking-tight text-theme-text">{role}</h3>
            <span className="text-sm font-medium text-theme-muted font-mono bg-theme-secondary/30 px-2 py-1 rounded-theme w-fit">{period}</span>
          </div>
          
          <p className="text-lg font-medium text-theme-primary">{company}</p>
          
          <ul className="list-disc list-outside ml-4 mb-2 space-y-1.5 text-theme-muted leading-relaxed">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((skill) => (
              <TechBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
