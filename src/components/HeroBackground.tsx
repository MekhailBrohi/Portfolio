"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const CANVAS_BG = "#fbfdff";
const LINE_COLOR = "rgba(88, 145, 205, 0.3)";
const DOT_COLORS = ["#2f80ed", "#2b6cc4", "#1f5fae"];
const HALO_COLOR = "rgba(47, 128, 237, 0.13)";
const DEPTH_DOT_COLOR = "rgba(120, 165, 215, 0.4)";

/**
 * Animated constellation network: blue nodes joined by thin light
 * lines into a triangular web, with a few soft blurred dots behind
 * for depth. Vertices drift slowly so the web flexes and shifts.
 */
function PlexusCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 170;

    type Node = {
      bx: number;
      by: number;
      amp: number;
      phase: number;
      speed: number;
      x: number;
      y: number;
      r: number;
      color: string;
      halo: boolean;
    };
    type DepthDot = Omit<Node, "r" | "color" | "halo"> & { r: number };

    let raf = 0;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let edges: [number, number][] = [];
    let depthDots: DepthDot[] = [];

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      nodes = [];
      edges = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = (c - 1) * SPACING + (Math.random() - 0.5) * SPACING * 0.7;
          const by = (r - 1) * SPACING + (Math.random() - 0.5) * SPACING * 0.7;
          nodes.push({
            bx,
            by,
            amp: 7 + Math.random() * 11,
            phase: Math.random() * Math.PI * 2,
            speed: 0.15 + Math.random() * 0.25,
            x: bx,
            y: by,
            r: 1.5 + Math.random() * 2.3,
            color: DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)],
            halo: Math.random() < 0.12,
          });
        }
      }

      // Connect each node to its right, lower, and lower-right
      // neighbours, randomly dropping some edges so the web looks
      // organic instead of like a strict grid.
      const idx = (r: number, c: number) => r * cols + c;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (c < cols - 1 && Math.random() > 0.18)
            edges.push([idx(r, c), idx(r, c + 1)]);
          if (r < rows - 1 && Math.random() > 0.18)
            edges.push([idx(r, c), idx(r + 1, c)]);
          if (r < rows - 1 && c < cols - 1 && Math.random() > 0.3)
            edges.push([idx(r, c), idx(r + 1, c + 1)]);
        }
      }

      depthDots = [];
      const depthCount = Math.round((width * height) / 160000);
      for (let i = 0; i < depthCount; i++) {
        const bx = Math.random() * width;
        const by = Math.random() * height;
        depthDots.push({
          bx,
          by,
          amp: 10 + Math.random() * 14,
          phase: Math.random() * Math.PI * 2,
          speed: 0.08 + Math.random() * 0.14,
          x: bx,
          y: by,
          r: 7 + Math.random() * 12,
        });
      }
    };

    const draw = (timeMs: number) => {
      const t = timeMs / 1000;

      ctx.fillStyle = CANVAS_BG;
      ctx.fillRect(0, 0, width, height);

      // Soft out-of-focus dots behind the web for depth
      ctx.filter = "blur(9px)";
      ctx.fillStyle = DEPTH_DOT_COLOR;
      for (const d of depthDots) {
        d.x = d.bx + Math.cos(d.phase + t * d.speed) * d.amp;
        d.y = d.by + Math.sin(d.phase + t * d.speed * 0.85) * d.amp;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.filter = "none";

      for (const n of nodes) {
        n.x = n.bx + Math.cos(n.phase + t * n.speed) * n.amp;
        n.y = n.by + Math.sin(n.phase + t * n.speed * 0.8) * n.amp;
      }

      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (const [a, b] of edges) {
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
      }
      ctx.stroke();

      for (const n of nodes) {
        if (n.halo) {
          const pulse = 1 + 0.25 * Math.sin(n.phase + t * 0.9);
          ctx.fillStyle = HALO_COLOR;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 3.2 * pulse, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (ts: number) => {
      draw(ts);
      raf = requestAnimationFrame(loop);
    };

    build();
    draw(0);
    if (!reduced) raf = requestAnimationFrame(loop);

    const onResize = () => {
      build();
      draw(0);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}

/**
 * Fixed full-page background: an animated node-and-line network in
 * the site palette. Crisp while the hero is in frame, then mildly
 * blurs and fades as the visitor scrolls down the page.
 */
export default function HeroBackground() {
  const { scrollY } = useScroll();

  const blurRaw = useTransform(scrollY, [0, 700], [0, 7], { clamp: true });
  const blur = useSpring(blurRaw, { stiffness: 140, damping: 28, mass: 0.4 });
  const filter = useTransform(blur, (b) => `blur(${b.toFixed(2)}px)`);

  const dim = useTransform(scrollY, [0, 700], [0.2, 0.6], { clamp: true });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Slightly oversized so blur never reveals soft edges */}
      <motion.div className="absolute -inset-6" style={{ filter }}>
        <PlexusCanvas />
      </motion.div>
      {/* Flat scrim that deepens on scroll, no gradient */}
      <motion.div
        className="absolute inset-0 bg-background"
        style={{ opacity: dim }}
      />
    </div>
  );
}
