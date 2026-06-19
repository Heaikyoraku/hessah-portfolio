// Bilingual support — English + formal Arabic (Modern Standard).
// All long-form copy lives in data.ts as { en, ar } objects. UI labels live here.

export type Locale = "en" | "ar";
export type L = { en: string; ar: string };

export const isLocalized = (v: unknown): v is L =>
  typeof v === "object" && v !== null && "en" in v && "ar" in v;

export const t = (value: L | string, locale: Locale): string => {
  if (typeof value === "string") return value;
  return value[locale];
};

// UI strings — buttons, section codes, status labels.
export const ui = {
  online: { en: "ONLINE", ar: "متصلة" },
  riyadh: { en: "RIYADH", ar: "الرياض" },
  identity: { en: "Identity", ar: "الهوية" },
  journey: { en: "Journey", ar: "المسيرة" },
  lab: { en: "Projects Lab", ar: "مختبر المشاريع" },
  map: { en: "AI Map", ar: "خارطة الذكاء" },
  vault: { en: "Vault", ar: "الإنجازات" },
  now: { en: "Now", ar: "الآن" },
  terminal: { en: "Terminal", ar: "الطرفية" },
  contact: { en: "Contact", ar: "التواصل" },

  openLab: { en: "Open Projects Lab", ar: "افتح مختبر المشاريع" },
  tryTerminal: { en: "$ try the terminal", ar: "$ جرّب الطرفية" },

  caseFile: { en: "CASE FILE", ar: "ملف المشروع" },
  problem: { en: "Problem", ar: "المشكلة" },
  approach: { en: "Approach", ar: "المنهجية" },
  architecture: { en: "Architecture", ar: "البنية" },
  technologies: { en: "Technologies", ar: "التقنيات" },
  results: { en: "Results", ar: "النتائج" },
  lessons: { en: "Lessons", ar: "الدروس المستفادة" },

  status: {
    Shipped: { en: "Shipped", ar: "مُطلق" },
    "In review": { en: "In review", ar: "قيد المراجعة" },
    Active: { en: "Active", ar: "نشط" },
    Archived: { en: "Archived", ar: "مؤرشف" },
  } as Record<string, L>,

  tag: {
    Research: { en: "RESEARCH", ar: "بحثي" },
    Startup: { en: "STARTUP", ar: "ريادي" },
    Product: { en: "PRODUCT", ar: "منتج" },
    Coursework: { en: "ACADEMIC", ar: "أكاديمي" },
    Hackathon: { en: "HACKATHON", ar: "هاكاثون" },
  } as Record<string, L>,

  type: {
    education: { en: "Education", ar: "تعليم" },
    work: { en: "Work", ar: "عمل" },
    founder: { en: "Founder", ar: "ريادة" },
    research: { en: "Research", ar: "بحث" },
    award: { en: "Award", ar: "جائزة" },
    leadership: { en: "Leadership", ar: "قيادة" },
  } as Record<string, L>,

  inProgress: { en: "IN PROGRESS", ar: "قيد التنفيذ" },
  liveBadge: { en: "// LIVE", ar: "// حيّة" },
  certifications: { en: "CERTIFICATIONS", ar: "الشهادات" },
  legendCore: { en: "Core", ar: "أساسي" },
  legendApplied: { en: "Applied", ar: "تطبيقي" },
  legendMethod: { en: "Method", ar: "منهج" },
  legendProduct: { en: "Product", ar: "منتج" },

  themeLight: { en: "Light", ar: "فاتح" },
  themeDark: { en: "Dark", ar: "داكن" },
  langSwitch: { en: "EN / عربي", ar: "EN / عربي" },

  designedBy: {
    en: "designed & built by hessah",
    ar: "تصميم وبناء حصة",
  },
} satisfies Record<string, L | Record<string, L>>;
