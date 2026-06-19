"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Theme = "dark" | "light";

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
  mounted: boolean;
};

const Context = createContext<Ctx | null>(null);

export function useApp() {
  const c = useContext(Context);
  if (!c) throw new Error("useApp must be used inside <Providers>");
  return c;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  // Defaults safe for SSR. Real values applied after mount to avoid hydration drift.
  const [theme, setThemeState] = useState<Theme>("dark");
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("h-theme") as Theme) || "dark";
    const savedLocale = (localStorage.getItem("h-locale") as Locale) || "en";
    setThemeState(savedTheme);
    setLocaleState(savedLocale);
    setMounted(true);
  }, []);

  // Apply theme & locale to <html>
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("h-theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("h-locale", locale);
  }, [locale, mounted]);

  const setTheme = (t: Theme) => setThemeState(t);
  const setLocale = (l: Locale) => setLocaleState(l);

  return (
    <Context.Provider value={{ theme, setTheme, locale, setLocale, mounted }}>
      {children}
    </Context.Provider>
  );
}
