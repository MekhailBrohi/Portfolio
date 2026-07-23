import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import LightningBolt from "@/components/LightningBolt";
import ProjectCarousel from "@/components/ProjectCarousel";

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
    <div className="flex-1 bg-background/95">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <Link
          href="/#projects"
          className="text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          ← All Projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="bg-accent px-3 py-1 text-xs font-medium text-white">
            {project.tag}
          </span>
          <span className="font-mono text-sm text-muted">{project.date}</span>
        </div>

        <h1 className="mt-4 flex items-center gap-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          <LightningBolt className="h-7 w-7 shrink-0" />
          {project.title}
        </h1>

        {/* Carousel with controls at the top */}
        <div className="mt-10">
          <ProjectCarousel
            slug={project.slug}
            title={project.title}
            count={project.imageCount}
          />
        </div>

        {/* Horizontal layout: description beside technologies */}
        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              About This Project
            </h2>
            <p className="mt-5 text-lg leading-8 text-foreground">
              {project.purpose}
            </p>

            {project.notes.length > 0 && (
              <div className="mt-8 space-y-4 border-l-2 border-accent pl-6">
                {project.notes.map((note, i) => (
                  <p key={i} className="text-sm leading-7 text-muted">
                    {note}
                  </p>
                ))}
              </div>
            )}
          </div>

          <aside>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Technologies Used
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="chip cursor-default rounded-full border border-border bg-background-alt px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <h2 className="mt-16 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Parts &amp; Components
        </h2>
        <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
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

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-8 text-sm">
          <Link
            href={`/projects/${prev.slug}`}
            className="lift-card group rounded-xl border border-border bg-background-alt/60 p-4"
          >
            <span className="text-xs text-muted">← Previous</span>
            <p className="mt-1 font-medium text-foreground transition-colors group-hover:text-accent">
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="lift-card group rounded-xl border border-border bg-background-alt/60 p-4 text-right"
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
    </div>
  );
}
