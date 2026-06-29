"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Search, Command, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { themes } from "@/lib/themes";

export function ThemePalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("session_themes_discovered")) {
      setShowTooltip(true);
    }
  }, []);

  const dismissTooltip = () => {
    setShowTooltip(false);
    sessionStorage.setItem("session_themes_discovered", "true");
  };

  // Toggle with Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearch("");
    }
  }, [open]);

  const filteredThemes = themes.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="relative inline-flex items-center">
        <button 
          onClick={() => {
            setOpen(true);
            dismissTooltip();
          }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-theme-sm border border-theme-border bg-theme-surface text-theme-muted hover:text-theme-text transition-colors"
        >
          <Command className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline-block">Themes</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-theme-secondary px-1.5 text-[10px] font-medium font-mono text-theme-muted">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
              className="absolute right-0 top-full mt-3 w-64 z-[90] surface-structural p-4 rounded-theme border border-theme-border shadow-2xl flex flex-col gap-3"
            >
              <p className="text-sm text-theme-text font-medium leading-relaxed">
                Click here to switch the theme and explore 49 distinct architectures ✨
              </p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  dismissTooltip();
                }}
                className="self-end text-xs font-bold px-3 py-1.5 rounded-theme-sm text-theme-muted hover:text-theme-text hover:bg-theme-secondary transition-colors"
              >
                Okay
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="surface-structural w-full max-w-xl relative z-[100] overflow-hidden flex flex-col max-h-[60vh] p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center border-b border-theme-border pb-3 mb-2">
                <Search className="w-5 h-5 text-theme-muted shrink-0 mr-2" />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex h-12 w-full bg-transparent py-2 text-lg outline-none placeholder:text-theme-muted text-theme-text"
                  placeholder="Search themes..."
                />
                <button onClick={() => setOpen(false)} className="text-theme-muted hover:text-theme-text p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-2 scrollbar-hide">
                {filteredThemes.length === 0 ? (
                  <p className="p-4 text-center text-sm text-theme-muted">No themes found.</p>
                ) : (
                  <div className="flex flex-col gap-1">
                    {filteredThemes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setOpen(false);
                        }}
                        className={`flex flex-col text-left px-4 py-3 rounded-theme-sm transition-colors ${
                          theme === t.id 
                            ? "bg-theme-primary text-theme-base" 
                            : "hover:bg-theme-secondary text-theme-text"
                        }`}
                      >
                        <span className="font-semibold font-heading">{t.name}</span>
                        <span className={`text-xs mt-0.5 ${theme === t.id ? 'text-theme-base/80' : 'text-theme-muted'}`}>
                          {t.description || "Switch to this architectural style"}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
