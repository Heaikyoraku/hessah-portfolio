"use client";

import { motion } from "framer-motion";
import { identity } from "@/lib/data";
import { t, ui } from "@/lib/i18n";
import { useApp } from "./Providers";
import SectionTitle from "./SectionTitle";
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPortal() {
  const { locale } = useApp();
  const isAr = locale === "ar";

  const channels = [
    {
      icon: Mail,
      label: { en: "Email", ar: "البريد الإلكتروني" },
      value: identity.email,
      href: `mailto:${identity.email}`,
      note: { en: "Best for opportunities & collaborations", ar: "الأنسب للفرص والتعاون" },
    },
    {
      icon: Linkedin,
      label: { en: "LinkedIn", ar: "لينكدإن" },
      value: "hessahmalmujally",
      href: identity.linkedin,
      note: { en: "Professional network", ar: "الشبكة المهنية" },
    },
    {
      icon: Github,
      label: { en: "GitHub", ar: "غيت‌هَب" },
      value: identity.handle,
      href: identity.github,
      note: { en: "Code, experiments, and side projects", ar: "الكود والتجارب والمشاريع الجانبية" },
    },
    {
      icon: Phone,
      label: { en: "Phone", ar: "الهاتف" },
      value: identity.phone,
      href: `tel:${identity.phone}`,
      note: { en: "Direct line", ar: "اتصال مباشر" },
    },
  ];

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        code="07"
        title={t(ui.contact, locale)}
        caption={
          isAr
            ? "مفتوحة على الفرص الوظيفية والبحثية والتعاونات التي تخدم منظومة الذكاء الاصطناعي في المملكة."
            : "Open to roles, research collaborations, and partnerships that contribute to the Kingdom's AI ecosystem."
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {channels.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass group flex items-center gap-4 rounded-xl p-5 transition hover:-translate-y-1 hover:border-accent-lav/45"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-indigo text-white shadow-[0_0_22px_rgba(139,92,246,0.4)] transition group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-pixel text-[9px] tracking-[0.22em] text-fg-dim">
                  {t(c.label, locale).toUpperCase()}
                </div>
                <div className={`mt-0.5 truncate text-fg ${isAr ? "font-ar text-[15.5px]" : "font-mono text-[14px]"}`}>
                  {c.value}
                </div>
                <div className={`mt-0.5 text-[12px] text-fg-muted ${isAr ? "font-ar text-[13px]" : ""}`}>
                  {t(c.note, locale)}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-dim opacity-0 transition group-hover:opacity-100" />
            </motion.a>
          );
        })}
      </div>

      {/* Location strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl px-5 py-4"
      >
        <div className="flex items-center gap-2.5 text-fg-muted">
          <MapPin className="h-4 w-4 text-accent-lav" />
          <span className={`${isAr ? "font-ar text-[14.5px]" : "text-[14px]"}`}>
            {t(identity.location, locale)}
          </span>
          <span className="font-mono text-[11px] tracking-wider text-fg-dim">· UTC+3</span>
        </div>
        <div className="flex items-center gap-2 font-pixel text-[10px] tracking-widest text-fg-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          {t(ui.online, locale)}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="my-12 hairline" />
      <div className="flex flex-col items-center gap-2 text-center font-mono text-[11px] tracking-wider text-fg-dim">
        <div className="flex items-center gap-2 font-pixel text-[10px] tracking-[0.22em]">
          <span>HESSAH/OS</span>
          <span className="text-fg-dim/50">·</span>
          <span>v2.0</span>
          <span className="text-fg-dim/50">·</span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className={`${isAr ? "font-ar text-[12.5px]" : ""}`}>
          {t(ui.designedBy, locale)}
        </div>
      </div>
    </section>
  );
}
