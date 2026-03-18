# Web Dealer Solution

Website for Web Dealer Solution.

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS 3, shadcn/ui, Framer Motion
- **Icons:** Lucide React
- **Theming:** next-themes
- **Analytics:** Vercel Analytics + Speed Insights
- **Hosting:** Vercel

## Project Structure
```
src/
├── app/            # App Router pages and layouts
├── components/
│   ├── layout/     # Header, footer, mobile nav
│   ├── sections/   # Page sections (hero, services, etc.)
│   ├── shared/     # Reusable components
│   └── ui/         # shadcn/ui primitives
├── data/           # Static data files
├── hooks/          # Custom React hooks
└── lib/            # Utilities, types, constants
```

## Commands
```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint
```

## Conventions
- Use `"use client"` directive only where needed (interactive components)
- shadcn/ui components live in `src/components/ui/`
- Section components go in `src/components/sections/`
- Shared/reusable components go in `src/components/shared/`
- Data files go in `src/data/`
- Business logic goes in `src/lib/`
- Fonts loaded via `src/lib/fonts.ts` using `next/font`
