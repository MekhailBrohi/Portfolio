import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 border-t border-border bg-background/95"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <Reveal>
          <SectionHeading index="03" title="Projects" />
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
