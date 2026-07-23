import { Fragment } from "react";
import { siteConfig } from "@/data/config";
import Reveal from "@/components/Reveal";
import LightningBolt from "@/components/LightningBolt";

/** Split a string into clip-masked words that rise in one after another. */
function RisingWords({
  text,
  baseDelay = 0,
}: {
  text: string;
  baseDelay?: number;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={i}>
          <span className="hero-word">
            <span
              style={
                { "--word-delay": `${baseDelay + i * 120}ms` } as React.CSSProperties
              }
            >
              {word}
            </span>
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            <LightningBolt className="h-3.5 w-3.5" />
            {siteConfig.role} · {siteConfig.school}
          </p>
        </Reveal>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
          <RisingWords text={siteConfig.name} baseDelay={150} />
        </h1>

        {/* Flat blue rule under the name, breathes once settled */}
        <div className="hero-word mt-5">
          <span
            className="hero-rule block h-1 w-24 bg-accent"
            style={{ "--word-delay": "500ms" } as React.CSSProperties}
          />
        </div>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {siteConfig.tagline}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground"
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full border border-foreground/25 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>

      {/* Idle bobbing scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to About"
          className="float-y flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/60 transition-colors hover:border-accent hover:text-accent"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
