import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata = {
  title: "Projects | Vincent Sedimo",
  description: "Showcase of robust systems and web applications.",
};

const projectsData = [
  {
    title: "Enterprise Data Dashboard",
    description: "A high-performance real-time analytics dashboard processing millions of data points with WebSockets and optimized React rendering. Built with complex state management to ensure seamless UI updates at 60fps.",
    tags: ["Next.js", "TypeScript", "Tailwind", "WebSockets", "Recharts"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Distributed Task Queue",
    description: "A scalable microservice architecture for processing background jobs, featuring a custom admin panel and Redis-backed state management. Handled up to 10k concurrent jobs.",
    tags: ["Node.js", "Redis", "Docker", "React", "PostgreSQL"],
    githubUrl: "https://github.com"
  },
  {
    title: "E-Commerce Payment Gateway",
    description: "Integrated secure payment processing with Stripe and PayPal, featuring multi-currency support, automated invoicing, and robust webhook handling.",
    tags: ["Next.js", "Stripe API", "Serverless", "Prisma"],
    liveUrl: "https://example.com"
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A workspace for remote teams featuring live cursor tracking, conflict resolution for document editing, and video conferencing capabilities.",
    tags: ["React", "WebRTC", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com"
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-16 py-12 md:py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-text mb-4 font-heading">Selected Work</h1>
          <p className="text-xl text-theme-muted max-w-2xl font-body">
            Deep dives into production systems I've built, focusing on architectural decisions and performance.
          </p>
        </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      </section>
    </div>
  );
}
