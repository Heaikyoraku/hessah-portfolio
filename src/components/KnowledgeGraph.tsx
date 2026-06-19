"use client";

import { useState, useMemo } from "react";
import { graphNodes, graphEdges } from "@/lib/data";
import { t, ui } from "@/lib/i18n";
import { useApp } from "./Providers";
import SectionTitle from "./SectionTitle";

const groupColor: Record<string, string> = {
  core:    "rgb(var(--accent-lav))",
  applied: "rgb(var(--accent-blue))",
  method:  "rgb(var(--accent-violet))",
  product: "rgb(var(--accent-rose))",
};

export default function KnowledgeGraph() {
  const { locale } = useApp();
  const isAr = locale === "ar";
  const [hover, setHover] = useState<string | null>(null);

  const adj = useMemo(() => {
    const m = new Map<string, Set<string>>();
    graphEdges.forEach(([a, b]) => {
      if (!m.has(a)) m.set(a, new Set());
      if (!m.has(b)) m.set(b, new Set());
      m.get(a)!.add(b);
      m.get(b)!.add(a);
    });
    return m;
  }, []);

  const X = (x: number) => 500 + x * 410;
  const Y = (y: number) => 400 + y * 320;

  const isLinked = (id: string) =>
    hover === id || (hover ? adj.get(hover)?.has(id) ?? false : true);

  return (
    <section id="map" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        code="03"
        title={isAr ? "خارطة الذكاء الاصطناعي" : "AI Exploration Map"}
        caption={
          isAr
            ? "اهتماماتي ليست قائمة — بل خارطة. مرّر فوق أي عقدة لرؤية ما يتصل بها."
            : "My interests aren't a list — they're a graph. Hover any node to see its connections."
        }
      />

      <div className="glass rounded-2xl p-3 sm:p-6">
        <div className="relative overflow-hidden rounded-xl bg-pixel">
          <svg viewBox="0 0 1000 800" className="h-auto w-full" aria-label="AI knowledge graph">
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgb(var(--accent-lav) / 0.55)" />
                <stop offset="100%" stopColor="rgb(var(--accent-lav) / 0)" />
              </radialGradient>
              <linearGradient id="edgeGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgb(var(--accent-violet) / 0.85)" />
                <stop offset="100%" stopColor="rgb(var(--accent-blue) / 0.85)" />
              </linearGradient>
            </defs>

            {graphEdges.map(([a, b], i) => {
              const na = graphNodes.find((n) => n.id === a)!;
              const nb = graphNodes.find((n) => n.id === b)!;
              const highlight = hover && (hover === a || hover === b);
              return (
                <line
                  key={i}
                  x1={X(na.x)} y1={Y(na.y)} x2={X(nb.x)} y2={Y(nb.y)}
                  stroke={highlight ? "url(#edgeGrad)" : "rgb(var(--accent-lav) / 0.22)"}
                  strokeWidth={highlight ? 2 : 1}
                  style={{ transition: "all 280ms ease" }}
                />
              );
            })}

            {graphNodes.map((n, i) => {
              const color = groupColor[n.group];
              const linked = isLinked(n.id);
              const isHover = hover === n.id;
              const r = n.id === "ai" ? 24 : 14;
              // Gentle idle float — different offset per node.
              const floatY = Math.sin(i * 1.3) * 2;
              return (
                <g
                  key={n.id}
                  onMouseEnter={() => setHover(n.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(n.id)}
                  onBlur={() => setHover(null)}
                  tabIndex={0}
                  style={{ cursor: "pointer", outline: "none", transform: `translateY(${floatY}px)` }}
                >
                  <circle cx={X(n.x)} cy={Y(n.y)} r={r + 16} fill="url(#nodeGlow)" opacity={isHover ? 1 : 0.55} style={{ transition: "opacity 250ms" }} />
                  <circle
                    cx={X(n.x)} cy={Y(n.y)} r={r}
                    fill={isHover ? color : "rgb(var(--bg-elev))"}
                    stroke={color}
                    strokeWidth={2}
                    opacity={linked ? 1 : 0.35}
                    style={{ transition: "all 280ms ease" }}
                  />
                  <text
                    x={X(n.x)}
                    y={Y(n.y) + r + 18}
                    textAnchor="middle"
                    fontSize={isAr ? "14" : "13"}
                    fontFamily={isAr ? "var(--font-ar)" : "var(--font-mono)"}
                    fill="rgb(var(--fg))"
                    opacity={linked ? 1 : 0.45}
                    style={{ transition: "all 280ms ease", pointerEvents: "none" }}
                  >
                    {t(n.label, locale)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-fg-dim">
          {(["core","applied","method","product"] as const).map((k) => (
            <span key={k} className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: groupColor[k] }} />
              {t(
                k === "core" ? ui.legendCore :
                k === "applied" ? ui.legendApplied :
                k === "method" ? ui.legendMethod : ui.legendProduct,
                locale
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
