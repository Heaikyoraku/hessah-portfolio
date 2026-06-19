"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { t, ui } from "@/lib/i18n";
import { useApp } from "./Providers";
import SectionTitle from "./SectionTitle";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";

const tagAccent: Record<string, string> = {
  Research:  "bg-accent-violet/15 text-accent-lav border-accent-violet/30",
  Startup:   "bg-amber-400/10 text-amber-200 border-amber-400/30",
  Product:   "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  Coursework:"bg-accent-lav/10 text-fg-muted border-accent-lav/25",
  Hackathon: "bg-rose-400/10 text-rose-200 border-rose-400/30",
};

const statusDot: Record<string, string> = {
  Shipped:      "bg-emerald-400",
  "In review":  "bg-amber-400",
  Active:       "bg-accent-blue",
  Archived:     "bg-fg-dim/60",
};

// 3D-tilt card on hover — adds the interactivity she asked for.
function TiltCard({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-2px)`;
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };
  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="group relative flex w-full flex-col items-start gap-3 rounded-2xl border border-line/25 bg-gradient-to-br from-bg-elev/70 to-bg/40 p-5 text-left transition-[box-shadow,border-color] duration-300 hover:border-accent-lav/45 hover:shadow-[0_20px_60px_-30px_rgb(139_92_246_/_0.6)] ltr:text-left rtl:text-right"
      style={{ transition: "transform 0.25s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s, border-color 0.3s" }}
    >
      {children}
    </button>
  );
}

export default function ProjectsLab() {
  const { locale } = useApp();
  const isAr = locale === "ar";
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const slug = (e as CustomEvent).detail as string;
      const p = projects.find((x) => x.slug === slug);
      if (p) {
        setOpen(p);
        document.getElementById("lab")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("open-project", handler);
    return () => window.removeEventListener("open-project", handler);
  }, []);

  return (
    <section id="lab" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        code="02"
        title={t(ui.lab, locale)}
        caption={isAr
          ? "افتح أي ملف مشروع لقراءة المشكلة، المنهجية، البنية، النتائج، والدروس."
          : "Open any case file for the problem, approach, architecture, results, and lessons."}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <TiltCard onClick={() => setOpen(p)}>
              <div className="absolute top-4 opacity-0 transition group-hover:opacity-100 ltr:right-4 rtl:left-4">
                <ArrowUpRight className="h-4 w-4 text-fg" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-md border px-2 py-0.5 font-pixel text-[9px] tracking-wider ${tagAccent[p.tag]}`}>
                  {t(ui.tag[p.tag], locale)}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-fg-dim">
                  <span className={`h-1.5 w-1.5 rounded-full ${statusDot[p.status]}`} />
                  {t(ui.status[p.status], locale)}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-fg-dim/70">· {p.year}</span>
              </div>
              <h3 className={`leading-tight text-fg ${isAr ? "font-ar text-[21px]" : "font-display text-[20px]"}`}>
                {t(p.title, locale)}
              </h3>
              <p className={`text-[13.5px] leading-relaxed text-fg-muted ${isAr ? "font-ar text-[14.5px]" : ""}`}>
                {t(p.subtitle, locale)}
              </p>
              <div className="mt-auto flex flex-wrap gap-1">
                {p.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded border border-line/30 bg-bg/30 px-1.5 py-0.5 font-mono text-[10px] text-fg-dim">
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open && <CaseFile project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

function CaseFile({ project, onClose }: { project: Project; onClose: () => void }) {
  const { locale } = useApp();
  const isAr = locale === "ar";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-bg/80 px-4 py-8 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative w-full max-w-3xl overflow-y-auto rounded-2xl p-6 sm:p-8"
        style={{ maxHeight: "85vh" }}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 grid h-8 w-8 place-items-center rounded-full border border-line/30 text-fg-muted transition hover:border-accent-lav/40 hover:text-accent-lav ltr:right-4 rtl:left-4"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 font-pixel text-[10px] tracking-[0.18em] text-fg-dim">
          <span>{t(ui.caseFile, locale)}</span>
          <span className="text-fg-dim/50">/</span>
          <span>{project.slug.toUpperCase()}</span>
          <span className="text-fg-dim/50">/</span>
          <span>{project.year}</span>
        </div>

        <h3 className={`mt-3 leading-tight text-fg ${isAr ? "font-ar text-[28px] sm:text-[36px]" : "font-display text-[28px] sm:text-[34px]"}`}>
          {t(project.title, locale)}
        </h3>
        <p className={`mt-1 text-[15px] text-fg-muted ${isAr ? "font-ar text-[16px]" : ""}`}>
          {t(project.subtitle, locale)}
        </p>

        <div className="my-6 hairline" />

        <Block label={`01 · ${t(ui.problem, locale)}`} body={t(project.problem, locale)} isAr={isAr} />
        <Block label={`02 · ${t(ui.approach, locale)}`} body={t(project.approach, locale)} isAr={isAr} />

        <div className="mt-6">
          <Label>{`03 · ${t(ui.architecture, locale)}`}</Label>
          <ul className="mt-2 space-y-1.5">
            {project.architecture.map((a, i) => (
              <li key={i} className={`flex items-start gap-2 text-[13px] text-fg ${isAr ? "font-ar text-[14.5px]" : "font-mono"}`}>
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                {t(a, locale)}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Label>{`04 · ${t(ui.technologies, locale)}`}</Label>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-md border border-line/35 bg-bg/30 px-2 py-1 font-mono text-[11px] text-fg">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Label>{`05 · ${t(ui.results, locale)}`}</Label>
          <ul className="mt-2 space-y-1.5">
            {project.results.map((r, i) => (
              <li key={i} className={`flex items-start gap-2 text-[14px] text-fg ${isAr ? "font-ar text-[15px]" : ""}`}>
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                {t(r, locale)}
              </li>
            ))}
          </ul>
        </div>

        <Block label={`06 · ${t(ui.lessons, locale)}`} body={t(project.lessons, locale)} isAr={isAr} />

        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line/35 bg-bg/30 px-3 py-1.5 font-mono text-[11px] text-fg transition hover:border-accent-lav/50 hover:text-accent-lav"
              >
                {l.label} <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="font-pixel text-[9px] tracking-[0.22em] text-fg-dim">{children}</div>;
}
function Block({ label, body, isAr }: { label: string; body: string; isAr: boolean }) {
  return (
    <div className="mt-6">
      <Label>{label}</Label>
      <p className={`mt-2 leading-relaxed text-fg ${isAr ? "font-ar text-[15.5px] leading-[1.95]" : "text-[14.5px]"}`}>
        {body}
      </p>
    </div>
  );
}
