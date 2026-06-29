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
            <h2 className="text-3xl font-bold tracking-tight font-heading text-theme-text mb-6">Core Competencies</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-theme-sm bg-theme-primary/10 flex items-center justify-center">
                  <span className="text-theme-primary font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-theme-text font-heading text-lg">System Architecture</h3>
                  <p className="text-theme-muted mt-1 leading-relaxed">Designing resilient, scalable systems that can handle high traffic and complex data flows.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-theme-sm bg-theme-primary/10 flex items-center justify-center">
                  <span className="text-theme-primary font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-theme-text font-heading text-lg">Modern Tooling</h3>
                  <p className="text-theme-muted mt-1 leading-relaxed">Mastery of React, Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for premium UIs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight font-heading text-theme-text">Philosophy</h2>
            <p className="text-lg text-theme-muted leading-relaxed font-body">
              I believe in writing code that is not only functional but maintainable and scalable. A truly senior engineer understands that technology is just a tool to solve business problems elegantly.
            </p>
          </div>
        </div>
      </section>

      {/* Top Projects Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-theme-text">Featured Projects</h2>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-medium text-theme-primary hover:text-theme-primary/80 transition-colors">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Enterprise E-Commerce Platform"
            description="A high-performance e-commerce solution built for scale. Implemented advanced caching with Redis, microservices architecture, and a resilient payment gateway integration."
            tags={["Next.js", "TypeScript", "Redis", "Stripe", "PostgreSQL"]}
            githubUrl="https://github.com"
          />
          <ProjectCard 
            title="Real-Time Analytics Dashboard"
            description="Processed millions of events per day using WebSockets and Apache Kafka. The UI renders dynamic charts with sub-second latency using Canvas APIs."
            tags={["React", "Node.js", "WebSockets", "Kafka", "Docker"]}
            liveUrl="https://example.com"
          />
        </div>
        
        <Link href="/projects" className="flex md:hidden items-center justify-center gap-2 text-sm font-medium text-theme-text bg-theme-secondary/50 py-3 rounded-theme mt-6 hover:bg-theme-secondary transition-colors">
          View all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pb-12">
        <ContactForm />
      </section>
    </div>
  );
}
