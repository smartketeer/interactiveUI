"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ScrollReveal, revealVariants } from "./ScrollReveal";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  image,
  className
}: ProjectCardProps) {
  return (
    <ScrollReveal className={cn("h-full", className)}>
      <motion.div 
        variants={revealVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="surface-structural flex flex-col overflow-hidden group h-full"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-theme-base">
          <div className="absolute inset-0 bg-theme-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
             <span className="text-theme-muted font-mono text-sm">[{title} Preview]</span>
          </div>
        </div>
        <div className="flex flex-col flex-grow p-6 sm:p-8">
          <h3 className="text-xl font-bold font-heading text-theme-text mb-2 group-hover:text-theme-primary transition-colors">{title}</h3>
          <p className="text-theme-muted text-sm flex-grow mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-auto">
            {githubUrl && (
              <Link href={githubUrl} target="_blank" className="text-theme-muted hover:text-theme-primary transition-colors flex items-center gap-2 text-sm font-medium">
                <FaGithub className="w-4 h-4" /> Code
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl} target="_blank" className="text-theme-muted hover:text-theme-primary transition-colors flex items-center gap-2 text-sm font-medium">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
