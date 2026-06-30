"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemePalette } from "./ThemePalette";
import { ModeToggle } from "./ModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-theme-muted/20 bg-theme-base/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-theme-text">
          Ada<span className="text-theme-primary">Lovelace</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-theme-primary",
                  isActive ? "text-theme-primary" : "text-theme-muted"
                )}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-theme-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <ThemePalette />
          <ModeToggle />
          <Link
            href="/#contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-theme bg-theme-primary px-4 py-2 text-sm font-medium text-theme-base shadow transition-colors hover:bg-theme-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary disabled:pointer-events-none disabled:opacity-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
