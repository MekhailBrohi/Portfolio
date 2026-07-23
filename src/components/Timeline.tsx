import Link from "next/link";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import LightningBolt from "@/components/LightningBolt";

export default function Timeline() {
  return (
    <section
      id="journey"
      className="relative mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-24 sm:px-10"
    >
      <Reveal>
        <SectionHeading index="03" title="Journey" />
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          Four builds across four months — each one pushing a little further than
          the last, from a first microcontroller project to a motor wound by hand.
        </p>
      </Reveal>

      <div className="relative mt-12 pl-8">
        {/* vertical current line */}
        <span
          className="absolute left-[10px] top-2 bottom-2 w-px"
          style={{
            background:
              "linear-gradient(180deg, var(--border), var(--accent), var(--border))",
          }}
          aria-hidden="true"
        />

        <ol className="space-y-10">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90}>
              <li className="relative">
                {/* node */}
                <span className="absolute -left-8 top-1 flex h-5 w-5 items-center justify-center">
                  <LightningBolt className="h-4 w-4" />
                </span>

                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-xs text-accent">
                      {project.date}
                    </span>
                    <span className="text-xs text-muted">·</span>
                    <span className="text-xs text-muted">{project.tag}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-muted">
                    {project.blurb}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
