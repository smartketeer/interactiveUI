import React from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { TechBadge } from '@/components/ui/TechBadge';
import { Button } from '@/components/ui/Button';
import { TimelineItem } from '@/components/ui/TimelineItem';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-theme-base p-8 md:p-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-heading font-bold text-theme-primary">UI Laboratory</h1>
          <p className="text-theme-muted text-lg">
            Use the Command Palette (Ctrl+K) to switch themes and instantly preview the structural variables in action across core components.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-bold border-b-[length:var(--theme-border-width)] border-theme-border pb-2 text-theme-text">Buttons & Inputs</h2>
          <div className="flex flex-wrap gap-4 items-center p-6 surface-structural">
            <Button variant="default">Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            
            <input 
              type="text" 
              placeholder="Input field..." 
              className="bg-theme-surface border-[length:var(--theme-border-width)] border-theme-border rounded-[var(--theme-radius-sm)] px-4 py-2 text-theme-text placeholder:text-theme-muted focus:outline-none focus:ring-2 focus:ring-theme-primary transition-all duration-300"
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-bold border-b-[length:var(--theme-border-width)] border-theme-border pb-2 text-theme-text">Badges</h2>
          <div className="flex flex-wrap gap-3 p-6 surface-structural">
            <TechBadge name="React" />
            <TechBadge name="Next.js" />
            <TechBadge name="TailwindCSS" />
            <TechBadge name="Framer Motion" />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-bold border-b-[length:var(--theme-border-width)] border-theme-border pb-2 text-theme-text">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Aesthetic Theme Engine" 
              description="A wildly dynamic CSS variable architecture supporting 49 unique visual themes with instant hot-swapping."
              tags={["CSS", "React", "Architecture"]}
            />
            <ProjectCard 
              title="Spatial UI Elements" 
              description="Apple visionOS inspired elements with heavy blur, deep shadows, and pill-shaped structural containers."
              tags={["Glassmorphism", "visionOS", "Design"]}
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-bold border-b-[length:var(--theme-border-width)] border-theme-border pb-2 text-theme-text">Timeline</h2>
          <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[length:var(--theme-border-width)] before:bg-gradient-to-b before:from-transparent before:via-theme-border before:to-transparent">
            <TimelineItem 
              role="Senior Architect"
              company="NextLevelBuilder"
              period="2024 - Present"
              description={[
                "Architected a robust 49-theme engine.",
                "Ensured structural CSS constraint safety."
              ]}
              technologies={["React", "Next.js 16", "TailwindCSS"]}
              current={true}
            />
          </div>
        </section>

      </div>
    </div>
  );
}
