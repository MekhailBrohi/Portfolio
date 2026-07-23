import Image from "next/image";
import { siteConfig } from "@/data/config";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import BoltField from "@/components/BoltField";
import LightningBolt from "@/components/LightningBolt";

const heroBolts = [
  { top: "14%", left: "88%", size: 22, delay: 0, rotate: 10, opacity: 0.55 },
  { top: "72%", left: "8%", size: 16, delay: 900, rotate: -12, opacity: 0.4 },
  { top: "40%", left: "94%", size: 12, delay: 1600, rotate: 5, opacity: 0.35 },
  { top: "82%", left: "80%", size: 18, delay: 2300, rotate: -6, opacity: 0.45 },
];

const stats = [
  { value: `${projects.length}`, label: "Hands-on builds" },
  { value: "2+", label: "Microcontrollers" },
  { value: "100%", label: "Self-built" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <Image
        src="/images/hero/circuit-board.jpg"
        alt="Illuminated circuit board traces"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-transparent to-neutral-950/40"
        aria-hidden="true"
      />

      <BoltField bolts={heroBolts} />

      <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-28 sm:px-10 sm:pt-32 sm:pb-40">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            <LightningBolt className="h-3.5 w-3.5" />
            {siteConfig.role} · {siteConfig.school}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {siteConfig.name}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            {siteConfig.tagline}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-semibold text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
