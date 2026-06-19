"use client";

import { useApp } from "./Providers";
import { Sun, Moon, Languages } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useApp();
  if (!mounted) {
    // Reserve space to avoid layout shift; render nothing until hydrated.
    return <div className="h-9 w-9" aria-hidden />;
  }
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group grid h-9 w-9 place-items-center rounded-lg border border-line/40 bg-bg-elev/40 text-fg-muted transition hover:border-accent-lav/60 hover:text-accent-lav"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition group-hover:-rotate-12" />
      )}
    </button>
  );
}

export function LanguageToggle() {
  const { locale, setLocale, mounted } = useApp();
  if (!mounted) return <div className="h-9 w-[58px]" aria-hidden />;
  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className="group flex h-9 items-center gap-1.5 rounded-lg border border-line/40 bg-bg-elev/40 px-2.5 font-mono text-[11px] tracking-wider text-fg-muted transition hover:border-accent-lav/60 hover:text-accent-lav"
      aria-label="Toggle language"
    >
      <Languages className="h-3.5 w-3.5" />
      <span>{locale === "en" ? "عربي" : "EN"}</span>
    </button>
  );
}
