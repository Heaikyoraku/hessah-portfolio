"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { t, ui } from "@/lib/i18n";
import { useApp } from "./Providers";
import SectionTitle from "./SectionTitle";

const typeColor: Record<string, string> = {
  education: "from-accent-blue to-accent-blue/40",
  work:      "from-accent-violet to-accent-violet/40",
  founder:   "from-amber-400 to-amber-400/40",
  research:  "from-accent-lav to-accent-lav/40",
  award:     "from-emerald-400 to-emerald-400/40",
  leadership:"from-rose-400 to-rose-400/40",
};

export default function Journey() {
  const { locale } = useApp();
  const isAr = locale === "ar";
  return (
    <section id="journey" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        code="01"
        title={t(ui.journey, locale)}
        caption={
          isAr
            ? "سجل زمني للعمل — اللون يُشير إلى نوع الإنجاز: بحث، ريادة، تعليم، جائزة."
            : "A chronological log of the work. Color encodes the kind of thing — research, founder, education, award."
        }
      />

      <div className="relative">
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet/40 via-accent-lav/15 to-transparent
                        ltr:left-3 rtl:right-3 md:ltr:left-[120px] md:rtl:right-[120px]" />

        <ul className="space-y-10">
          {timeline.map((tn, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="relative grid grid-cols-[28px_1fr] gap-4 md:grid-cols-[110px_28px_1fr] md:gap-6"
            >
              <div className={`hidden text-[11px] tracking-wider text-fg-dim md:block ${isAr ? "font-ar" : "font-mono"}`}>
                {t(tn.date, locale)}
              </div>
              <div className="relative flex flex-col items-center">
                <span className={`relative grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br ${typeColor[tn.type]} shadow-[0_0_18px_rgba(139,92,246,0.4)]`}>
                  <span className="h-2 w-2 rounded-full bg-bg" />
                </span>
              </div>
              <div className="glass rounded-xl px-5 py-4">
                <div className={`mb-1 flex flex-wrap items-center gap-2 text-[10px] tracking-widest text-fg-dim md:hidden ${isAr ? "font-ar" : "font-mono"}`}>
                  <span>{t(tn.date, locale)}</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className={`text-fg ${isAr ? "font-ar text-[19px]" : "font-display text-[18px]"}`}>
                    {t(tn.title, locale)}
                  </h3>
                  <span className="font-pixel text-[9px] uppercase tracking-widest text-fg-dim">
                    {t(ui.type[tn.type], locale)}
                  </span>
                </div>
                <div className="mt-0.5 text-[13px] text-accent-blue">{t(tn.org, locale)}</div>
                <p className={`mt-2 text-[14px] leading-relaxed text-fg-muted ${isAr ? "font-ar text-[15px] leading-[1.85]" : ""}`}>
                  {t(tn.body, locale)}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
