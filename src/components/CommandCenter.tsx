"use client";

import { useEffect, useRef, useState } from "react";
import { identity, projects, achievements, timeline, certificates } from "@/lib/data";
import { t, ui, type Locale } from "@/lib/i18n";
import { useApp } from "./Providers";
import SectionTitle from "./SectionTitle";

type Line = { kind: "in" | "out" | "sys"; text: string };

const helpText = (locale: Locale) =>
  locale === "ar"
    ? `الأوامر المتاحة:
  about         — نبذة قصيرة
  skills        — التقنيات
  projects      — قائمة المشاريع (جرّب: open dhallaty)
  open <slug>   — فتح ملف مشروع
  timeline      — المسيرة الزمنية
  awards        — الإنجازات
  certs         — الشهادات
  philosophy    — فلسفتي
  contact       — كيفية التواصل
  socials       — github / linkedin
  whoami        — معلومات أساسية
  clear         — مسح الشاشة
  help          — عرض هذه القائمة`
    : `Available commands:
  about         — short bio
  skills        — technical stack
  projects      — list of projects (try: open dhallaty)
  open <slug>   — open a project case file
  timeline      — chronological journey
  awards        — competitions & honors
  certs         — certifications
  philosophy    — my take on intelligence
  contact       — how to reach me
  socials       — github / linkedin
  whoami        — basic info
  clear         — clear the screen
  help          — show this`;

function runCommand(raw: string, locale: Locale): Line[] {
  const cmd = raw.trim();
  if (!cmd) return [];
  const [head, ...rest] = cmd.split(/\s+/);
  const arg = rest.join(" ").trim();
  const out: Line[] = [];
  const isAr = locale === "ar";

  switch (head.toLowerCase()) {
    case "help":
      out.push({ kind: "out", text: helpText(locale) });
      break;
    case "about":
      out.push({
        kind: "out",
        text: `${t(identity.name, locale)} — ${t(identity.role, locale)}\n${t(identity.manifest[0], locale)}`,
      });
      break;
    case "skills":
      out.push({
        kind: "out",
        text: isAr
          ? "ذكاء توليدي · ذكاء وكيل · نماذج لغة كبيرة · رؤية حاسوبية · ذكاء متعدد الوسائط\nPyTorch · Transformers · Hugging Face · LangChain · FastAPI · Flask\nPython · علم البيانات · نشر النماذج · MLOps"
          : "Generative AI · Agentic AI · LLMs · Computer Vision · Multimodal AI\nPyTorch · Transformers · Hugging Face · LangChain · FastAPI · Flask\nPython · Data Science · Model Deployment · MLOps",
      });
      break;
    case "projects":
      out.push({
        kind: "out",
        text:
          (isAr ? "المشاريع:\n" : "Projects:\n") +
          projects.map((p) => `  ${p.slug.padEnd(24)} ${t(p.title, "en")} (${p.year})`).join("\n") +
          (isAr ? "\n\nاستخدم `open <slug>` لفتح ملف." : "\n\nUse `open <slug>` to view a case file."),
      });
      break;
    case "open": {
      if (!arg) {
        out.push({ kind: "out", text: isAr ? "الاستخدام: open <slug>" : "Usage: open <slug>." });
        break;
      }
      const p = projects.find((x) => x.slug.toLowerCase() === arg.toLowerCase());
      if (!p) {
        out.push({ kind: "out", text: isAr ? `لم يُعثر على مشروع باسم "${arg}".` : `No project found for "${arg}".` });
        break;
      }
      window.dispatchEvent(new CustomEvent("open-project", { detail: p.slug }));
      out.push({
        kind: "out",
        text: (isAr ? "فتح ملف المشروع: " : "Opening case file: ") + t(p.title, locale) + "\n" + t(p.subtitle, locale),
      });
      break;
    }
    case "timeline":
      out.push({
        kind: "out",
        text: timeline.map((tn) => `  ${t(tn.date, locale).padEnd(18)} ${t(tn.title, locale)}`).join("\n"),
      });
      break;
    case "awards":
      out.push({
        kind: "out",
        text: achievements.map((a) => `  ${a.year.padEnd(10)} ${t(a.title, locale)}`).join("\n"),
      });
      break;
    case "certs":
    case "certificates":
      out.push({
        kind: "out",
        text: certificates.map((c) => `  • ${t(c.name, locale)} — ${c.issuer}`).join("\n"),
      });
      break;
    case "philosophy":
      out.push({ kind: "out", text: `\u201C${t(identity.philosophy, locale)}\u201D` });
      break;
    case "contact":
      out.push({
        kind: "out",
        text: `Email:    ${identity.email}\nPhone:    ${identity.phone}\nLocation: ${t(identity.location, locale)}`,
      });
      break;
    case "socials":
      out.push({
        kind: "out",
        text: `GitHub:   ${identity.github}\nLinkedIn: ${identity.linkedin}`,
      });
      break;
    case "whoami":
      out.push({ kind: "out", text: `${t(identity.name, locale)} · ${identity.handle} · ${t(identity.location, locale)}` });
      break;
    case "clear":
      return [{ kind: "sys", text: "__clear__" }];
    case "ls":
      out.push({ kind: "out", text: "about  projects  timeline  awards  certs  philosophy  contact" });
      break;
    case "sudo":
      out.push({ kind: "out", text: isAr ? "محاولة لطيفة. هذه بورتفوليو، لا نواة نظام." : "Nice try. This is a portfolio, not a kernel." });
      break;
    default:
      out.push({
        kind: "out",
        text: (isAr ? "أمر غير معروف: " : "Command not found: ") + head + (isAr ? ". اكتب `help`." : ". Type `help`."),
      });
  }
  return out;
}

