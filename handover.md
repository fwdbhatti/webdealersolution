# Handover — Web Dealer Solution

## Full Site Build (2026-03-18)

### Design System
- Dark-mode-only site (no light mode): Deep Obsidian `#0F0F11` background, Electric Silver `#E2E8F0` text, Champagne Gold `#D4AF37` CTAs, Live Green `#2ECC71` status indicators
- Playfair Display (serif) for headings, Inter for body, JetBrains Mono for accents
- CSS-first animations: hero entrance, shimmer CTA, live-ping dot
- ThemeProvider locked to `defaultTheme="dark"`, `enableSystem={false}`

### Pages (5 routes)
- **`/`** — Home: Hero (AI bg image), Trust Gap cards (3x Framer Motion stagger), Comparison Table (shadcn Table), ROI Calculator (shadcn Slider, dynamic import), Social Proof (testimonials + client logos)
- **`/process`** — Sticky scroll timeline with 3 steps, Framer Motion `useScroll`/`useTransform` parallax, mobile fallback
- **`/industries`** — Tabbed interface (Automotive, B2B, Professional Services) with shadcn Tabs
- **`/about`** — Founder's manifesto, drop-cap editorial layout, AI-generated human/robot handshake image
- **`/book`** — Two-column booking page (credentials + calendar embed), dynamic import `ssr: false`

### Architecture
- `(marketing)` route group wraps all pages with shared Header + Footer
- Data-driven: all copy in `src/lib/constants.ts`, types in `src/lib/types.ts`, nav in `src/data/navigation.ts`
- Shared components: SectionWrapper, LivePulse, CountUpNumber
- Custom hook: `useCountUp` for animated number counting with requestAnimationFrame

### AI-Generated Images (Google Imagen / Nano Banana 2)
- `public/images/hero-bg.png` — Dark luxury car dealership interior
- `public/images/social-proof.png` — Professional at desk with luxury watch
- `public/images/process-visual.png` — Dark-mode CRM dashboard mockup
- `public/images/about-hero.png` — Human/robot handshake concept

### Known TODOs
- Book page: Calendar URL is placeholder — needs actual Google Calendar scheduling link from Surkhail
- Images are PNGs (~1-1.5MB each) — could be optimized to WebP for faster loading
- No favicon or OG images set yet
- Client logos (Mercedes-Benz Toronto, Big Blue Printing) are text-only — replace with actual logo images when available
