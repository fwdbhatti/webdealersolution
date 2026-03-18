# Handover — Web Dealer Solution

## v3 — Light Premium Redesign (2026-03-18)

### Design System
- **Light mode** warm cream aesthetic inspired by Porsche.com / Lexus.com / Stripe
- Palette: Warm Cream `#F8F7F4` bg, Warm Linen `#F2EFE9` secondary, Champagne Gold `#D4A843` primary (kept), Dark Navy `#1A1A2E` text, Slate Grey `#5A6478` muted, Warm Border `#E8E2D9`
- ONE dark section: Final CTA (`#1E2235` warm charcoal gradient) + dark Footer
- Playfair Display (serif) headings, Inter body, JetBrains Mono accents
- CSS variables in `globals.css` using HSL format for Tailwind integration
- `next-themes` removed — single-theme site, no theme provider needed

### Pages (4 routes)
- **`/`** — Home: Hero → Impact Banner → Trust Tax → Pain Points → 4 Pillars → Process Preview → Testimonials → Final CTA
- **`/onboarding`** — Detailed onboarding process (onboarding-detail.tsx)
- **`/legacy`** — Company story / about us (legacy-story.tsx)
- **`/book`** — Booking page with calendar embed placeholder (book-client.tsx)

### Homepage Sections (8 sections)
1. **Hero** — Word-swap animation cycling 3 phrases, image parallax on mousemove, gold CTA + ghost secondary CTA, micro trust bar
2. **Impact Banner** — 4 animated count-up stats with gold progress bars that fill on scroll
3. **Trust Tax** — Side-by-side comparison cards (AI Bot vs WebDealer) with slide-in animations
4. **Pain Points** — 5 cards with gold left-border, enhanced stagger reveal, resolution text slide-in
5. **4 Pillars** — 2x2 grid with 3D tilt on hover (`perspective(1000px)`), shimmer border effect, icon badges
6. **Process Preview** — 4-step vertical timeline with scroll-driven animated gold line (Framer Motion `useScroll`/`useTransform`), pulsing step circles
7. **Testimonials** — Infinite horizontal marquee (CSS `scroll-left` animation), pause on hover, edge fade mask. Brand logo ticker below with same technique
8. **Final CTA** — Dark section with animated gradient (`gradient-shift` 8s cycle navy→gold→navy)

### Animations & Interactions (10 total)
1. Hero word-swap (useState + setInterval, 3s cycle)
2. Hero image parallax (onMouseMove, dampened ÷20)
3. Stats progress bars (CSS width transition 2000ms on inView)
4. Pillar 3D tilt (onMouseMove → rotateX/rotateY ±5deg)
5. Pillar shimmer border (CSS `shimmer-border` keyframe on hover)
6. Pain point enhanced stagger (y:30, resolution x:-10→0)
7. Scroll-driven timeline line (Framer Motion useScroll + useTransform)
8. Testimonial infinite marquee (CSS `scroll-left` 30s linear infinite)
9. Brand logo ticker (CSS `scroll-left` 20s linear infinite)
10. Scroll progress bar (fixed gold bar at top, `scroll-progress.tsx`)

### Architecture
- `(marketing)` route group: Header + ScrollProgress + Footer wrapper
- Data-driven: all copy in `src/lib/constants.ts`, types in `src/lib/types.ts`, nav in `src/data/navigation.ts`
- Shared components: SectionWrapper (py-12 md:py-16), ScrollProgress, CountUpNumber
- Custom hook: `useCountUp` for animated number counting with requestAnimationFrame
- Header: gold diamond mark (◆), frosted glass on scroll (`backdrop-blur-xl`, `bg-white/90`), "Book a Free Audit" CTA
- Footer: 5-column grid (brand, nav, industries, contact), LinkedIn icon, Privacy/Terms links

### CSS Keyframes (globals.css)
- `fade-in-up` — entrance animation with 3 delay variants
- `shimmer-border` — gold gradient sweep on pillar cards
- `pulse-gold` — scale + glow pulse for timeline circles
- `gradient-shift` — background-position cycle for Final CTA
- `scroll-left` — infinite horizontal scroll for marquee/ticker
- `word-swap-in` / `word-swap-out` — vertical word transition

### AI-Generated Images
- `public/images/hero-showroom.png` (1.6MB) — Luxury car showroom with warm amber lighting
- Legacy images still present: `hero-bg.png`, `social-proof.png`, `process-visual.png`, `about-hero.png`, `hero-agent.png` — unused, can be cleaned up

### Deployment
- Vercel: https://webdealersolution.vercel.app
- GitHub: https://github.com/fwdbhatti/webdealersolution
- Branch: `main`
- `NODE_TLS_REJECT_UNAUTHORIZED=0` required for local Vercel CLI deploys (corporate network)

### Known TODOs
- Book page: Calendar URL is placeholder — needs actual scheduling link
- Hero image (1.6MB PNG) — could be optimized to WebP
- No favicon or OG images set yet
- Client logos are text-only — replace with actual logo images when available
- Legacy images in `public/images/` can be deleted (hero-bg, social-proof, process-visual, about-hero, hero-agent)
- `prefers-reduced-motion` not yet respected — marquee/animations should fall back to static for accessibility
- Vercel Analytics component present but may need enabling in Vercel dashboard

### Version History
| Version | Date | Description |
|---------|------|-------------|
| v1 | 2026-03-18 | Dark luxury theme (Obsidian + Gold) |
| v2 | 2026-03-18 | White & Gold concierge aesthetic |
| v2.0 | 2026-03-18 | Deep navy + gold with new sections (Pain Points, Final CTA, testimonials) |
| v3 | 2026-03-18 | Light premium warm cream + 10 animation upgrades |
