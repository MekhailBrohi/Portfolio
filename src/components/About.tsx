import { siteConfig } from "@/data/config";
import { skillCategories } from "@/data/skills";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.82 0H1.18A1.17 1.17 0 0 0 0 1.15v13.69A1.17 1.17 0 0 0 1.18 16h13.64A1.17 1.17 0 0 0 16 14.85V1.15A1.17 1.17 0 0 0 14.82 0ZM4.74 13.63H2.37V6h2.37ZM3.56 4.96a1.38 1.38 0 1 1 0-2.75 1.38 1.38 0 0 1 0 2.75Zm10.07 8.67h-2.37V9.92c0-.89-.02-2.02-1.23-2.02-1.24 0-1.43.96-1.43 1.96v3.77H6.24V6H8.5v1.04h.03a2.49 2.49 0 0 1 2.24-1.23c2.4 0 2.85 1.58 2.85 3.63Z" />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-border bg-background/95"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <Reveal>
          <SectionHeading index="01" title="About Me" />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Main paragraph */}
          <div className="lg:col-span-2">
            <Reveal delay={100}>
              <p className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                {siteConfig.summary}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 text-base leading-7 text-muted">
                Every build below started with the same question: how does this
                actually work? Motors, power supplies, wireless control. I plan
                the circuit, source the parts, and keep iterating until it
                runs. The skills listed here all come from that cycle of
                building, breaking, and rebuilding.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={siteConfig.socials.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={siteConfig.socials.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* Skill category cards */}
          <div className="grid content-start gap-5 sm:grid-cols-2 lg:col-span-3">
            {skillCategories.map((group, i) => (
              <Reveal key={group.category} delay={i * 90} className="h-full">
                <div className="lift-card flex h-full flex-col rounded-2xl border border-border bg-background-alt/80 p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="chip cursor-default rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
