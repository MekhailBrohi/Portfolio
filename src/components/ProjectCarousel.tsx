"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectCarousel({
  slug,
  title,
  count,
}: {
  slug: string;
  title: string;
  count: number;
}) {
  const [index, setIndex] = useState(0);
  const images = Array.from({ length: count }, (_, i) => i + 1);

  const go = (dir: number) =>
    setIndex((cur) => (cur + dir + count) % count);

  return (
    <div>
      {/* Controls at the top */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Build Photos
        </p>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted">
            {index + 1} / {count}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      {/* Slides */}
      <div className="relative mt-4 overflow-hidden rounded-2xl border border-border bg-background-alt">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((n) => (
            <div
              key={n}
              className="relative aspect-[16/9] w-full shrink-0 sm:aspect-[2/1]"
            >
              <Image
                src={`/images/${slug}/${n}.jpg`}
                alt={`${title}, build photo ${n}`}
                fill
                sizes="(min-width: 1280px) 72rem, 100vw"
                className="object-contain"
                priority={n === 1}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((n, i) => (
            <button
              key={n}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${n}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-accent" : "bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
