import { siteConfig } from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-24 sm:px-10"
    >
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-8 max-w-2xl text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl">
          {siteConfig.summary}
        </p>
      </Reveal>
    </section>
  );
}
