"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ui, t } from "@/lib/i18n";
import { useApp } from "./Providers";
import { ThemeToggle, LanguageToggle } from "./Toggles";
import PixelLogo from "./PixelLogo";

const sections = [
  { id: "identity", code: "00", key: "identity" },
  { id: "journey",  code: "01", key: "journey" },
  { id: "lab",      code: "02", key: "lab" },
  { id: "map",      code: "03", key: "map" },
  { id: "vault",    code: "04", key: "vault" },
  { id: "now",      code: "05", key: "now" },
  { id: "terminal", code: "06", key: "terminal" },
  { id: "contact",  code: "07", key: "contact" },
] as const;

export default function Navigation() {
  const { locale } = useApp();
  const [active, setActive] = useState("identity");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Vertical rail: dots only, labels appear on hover. Eliminates overlap. */}
      <nav
        aria-label="Section navigation"
        className="fixed top-1/2 z-40 hidden -translate-y-1/2 lg:block
                   ltr:left-5 rtl:right-5"
      >
        <ul className="flex flex-col gap-4">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="group relative">
                <a
                  href={`#${s.id}`}
                  className="flex items-center"
                  aria-current={isActive ? "true" : undefined}
                  aria-label={t(ui[s.key as keyof typeof ui] as never, locale)}
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all
                      ${isActive
                        ? "w-6 bg-accent-lav shadow-[0_0_10px_rgba(183,148,244,0.6)]"
                        : "w-1.5 bg-fg-dim/40 group-hover:w-4 group-hover:bg-accent-lav/60"}`}
                  />
                  {/* Label appears on hover, in a floating chip — does not push content */}
                  <span
                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md
                               border border-line/30 bg-bg-elev/85 px-2 py-1 font-mono text-[10px] tracking-widest
                               text-fg-muted opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100
                               ltr:left-7 rtl:right-7"
                  >
                    {s.code} · {t(ui[s.key as keyof typeof ui] as never, locale)}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Top bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 md:px-8"
      >
        <a
          href="#identity"
          className="flex items-center gap-2.5 font-pixel text-[11px] tracking-[0.18em] text-fg-muted"
        >
          <PixelLogo />
          <span className="hidden sm:inline">HESSAH/OS</span>
        </a>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 px-2 font-pixel text-[10px] tracking-widest text-fg-dim md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            {t(ui.online, locale)} · {t(ui.riyadh, locale)}
          </span>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </motion.header>
    </>
  );
}
