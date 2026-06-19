# Hessah AlMujally — Portfolio (v2)

Personal portfolio site for Hessah AlMujally — AI Engineer & Researcher.

## What's new in v2

- **Bilingual** — full English + formal Arabic (Modern Standard) with RTL support.
- **Dark + Light mode** — toggle in the top bar, persists in localStorage.
- **Refined palette** — lavender-forward, smoother gradients, theme-aware tokens.
- **Pixel/gaming accents** — pixel-art `H` logo, Silkscreen pixel font for tiny labels,
  CRT-style scanlines on the terminal.
- **More interactive** — 3D-tilt project cards, idle-float graph nodes, magnetic buttons,
  fixed left-rail (dot-only with hover labels — no content overlap).
- **Broader narrative** — opens with the full AI-engineering identity (generative, agentic,
  multimodal, healthcare, products) rather than a single project niche.
- **Hydration noise silenced** — `suppressHydrationWarning` on `<html>`/`<body>` to ignore
  browser-extension attribute injection.
- **Patched Next.js** — bumped to 15.5.7 (security advisory CVE-2025-66478 fixed).

## Stack

- **Framework:** Next.js 15 (App Router) · TypeScript · React 18
- **Styling:** Tailwind CSS · CSS variables for theme tokens
- **Motion:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** Space Grotesk · Inter · JetBrains Mono · Tajawal · Silkscreen

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/             # Next.js routes + global styles + root layout
  components/      # Section components + Providers + Toggles + PixelLogo
  lib/
    data.ts        # All bilingual content (identity, timeline, projects, etc.)
    i18n.ts        # Locale types, UI strings, t() helper
```

## Customizing content

All content lives in `src/lib/data.ts` as `{ en, ar }` objects.
To add a project, append to the `projects` array. To change the manifest, edit `identity.manifest`.

## Deploy

Drop the repository on Vercel — no configuration needed.
