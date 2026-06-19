import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Tajawal, Silkscreen } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const ar = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-ar",
  display: "swap",
});
const pixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hessah AlMujally — AI Engineer",
  description:
    "Personal site of Hessah AlMujally — AI engineer and researcher building generative, agentic, and multimodal systems. Riyadh, Saudi Arabia.",
  keywords: [
    "Hessah AlMujally",
    "AI Engineer",
    "Generative AI",
    "Agentic AI",
    "Data Science",
    "Machine Learning",
    "Computer Vision",
    "Multimodal AI",
    "AI for Healthcare",
    "Saudi Arabia",
    "Vision 2030",
    "Riyadh",
  ],
  authors: [{ name: "Hessah AlMujally" }],
  openGraph: {
    title: "Hessah AlMujally — AI Engineer",
    description:
      "Building generative, agentic, and multimodal systems. AI engineer based in Riyadh.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hessah AlMujally — AI Engineer",
    description:
      "Building generative, agentic, and multimodal systems. AI engineer based in Riyadh.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Some browser extensions (autofill, etc.) inject attributes into the DOM
      // before React hydrates. suppressHydrationWarning silences those harmless mismatches.
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} ${ar.variable} ${pixel.variable} dark`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-bg text-fg antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
