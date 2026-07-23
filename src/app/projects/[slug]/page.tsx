import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import LightningBolt from "@/components/LightningBolt";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Mekhail Brohi`,
    description: project.purpose,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <Link
        href="/#projects"
        className="text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        ← All Projects
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
          {project.tag}
        </span>
        <span className="text-sm text-muted">{project.date}</span>
      </div>

      <h1 className="mt-4 flex items-center gap-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        <LightningBolt className="h-7 w-7 shrink-0" />
        {project.title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-foreground">
        {project.purpose}
      </p>

      <h2 className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Technologies Used
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <ProjectGallery
          slug={project.slug}
          title={project.title}
          count={project.imageCount}
        />
        <p className="mt-3 text-center font-mono text-xs text-muted">
          Click any photo to enlarge · shown in build order
        </p>
      </div>

      {project.notes.length > 0 && (
        <div className="mt-12 space-y-4 border-l-2 border-accent/40 pl-6">
          {project.notes.map((note, i) => (
            <p key={i} className="text-sm leading-7 text-muted">
              {note}
            </p>
          ))}
        </div>
      )}

      <h2 className="mt-16 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Parts &amp; Components
      </h2>
      <dl className="mt-6 space-y-6">
        {project.parts.map((part) => (
          <div key={part.name}>
            <dt className="text-sm font-semibold text-foreground">
              {part.name}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-muted">
              {part.note}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-8 text-sm sm:grid-cols-2">
        <Link
          href={`/projects/${prev.slug}`}
          className="group rounded-xl border border-border p-4 transition-colors hover:border-accent"
        >
          <span className="text-xs text-muted">← Previous</span>
          <p className="mt-1 font-medium text-foreground transition-colors group-hover:text-accent">
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="group rounded-xl border border-border p-4 text-right transition-colors hover:border-accent"
        >
          <span className="text-xs text-muted">Next →</span>
          <p className="mt-1 font-medium text-foreground transition-colors group-hover:text-accent">
            {next.title}
          </p>
        </Link>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/#contact"
          className="text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          Get in Touch →
        </Link>
      </div>
    </article>
  );
}
