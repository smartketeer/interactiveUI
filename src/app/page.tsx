import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ContactForm } from "@/components/features/ContactForm";
import { StatusWidget } from "@/components/features/StatusWidget";
import { ArrowRight, Terminal } from "lucide-react";
import { Hero } from "@/components/features/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start surface-structural p-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-heading text-theme-text mb-6">Key Interests</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-theme-sm bg-theme-primary/10 flex items-center justify-center">
                  <span className="text-theme-primary font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-theme-text font-heading text-lg">Analytical Engines</h3>
                  <p className="text-theme-muted mt-1 leading-relaxed">Exploring the theoretical limits of computation and the mechanical calculation of complex mathematical series.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-theme-sm bg-theme-primary/10 flex items-center justify-center">
                  <span className="text-theme-primary font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-theme-text font-heading text-lg">Poetical Science</h3>
                  <p className="text-theme-muted mt-1 leading-relaxed">Applying mathematical logic to the creative arts, theorizing algorithms that transcend simple arithmetic.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight font-heading text-theme-text">Philosophy</h2>
            <p className="text-lg text-theme-muted leading-relaxed font-body">
              I believe that the Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves. A truly visionary mind understands that computation is a canvas for both science and art.
            </p>
          </div>
        </div>
      </section>

      {/* Top Projects Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-theme-text">Featured Contributions</h2>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-medium text-theme-primary hover:text-theme-primary/80 transition-colors">
            View all contributions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Note G: The Bernoulli Algorithm"
            description="Wrote the first published algorithm intended to be executed by a machine, designed to compute Bernoulli numbers."
            tags={["Theoretical Computing", "Mathematics", "Analytical Engine"]}
          />
          <ProjectCard 
            title="The Menabrea Translation"
            description="Translated and expanded upon Luigi Menabrea's memoir, tripling its length with original insights into machine logic."
            tags={["French to English", "Technical Writing", "Peer Review"]}
          />
        </div>
        
        <Link href="/projects" className="flex md:hidden items-center justify-center gap-2 text-sm font-medium text-theme-text bg-theme-secondary/50 py-3 rounded-theme mt-6 hover:bg-theme-secondary transition-colors">
          View all contributions <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pb-12">
        <ContactForm />
      </section>
    </div>
  );
}
