import { TimelineItem } from "@/components/ui/TimelineItem";

export const metadata = {
  title: "Experience | Vincent Sedimo",
  description: "Career history and professional experience.",
};

const experienceData = [
  {
    role: "Senior Full Stack Engineer",
    company: "Acme Corp",
    period: "2022 - Present",
    description: [
      "Architected and led the migration of a legacy monolithic application to a microservices architecture using Node.js and Docker.",
      "Improved database query performance by 40% through indexing and Redis caching.",
      "Mentored a team of 5 junior developers and established CI/CD best practices."
    ],
    technologies: ["Node.js", "Docker", "Redis", "AWS", "Next.js"]
  },
  {
    role: "Software Engineer",
    company: "TechNova Solutions",
    period: "2019 - 2022",
    description: [
      "Developed high-performance React frontends for enterprise clients.",
      "Implemented complex state management using Redux and Context API.",
      "Built RESTful APIs in Express.js connected to PostgreSQL databases."
    ],
    technologies: ["React", "Express.js", "PostgreSQL", "Redux"]
  }
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-16 py-12 md:py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-text mb-4 font-heading">Career History</h1>
          <p className="text-xl text-theme-muted max-w-2xl font-body">
            A timeline of my professional journey, focusing on system architecture and full-stack development.
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
