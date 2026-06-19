import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          elev: "rgb(var(--bg-elev) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
          dim: "rgb(var(--fg-dim) / <alpha-value>)",
        },
        accent: {
          lav: "rgb(var(--accent-lav) / <alpha-value>)",
          violet: "rgb(var(--accent-violet) / <alpha-value>)",
          indigo: "rgb(var(--accent-indigo) / <alpha-value>)",
          blue: "rgb(var(--accent-blue) / <alpha-value>)",
          rose: "rgb(var(--accent-rose) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        ar: ["var(--font-ar)", "system-ui", "sans-serif"],
        pixel: ["var(--font-pixel)", "ui-monospace", "monospace"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.7s ease-out",
        "scan": "scan 4s linear infinite",
        "drift": "drift 18s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        drift: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(2%, -2%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
