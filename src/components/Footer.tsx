import { siteConfig } from "@/data/config";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BoltField from "@/components/BoltField";

const footerBolts = [
  { top: "15%", left: "92%", size: 18, delay: 300, rotate: -8, opacity: 0.35 },
  { top: "70%", left: "4%", size: 14, delay: 1200, rotate: 12, opacity: 0.3 },
];

export default function Footer() {
  const socialLinks = [
    { label: "LinkedIn", href: siteConfig.socials.linkedin },
    { label: "GitHub", href: siteConfig.socials.github },
  ].filter((link) => link.href);

  return (
    <footer
      id="contact"
      className="relative mx-auto max-w-5xl scroll-mt-20 overflow-hidden border-t border-border bg-background-alt px-6 py-24 sm:px-10"
    >
      <BoltField bolts={footerBolts} />

      <Reveal>
        <SectionHeading index="05" title="Contact" />
        <p className="mt-8 max-w-xl text-2xl font-medium leading-tight text-foreground sm:text-3xl">
          Have a project in mind or just want to talk electronics? Reach out.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            {siteConfig.email}
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>

      <div className="relative mt-20 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
