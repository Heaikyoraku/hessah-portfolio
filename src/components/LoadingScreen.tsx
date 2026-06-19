"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Terminal-style boot sequence. Kept in English to preserve the OS metaphor
// (real shells boot in English). Lasts ~1.6s, then fades into the page.
const lines = [
  "booting hessah.os v2.0",
  "loading neural runtime",
  "mounting research artifacts",
  "calibrating signal channels (256 / 256)",
  "ready",
];

export default function LoadingScreen() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (step < lines.length) {
      const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 200 : 280);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setDone(true), 450);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-bg"
        >
          <div className="w-[min(560px,90vw)] font-mono text-[13px] text-fg-muted">
            <div className="mb-4 flex items-center gap-2 font-pixel text-[10px] tracking-[0.22em] text-accent-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(96,165,250,0.7)]" />
              HESSAH / OS
            </div>
            <ul className="space-y-1.5">
              {lines.slice(0, step).map((l, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-accent-lav">→</span>
                  <span className={i === lines.length - 1 ? "font-medium text-fg" : ""}>
                    {l}
                    {i === step - 1 && <span className="caret" />}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
