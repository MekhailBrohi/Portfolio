import LightningBolt from "@/components/LightningBolt";

export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-muted">{index}</span>
      <LightningBolt className="h-4 w-4" />
      <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {title}
      </h2>
      <span className="heading-line ml-2 flex-1" aria-hidden="true" />
    </div>
  );
}
