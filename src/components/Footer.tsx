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
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-background-alt/95"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <BoltField bolts={footerBolts} />

      <Reveal>
        <SectionHeading index="04" title="Contact" />
        <p className="mt-8 max-w-xl text-2xl font-medium leading-tight text-foreground sm:text-3xl">
          Have a project in mind or just want to talk electronics? Reach out.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
          I am always happy to hear about new projects, internship and co-op
          opportunities, or interesting problems that need solving. Whether you
          want to collaborate on a build, have questions about one of my
          projects, or just want to trade ideas about circuits and code, my
          inbox is open. I usually reply within a day or two.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
          >
            Email Me! Mekhailbrohi08@gmail.com
          </a>
          <a
            href="/resume.pdf"
            download="Mekhail-Brohi-Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              <path d="M8 2v8m0 0 3-3m-3 3L5 7m-3 5v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1" />
            </svg>
            Download Resume
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

      <div className="relative mt-20 border-t border-border pt-8 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
      </div>
    </footer>
  );
}
