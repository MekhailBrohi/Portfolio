import LightningBolt from "@/components/LightningBolt";

type BoltSpec = {
  top: string;
  left: string;
  size: number;
  delay: number;
  rotate?: number;
  opacity?: number;
};

export default function BoltField({ bolts }: { bolts: BoltSpec[] }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {bolts.map((bolt, i) => (
        <LightningBolt
          key={i}
          className="drift absolute"
          style={{
            top: bolt.top,
            left: bolt.left,
            width: bolt.size,
            height: bolt.size,
            opacity: bolt.opacity ?? 0.5,
            transform: `rotate(${bolt.rotate ?? 0}deg)`,
            animationDelay: `${bolt.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}
