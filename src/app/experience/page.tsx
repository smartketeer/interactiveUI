import { TimelineItem } from "@/components/ui/TimelineItem";

export const metadata = {
  title: "Experience | Ada Lovelace",
  description: "Career history and historical milestones.",
};

const experienceData = [
  {
    role: "Author of the First Computer Program",
    company: "Notes on the Analytical Engine",
    period: "1843",
    description: [
      "Appended extensive 'Notes' (Notes A through G) to the translation of Menabrea's article.",
      "Contained what is widely considered the first computer program: an algorithm to compute Bernoulli numbers."
    ],
    technologies: ["Mathematics", "Algorithm Design", "Analytical Engine"]
  },
  {
    role: "Translator & Commentator",
    company: "Scientific Memoirs",
    period: "1842 - 1843",
    description: [
      "Translated Luigi Menabrea's French article on the Analytical Engine into English."
    ],
    technologies: ["French", "English", "Technical Writing"]
  },
  {
    role: "Mathematical Visionary",
    company: "Introduction to the Difference Engine",
    period: "1833",
    description: [
      "Met Charles Babbage and was introduced to the prototype of the Difference Engine."
    ],
    technologies: ["Calculus", "Logic", "Difference Engine"]
  }
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-16 py-12 md:py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-text mb-4 font-heading">Historical Milestones</h1>
          <p className="text-xl text-theme-muted max-w-2xl font-body">
            A timeline of my contributions to mathematics and the dawn of computing.
          </p>
        </div>
      
      <div className="flex flex-col relative mt-8">
        {experienceData.map((job, index) => (
          <TimelineItem key={index} {...job} />
        ))}
      </div>
      </section>
    </div>
  );
}
