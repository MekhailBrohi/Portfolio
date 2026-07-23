"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ProjectGallery({
  slug,
  title,
  count,
}: {
  slug: string;
  title: string;
  count: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const images = Array.from({ length: count }, (_, i) => i + 1);

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (dir: number) =>
      setOpenIndex((cur) =>
        cur === null ? cur : (cur + dir + count) % count
      ),
    [count]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, show]);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {images.map((n, i) => (
          <button
            key={n}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-border ring-accent transition-all hover:ring-2"
            aria-label={`Open photo ${n} of ${title}`}
          >
            <Image
              src={`/images/${slug}/${n}.jpg`}
              alt={`${title} — build photo ${n}`}
              fill
              sizes="(min-width: 640px) 30vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-0.5 font-mono text-[10px] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              {n}/{count}
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 text-3xl leading-none text-white/70 transition-colors hover:text-white"
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-xl text-white transition-colors hover:bg-white/20"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/${slug}/${openIndex + 1}.jpg`}
              alt={`${title} — build photo ${openIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 font-mono text-sm text-white/70">
              {openIndex + 1} / {count}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-xl text-white transition-colors hover:bg-white/20"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
