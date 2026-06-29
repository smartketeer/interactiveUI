import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata = {
  title: "Projects | Ada Lovelace",
  description: "Historical contributions and visionary theories.",
};

const projectsData = [
  {
    title: "Note G: The Bernoulli Algorithm",
    description: "Wrote the first published algorithm intended to be executed by a machine, designed to compute Bernoulli numbers.",
    tags: ["Theoretical Computing", "Mathematics", "Analytical Engine"]
  },
  {
    title: "The Menabrea Translation",
    description: "Translated and expanded upon Luigi Menabrea's memoir, tripling its length with original insights into machine logic.",
    tags: ["French to English", "Technical Writing", "Peer Review"]
  },
  {
    title: "Poetical Science & Generative Art",
    description: "Theorized that an engine could compose elaborate and scientific pieces of music of any degree of complexity if pitched sounds were mapped to operating rules.",
    tags: ["Algorithmic Music", "Visionary Theory", "Logic"]
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-16 py-12 md:py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-text mb-4 font-heading">Historical Contributions</h1>
          <p className="text-xl text-theme-muted max-w-2xl font-body">
            Deep dives into my foundational theories and algorithms, shaping the future of computation.
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
