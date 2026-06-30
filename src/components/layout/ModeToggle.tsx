"use client";

import { Moon, Sun } from "lucide-react";
import { useMode } from "@/components/ModeProvider";

export function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <button
      onClick={toggleMode}
      className="flex items-center justify-center p-2 rounded-theme-sm border border-theme-border bg-theme-surface text-theme-muted hover:text-theme-text transition-colors w-9 h-9"
      aria-label="Toggle mode"
    >
      {mode === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
