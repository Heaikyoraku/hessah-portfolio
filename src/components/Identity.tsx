"use client";

import { motion } from "framer-motion";
import { identity } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { useApp } from "./Providers";
import { t, ui } from "@/lib/i18n";

export default function Identity() {
  const { locale } = useApp();
  const isAr = locale === "ar";

  return (
    <section
      id="identity"
      className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-32 pb-24"
    >
      <div className="w-full">
        {/* Pixel tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-5 flex items-center gap-3 font-pixel text-[11px] tracking-[0.18em] text-accent-lav"
        >
          <span className="h-px w-8 bg-accent-lav/40" />
          <span>{t(identity.tagline, locale)}</span>
        </motion.div>

        {/* Name — display, oversized */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className={`leading-[0.96] tracking-tight text-fg
            ${isAr ? "font-ar text-[52px] sm:text-[72px] md:text-[96px]" : "font-display text-[56px] sm:text-[80px] md:text-[112px]"}`}
        >
          {t(identity.nameFirst, locale)}{" "}
          <span className="bg-gradient-to-r from-accent-lav via-accent-blue to-accent-violet bg-clip-text text-transparent">
            {t(identity.nameLast, locale)}
          </span>
        </motion.h1>

        {/* Role + location only (no availability) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className={`mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13.5px] text-fg-muted
            ${isAr ? "font-ar" : "font-mono"}`}
        >
          <span>{t(identity.role, locale)}</span>
          <span className="text-fg-dim">·</span>
          <span>{t(identity.location, locale)}</span>
        </motion.div>

        {/* Manifest — three paragraphs, no right-side panel */}
        <div className="mt-12 max-w-3xl space-y-5">
          {identity.manifest.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.18, duration: 0.7 }}
              className={`text-[16.5px] leading-[1.75] text-fg/90 md:text-[18px]
                ${isAr ? "font-ar text-[17.5px] leading-[1.95] md:text-[19.5px]" : ""}`}
            >
              {t(line, locale)}
            </motion.p>
          ))}
        </div>

        {/* Philosophy quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className={`mt-10 max-w-3xl text-[15px] italic text-fg-muted
            border-accent-violet/60 ltr:border-l-2 ltr:pl-5 rtl:border-r-2 rtl:pr-5
            ${isAr ? "font-ar text-[16px]" : ""}`}
        >
          {isAr ? "" : "\u201C"}{t(identity.philosophy, locale)}{isAr ? "" : "\u201D"}
        </motion.blockquote>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#lab"
            className="magnetic group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-violet to-accent-indigo px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(109,40,217,0.35)] transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(109,40,217,0.55)]"
          >
            {t(ui.openLab, locale)}
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <a
            href="#terminal"
            className="magnetic inline-flex items-center gap-2 rounded-full border border-line/40 bg-bg-elev/40 px-5 py-2.5 font-mono text-[12px] tracking-wider text-fg-muted transition hover:scale-[1.02] hover:border-accent-lav/50 hover:text-accent-lav"
          >
            {t(ui.tryTerminal, locale)}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
