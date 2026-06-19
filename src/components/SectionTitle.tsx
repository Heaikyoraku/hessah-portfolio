"use client";

import { motion } from "framer-motion";
import { useApp } from "./Providers";

export default function SectionTitle({
  code,
  title,
  caption,
}: {
  code: string;
  title: string;
  caption?: string;
}) {
  const { locale } = useApp();
  const isAr = locale === "ar";
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 font-pixel text-[10px] tracking-[0.22em] text-accent-lav"
      >
        <span className="h-px w-8 bg-accent-lav/40" />
        <span>{code} · {title.toUpperCase()}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`mt-3 leading-tight text-fg
          ${isAr ? "font-ar text-[34px] sm:text-[44px] md:text-[54px]" : "font-display text-[36px] sm:text-[46px] md:text-[58px]"}`}
      >
        {title}
      </motion.h2>
      {caption && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-3 max-w-2xl text-[15px] text-fg-muted ${isAr ? "font-ar text-[16px]" : ""}`}
        >
          {caption}
        </motion.p>
      )}
    </div>
  );
}
