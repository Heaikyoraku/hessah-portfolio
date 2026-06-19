"use client";

import { motion } from "framer-motion";
import { focus } from "@/lib/data";
import { t, ui } from "@/lib/i18n";
import { useApp } from "./Providers";
import SectionTitle from "./SectionTitle";

export default function CurrentExperiments() {
  const { locale } = useApp();
  const isAr = locale === "ar";
  return (
    <section id="now" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      {/* No tagline — section title only. */}
      <SectionTitle code="05" title={t(ui.now, locale)} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {focus.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass group relative overflow-hidden rounded-xl p-5 transition hover:-translate-y-1"
          >
            <div className="mb-3 flex items-center gap-2 font-pixel text-[9px] tracking-[0.22em] text-fg-dim">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              {t(ui.inProgress, locale)}
            </div>
            <h3 className={`leading-tight text-fg ${isAr ? "font-ar text-[19px]" : "font-display text-[18px]"}`}>
              {t(f.title, locale)}
            </h3>
            <p className={`mt-2 leading-relaxed text-fg-muted ${isAr ? "font-ar text-[14.5px] leading-[1.9]" : "text-[13.5px]"}`}>
              {t(f.body, locale)}
            </p>
            {/* Pixel corner accent that moves on hover */}
            <span className="pointer-events-none absolute bottom-2 right-2 font-pixel text-[9px] tracking-widest text-accent-lav/40 transition group-hover:text-accent-lav/80">
              0{i + 1}/0{focus.length}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
