# CLAUDE.md — AI Assistant Guide for andikadayu/my-portfolio

This file provides context for AI assistants working on this codebase.

---

## Project Overview

A personal portfolio website for **Muhammad Andika Dayu Anglita Putra**, a backend developer based in Malang, Indonesia. The site is a static single-page application (SPA) with smooth-scroll section navigation — no routing or external APIs involved.

- **Live URL:** https://andikadayu.my.id
- **Owner email:** dikapolk@gmail.com
- **Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Framer Motion

---

## Repository Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # One folder per section, each has index.tsx
│   │   │   ├── navigation/      # Fixed top navbar with glass morphism
│   │   │   ├── about/           # Hero section with animated gradient text
│   │   │   ├── skills/          # Skill categories with icon grid
│   │   │   ├── experience/      # Timeline of work history
│   │   │   ├── projects/        # Project cards grid
│   │   │   └── contact/         # Contact cards + social links + footer
│   │   ├── fonts/               # Self-hosted Geist WOFF font files
│   │   ├── globals.css          # Global styles, CSS variables, dark mode
│   │   ├── layout.tsx           # Root layout: meta tags, JSON-LD, fonts
│   │   ├── page.tsx             # Assembles all section components in order
│   │   ├── loading.tsx          # Loading state UI
│   │   ├── not-found.tsx        # 404 page
│   │   ├── robots.ts            # robots.txt generation
│   │   └── sitemap.ts           # sitemap.xml generation
│   └── middleware.ts            # Security + cache headers for all routes
├── public/                      # Static assets (SVGs, manifest.json)
├── next.config.ts               # Image optimization, security headers, redirect
├── tailwind.config.ts           # Dark mode class strategy, gradient extensions
├── tsconfig.json                # Strict TS, path alias @/* → ./src/*
├── eslint.config.mjs            # next/core-web-vitals + next/typescript rules
└── postcss.config.mjs           # PostCSS with autoprefixer
```

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.4.8 |
| UI | React | 19.1.0 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | 3.4.17 |
| Animations | Framer Motion | 12.23.9 |
| Fonts | Geist + GeistMono (WOFF) | — |
| Bundler (dev) | Turbopack | built-in |

---

## Development Commands

```bash
npm run dev      # Start dev server with Turbopack (fast HMR)
npm run build    # Production build
npm run start    # Serve the production build locally
npm run lint     # Run ESLint
```

> There is no test suite configured. `npm test` does not exist.

---

## Key Conventions

### Component Pattern
- Every section lives in `src/app/components/<section>/index.tsx`
- All components use `"use client"` — the site is fully client-side rendered
- Each component is a default export and a self-contained React function component
- Data (skills, experience, projects) is **hardcoded** inside the component file as a `const` array — there is no CMS or external data source

### Styling
- **Tailwind CSS only** — no CSS modules, no styled-components
- Dark mode is enforced globally; there is no light mode
  - CSS variable `--foreground: #f8fafc`, `--background: #0f172a`
  - All pages use `dark` class on `<html>` element
- Two shared utility classes in `globals.css`:
  - `.glass-effect` — backdrop blur + semi-transparent white background
  - `.gradient-text` — gradient background clipped to text

### Animations
- **Framer Motion** is used for all animations — no CSS keyframes for interactive content
- Standard patterns used across components:
  - `whileInView` + `viewport={{ once: true }}` for scroll-triggered reveals
  - `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`
  - `staggerChildren` on parent `motion.div` to sequence child entries
  - `whileHover={{ scale: 1.05 }}` or translate for card hover effects
  - `transition={{ type: "spring", stiffness: 300, damping: 30 }}` for physics-based motion

### TypeScript
- Strict mode is enabled
- Path alias: `@/*` resolves to `./src/*`
- All component props and data structures should be typed

### SEO & Metadata
- All meta tags, Open Graph, and JSON-LD structured data live in `src/app/layout.tsx`
- `robots.ts` and `sitemap.ts` generate files dynamically at build time
- Do not hardcode robots/sitemap content in `public/` — use the TypeScript generators

### Security Headers
- Security headers are applied in two places:
  1. `next.config.ts` — static headers via `headers()` config
  2. `src/middleware.ts` — dynamic headers applied at runtime
- Do not remove CSP, X-Frame-Options, or XSS protection headers

---

## Content Data Locations

All portfolio content is static and hardcoded. To update personal information:

| Content | File |
|---|---|
| Name, title, bio, CTAs | `src/app/components/about/index.tsx` |
| Skills and categories | `src/app/components/skills/index.tsx` |
| Work experience timeline | `src/app/components/experience/index.tsx` |
| Projects list | `src/app/components/projects/index.tsx` |
| Contact links, social media | `src/app/components/contact/index.tsx` |
| SEO meta, JSON-LD, Open Graph | `src/app/layout.tsx` |
| PWA config | `public/manifest.json` |

---

## Data Structures

### Skill
```typescript
{ name: string; icon: string }  // icon is an emoji string
```
Grouped by: `{ category: string; color: string; skills: Skill[] }`

### Experience
```typescript
{
  title: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  skills: string[];
  gradient: string;  // Tailwind gradient classes
}
```

### Project
```typescript
{
  title: string;
  description: string;
  tech: string[];
  image: string;  // URL or placeholder path
  link: string;
}
```

---

## Next.js Configuration Notes

- **ESLint is disabled during builds** (`eslint: { ignoreDuringBuilds: true }`) — run `npm run lint` separately
- Image optimization supports `webp` and `avif` formats
- A redirect exists: `/home` → `/` (permanent 301)
- The `X-Powered-By` header is removed for security

---

## What This Project Is NOT

- Not a multi-page app — all sections are on a single scrollable page
- No database, no backend API, no authentication
- No CMS integration — all content is in source code
- No light/dark mode toggle — dark mode only
- No i18n — English only

---

## Commit Message Style

Existing commits use the **Conventional Commits** format with emoji prefixes:

```
✨ feat: <description>
🐛 fix: <description>
🔧 chore: <description>
build(deps): <description>
```

Follow the same convention when committing changes.
