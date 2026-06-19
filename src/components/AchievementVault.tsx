"use client";

import { motion } from "framer-motion";
import { achievements, certificates } from "@/lib/data";
import { t, ui } from "@/lib/i18n";
import { useApp } from "./Providers";
import SectionTitle from "./SectionTitle";
import { Trophy, Award, Sparkles, Users, Megaphone } from "lucide-react";

const kindIcon: Record<string, React.ElementType> = {
  Competition: Trophy,
  Accelerator: Sparkles,
  Showcase:    Megaphone,
  Ambassador:  Users,
  Leadership:  Award,
};

export default function AchievementVault() {
  const { locale } = useApp();
  const isAr = locale === "ar";
  return (
    <section id="vault" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        code="04"
        title={t(ui.vault, locale)}
        caption={
          isAr
            ? "مسابقات، حاضنات، أدوار قيادية، وشهادات تدعم العمل."
            : "Competitions, accelerators, leadership roles, and certifications that back the work."
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {achievements.map((a, i) => {
          const Icon = kindIcon[a.kind.en] ?? Award;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass group flex items-start gap-4 rounded-xl p-5 transition hover:border-accent-lav/40 hover:-translate-y-0.5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-indigo text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className={`leading-tight text-fg ${isAr ? "font-ar text-[17px]" : "font-display text-[17px]"}`}>
                    {t(a.title, locale)}
                  </h3>
                  <span className="shrink-0 font-mono text-[11px] tracking-wider text-fg-dim">
                    {a.year}
                  </span>
                </div>
                <div className="mt-0.5 text-[13px] text-accent-blue">{t(a.org, locale)}</div>
                <div className="mt-1 font-pixel text-[9px] tracking-widest text-fg-dim/80">
                  {t(a.kind, locale).toUpperCase()}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-14">
        <div className="mb-4 flex items-center gap-3 font-pixel text-[10px] tracking-[0.22em] text-accent-lav">
          <span className="h-px w-6 bg-accent-lav/40" />
          <span>04.B · {t(ui.certifications, locale)}</span>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="rounded-lg border border-line/30 bg-bg-elev/30 p-3 transition hover:border-accent-lav/40 hover:bg-bg-elev/60"
            >
              <div className={`text-[13px] text-fg ${isAr ? "font-ar text-[14px]" : ""}`}>
                {t(c.name, locale)}
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-wider text-fg-dim">
                {c.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
