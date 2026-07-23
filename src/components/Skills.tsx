import { skillCategories } from "@/data/skills";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-5xl scroll-mt-20 border-t border-border bg-background-alt px-6 py-24 sm:px-10"
    >
      <Reveal>
        <SectionHeading index="02" title="Technical Skills" />
      </Reveal>
      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((group, i) => (
          <Reveal key={group.category} delay={i * 90}>
            <h3 className="text-sm font-semibold text-foreground">
              {group.category}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-6 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
