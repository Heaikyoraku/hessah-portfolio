"use client";

import { useEffect, useRef } from "react";
import { useApp } from "./Providers";

type Node = { x: number; y: number; vx: number; vy: number };

export default function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { theme, mounted } = useApp();

  useEffect(() => {
    if (!mounted) return;
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const isLight = theme === "light";

    // Theme-aware colors: lavender in dark, deeper violet in light.
    const nodeColor = isLight
      ? "rgba(124, 58, 237, 0.55)"   // deep violet
      : "rgba(196, 181, 253, 0.85)"; // soft lavender
    const linkColor = isLight
      ? "rgba(99, 102, 241, "        // indigo with alpha appended per-link
      : "rgba(139, 92, 246, ";
    const baseOpacity = isLight ? 0.18 : 0.35;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };

    setSize();

    // Build node set proportional to viewport but capped.
    const count = Math.min(56, Math.floor((window.innerWidth * window.innerHeight) / 28000));
    const nodes: Node[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
    }));

    const linkDist = 150;
    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update positions
      if (!reduceMotion) {
        for (const n of nodes) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > window.innerWidth)  n.vx *= -1;
          if (n.y < 0 || n.y > window.innerHeight) n.vy *= -1;
        }
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * baseOpacity;
            ctx.strokeStyle = `${linkColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      ctx.fillStyle = nodeColor;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", setSize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
    };
  }, [theme, mounted]);

  // Until providers hydrate, render nothing — avoids flashing the wrong palette.
  if (!mounted) return null;

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-0 ${theme === "light" ? "opacity-50" : "opacity-70"}`}
    />
  );
}
