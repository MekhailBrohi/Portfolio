import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="spark-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-transparent"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-border">
        <Image
          src={`/images/${project.slug}/${project.imageCount}.jpg`}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.tag}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.imageCount} photos
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold text-foreground">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted">
            {project.date}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-muted">{project.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
          View project
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
