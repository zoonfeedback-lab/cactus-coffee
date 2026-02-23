# Cactus Coffee

A production-grade, mobile-first website for **Cactus Coffee** — a curated space in Mandian, Abbottabad that blends specialty coffee, contemporary art, and lush indoor plants.

Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, café specials, featured art, popular plants, and visit CTA |
| `/coffee` | Full restaurant-style menu — Today's Special, categorized menu (Mains, Cold Drinks, Hot Beverages, Sides & Pastries), and testimonial |
| `/art` | Art gallery — Pinterest-style masonry grid with 36 items, category filter tabs, and curator bio |
| `/plants` | Plant shop — category chip filters, care tips, and office plants section |
| `/visit` | About & location — origin story, three-pillar features, map with directions, hours, contact, and Instagram grid |

---

## Features

- **Restaurant-Style Menu** — Categorized coffee menu with Today's Special (daily rotating item), pricing (Single/Double), and item images
- **Masonry Art Gallery** — Pinterest-style layout with CSS `columns` (2→3→4 cols responsive), filter tabs, and hover overlays
- **Plant Shop** — Category chip filtering, care tip cards, and office plant showcase
- **Scroll Animations** — Content reveals on scroll using Intersection Observer (zero dependencies)
- **Responsive Design** — Mobile-first layout with adaptive navbar and grid systems
- **Design Token System** — Centralized colors, typography, and spacing via CSS custom properties
- **SEO Optimized** — Per-page `<title>` and `<meta description>` on all 5 routes, semantic HTML, heading hierarchy
- **Accessibility** — `aria-label` on interactive elements, `aria-expanded` on mobile menu, semantic landmarks
- **Minimal Client JS** — Only interactive components (`Navbar`, `ScrollToTop`, `FilterTabs`, `CategoryChips`, `TodaysSpecial`, `FullMenu`) are client components
- **Scroll-to-Top Button** — Floating button appears after scrolling
- **Consistent Hero Sections** — All pages share identical hero structure (60vh, gradient overlay, responsive heading scale)

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | App Router, SSR, static prerendering |
| React | 19.2.x | UI rendering |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling via CSS-native config |
| Lucide React | 0.575.x | Icon library |
| Amberly Sans | — | Custom heading font via `next/font/local` |

---

## Project Structure

```
src/
├── app/
│   ├── coffee/
│   │   └── page.tsx              # Coffee menu page
│   ├── art/
│   │   └── page.tsx              # Art gallery page
│   ├── plants/
│   │   └── page.tsx              # Plant shop page
│   ├── visit/
│   │   └── page.tsx              # Visit & location page
│   ├── globals.css               # Tailwind 4 theme tokens + CSS custom properties
│   ├── layout.tsx                # Root layout (font, Navbar, Footer, ScrollToTop)
│   └── page.tsx                  # Homepage
├── components/
│   ├── coffee/
│   │   ├── Hero.tsx              # Coffee page hero
│   │   ├── FeaturedSpecials.tsx   # Today's Special (daily rotating item)
│   │   ├── MenuSection.tsx       # Full categorized menu grid
│   │   └── PhilosophySection.tsx # Testimonial / quote section
│   ├── exhibition/
│   │   ├── Hero.tsx              # Art gallery hero
│   │   ├── FilterTabs.tsx        # Category filter pills + masonry grid (client)
│   │   └── CuratorSection.tsx    # Two-column curator bio + quote card
│   ├── plants/
│   │   ├── Hero.tsx              # Plants page hero
│   │   ├── CategoryChips.tsx     # Filter chips + plant grid (client)
│   │   ├── CareTips.tsx          # Two-column care tips section
│   │   └── OfficePlants.tsx      # Horizontal office plant cards
│   ├── layout/
│   │   ├── Navbar.tsx            # Responsive header with mobile menu
│   │   └── Footer.tsx            # 4-column footer with newsletter signup
│   ├── sections/
│   │   ├── HeroSection.tsx       # Homepage hero
│   │   ├── FeaturedArt.tsx       # 3-column art preview grid
│   │   ├── PopularPlants.tsx     # 3-column plant grid
│   │   ├── CafeSpecials.tsx      # Menu item highlights
│   │   ├── CTASection.tsx        # Visit CTA card with feature pills
│   │   └── Features.tsx          # 3 icon feature cards
│   └── ui/
│       ├── AnimateOnScroll.tsx    # Scroll-triggered animation wrapper
│       ├── ArtCard.tsx           # Art card with slide-up hover overlay
│       ├── Badge.tsx             # Variant badge (green, outline, muted)
│       ├── Button.tsx            # Primary/outline button + link support
│       ├── CoffeeMenuItem.tsx    # Coffee menu item with image + pricing
│       ├── Container.tsx         # Max-width responsive wrapper
│       ├── FeatureCard.tsx       # Icon + text card with hover lift
│       ├── FeaturedCoffeeCard.tsx # Today's Special featured card
│       ├── GalleryCard.tsx       # Masonry gallery card with hover overlay
│       ├── Input.tsx             # Styled input component
│       ├── MenuItem.tsx          # Café menu item component
│       ├── PlantCard.tsx         # Plant card with star rating
│       ├── PlantDetailCard.tsx   # Detailed plant card with badges
│       ├── QuoteCard.tsx         # Gold accent quote card
│       ├── ScrollToTop.tsx       # Floating scroll-to-top button
│       ├── SectionTitle.tsx      # Label + title + subtitle heading
│       └── TipCard.tsx           # Care tip card with icon
└── lib/
    ├── data.ts                   # Homepage content data
    ├── coffee-data.ts            # Coffee menu items, categories, testimonial
    ├── exhibition-data.ts        # Art gallery items, categories, curator
    └── plants-data.ts            # Plants, categories, tips, office plants
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/zoonfeedback-lab/cactus-coffee.git
cd cactus-coffee
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Design System

The project uses a centralized design token system defined in `globals.css`:

- **Primary** — Forest green (`#2D5A3D`)
- **Accent** — Soft sage (`#A8C5A0`)
- **Background** — Warm off-white (`#FAF7F2`)
- **Typography** — Amberly Sans ExtraBold (headings) + system sans-serif (body)
- **Spacing** — Consistent scale via Tailwind's utility classes

All hero sections share a unified template: `60vh` height, gradient overlay (`from-black/80 via-black/50 to-black/30`), responsive heading scale (`4xl → 7xl`), and sweep-fill CTA button.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Roadmap

- [x] Homepage with 6 sections
- [x] Art Exhibition page (`/art`) with masonry gallery
- [x] Plants page (`/plants`) with category filtering
- [x] Coffee Menu page (`/coffee`) with Today's Special
- [x] Visit page (`/visit`) with map and contact info
- [x] Per-page SEO metadata on all routes
- [ ] Replace SVG placeholders with real photography
- [ ] Add individual artwork detail pages (`/art/[slug]`)
- [ ] Add page transitions and route animations
- [ ] Add online ordering / reservation system

---

## License

This project is private and proprietary to **Zoon Feedback Lab**.