export default function CommandCenter() {
  const { locale } = useApp();
  const isAr = locale === "ar";
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset welcome line when locale changes.
  useEffect(() => {
    setLines([
      {
        kind: "sys",
        text: isAr
          ? "hessah.os · جلسة تفاعلية · اكتب `help`"
          : "hessah.os · interactive shell · type `help`",
      },
    ]);
  }, [isAr]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const submit = (raw: string) => {
    const next: Line[] = [...lines, { kind: "in", text: raw }];
    const result = runCommand(raw, locale);
    if (result.length === 1 && result[0].text === "__clear__") {
      setLines([{ kind: "sys", text: isAr ? "تم المسح." : "cleared." }]);
    } else {
      setLines([...next, ...result]);
    }
    if (raw.trim()) {
      setHistory((h) => [...h, raw]);
      setHistIdx(-1);
    }
    setValue("");
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit(value);
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const newIdx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(newIdx);
      setValue(history[newIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const newIdx = histIdx + 1;
      if (newIdx >= history.length) { setHistIdx(-1); setValue(""); }
      else { setHistIdx(newIdx); setValue(history[newIdx]); }
    }
  };

  return (
    <section id="terminal" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        code="06"
        title={isAr ? "غرفة التحكم" : "Command Center"}
        caption={
          isAr
            ? "جلسة حقيقية. جرّب: `help` · `projects` · `open dhallaty` · `philosophy`."
            : "A real shell. Try `help` · `projects` · `open dhallaty` · `philosophy`."
        }
      />

      <div
        className="glass-strong scanlines overflow-hidden rounded-xl shadow-[0_24px_80px_-25px_rgb(109_40_217_/_0.45)]"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-line/30 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-pixel text-[10px] tracking-widest text-fg-dim">
            hessah@os : ~ /shell
          </span>
          <span className="w-12" />
        </div>

        {/* Output — LTR even in Arabic locale (terminal convention) */}
        <div
          ref={scrollRef}
          dir="ltr"
          className="max-h-[60vh] min-h-[340px] overflow-y-auto bg-[rgb(var(--bg))]/95 px-4 py-3 font-mono text-[13px]"
        >
          {lines.map((l, i) => {
            if (l.kind === "in") {
              return (
                <div key={i} className="whitespace-pre-wrap text-fg">
                  <span className="text-accent-blue">hessah@os</span>
                  <span className="text-fg-dim">:~$ </span>
                  {l.text}
                </div>
              );
            }
            if (l.kind === "sys") {
              return <div key={i} className="whitespace-pre-wrap text-fg-dim">{l.text}</div>;
            }
            return <div key={i} className="whitespace-pre-wrap text-fg/90">{l.text}</div>;
          })}

          <div className="mt-1 flex items-center">
            <span className="text-accent-blue">hessah@os</span>
            <span className="text-fg-dim">:~$&nbsp;</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKey}
              autoFocus
              spellCheck={false}
              suppressHydrationWarning
              aria-label="Terminal input"
              className="flex-1 bg-transparent text-fg outline-none caret-accent-lav"
            />
          </div>
        </div>
      </div>

      {/* Hint chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["help", "about", "projects", "open dhallaty", "awards", "contact"].map((c) => (
          <button
            key={c}
            onClick={() => { inputRef.current?.focus(); submit(c); }}
            className="rounded-full border border-line/30 bg-bg-elev/30 px-3 py-1 font-mono text-[11px] text-fg-muted transition hover:border-accent-lav/50 hover:text-accent-lav"
          >
            $ {c}
          </button>
        ))}
      </div>
    </section>
  );
}
