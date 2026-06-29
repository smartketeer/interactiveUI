"use client";

import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusWidget } from "@/components/features/StatusWidget";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-24 md:pt-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-theme-sm border-[length:var(--theme-border-width)] border-theme-border bg-theme-secondary/50 px-3 py-1 text-sm text-theme-text w-fit">
            <Terminal className="h-4 w-4 text-theme-primary" />
            <span>Visionary Mathematician</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-theme-text leading-[1.1] font-heading">
            The World's First <span className="text-theme-primary">Computer Programmer</span>.
          </h1>
          
          <div className="text-xl text-theme-muted leading-relaxed max-w-xl font-body">
            Hi, I'm{" "}
            <motion.span
              initial={{ backgroundPosition: "200% center" }}
              animate={{ backgroundPosition: "0% center" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 3
              }}
              className="font-bold inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, var(--theme-text) 0%, var(--theme-primary) 50%, var(--theme-text) 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Ada Lovelace
            </motion.span>
            . I realized that the Analytical Engine had applications far beyond pure calculation, envisioning a future of algorithmic music and what would become modern computing.
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/experience">Career History</Link>
            </Button>
          </div>
        </div>
        
        <div className="lg:pl-8 flex justify-center lg:justify-end">
          <StatusWidget />
        </div>
      </div>
    </section>
  );
}
