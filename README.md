# Cactus Coffee

A production-grade, mobile-first homepage for **Cactus Coffee** — a curated space blending contemporary art, lush botanicals, and handcrafted specialty coffee.

Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

---

## Features

- **8-Section Homepage** — Hero, Featured Art, Features, Popular Plants, Café Specials, CTA, Navbar, Footer
- **Art Exhibition Page** — Dark forest-themed gallery with filterable categories, curator section, and quote card
- **Scroll Animations** — Content reveals on scroll using Intersection Observer (zero dependencies)
- **Responsive Design** — Mobile-first layout with adaptive navbar and grid systems
- **Design Token System** — Centralized colors, typography, spacing, and dark exhibition theme tokens
- **Reusable Components** — 9 UI primitives, 2 layout components, 6 homepage sections, 3 exhibition sections
- **Gallery Filtering** — Client-side category filter tabs (All Works, Painting, Digital Art, Abstract, Sculpture, Botanical)
- **Scroll-to-Top Button** — Floating button appears after scrolling down
- **Art Card Hover Effect** — Dark overlay slides up from bottom showing art details
- **Sticky Navbar** — Glass-blur background with scroll detection and mobile hamburger menu
- **SEO Ready** — Per-page metadata, semantic HTML, heading hierarchy
- **Minimal Client JS** — Only Navbar, ScrollToTop, and FilterTabs are client components

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | App Router, SSR, static prerendering |
| React | 19.2.x | UI rendering |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling via CSS-native config |
| Lucide React | latest | Icon library |
| Inter + Playfair Display | — | Google Fonts via `next/font` |

---

## Project Structure

```
src/
├── app/
│   ├── art/
│   │   └── page.tsx           # Art Exhibition page
│   ├── globals.css            # Tailwind 4 theme tokens + CSS custom properties
│   ├── icon.svg               # Cactus favicon
│   ├── layout.tsx             # Root layout (fonts, Navbar, Footer, ScrollToTop)
│   └── page.tsx               # Homepage (composes 6 sections)
├── components/
│   ├── exhibition/
│   │   ├── Hero.tsx           # Full-viewport dark forest hero
│   │   ├── FilterTabs.tsx     # Category filter pills + gallery grid (client)
│   │   └── CuratorSection.tsx # Two-column curator bio + quote card
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky header + mobile menu
│   │   └── Footer.tsx         # 4-column footer
│   ├── sections/
│   │   ├── HeroSection.tsx    # Full-viewport hero with gradient
│   │   ├── FeaturedArt.tsx    # 3-column art grid
│   │   ├── Features.tsx       # 3 icon feature cards
│   │   ├── PopularPlants.tsx  # 3-column plant grid
│   │   ├── CafeSpecials.tsx   # Menu items on dark background
│   │   └── CTASection.tsx     # CTA card with feature pills
│   └── ui/
│       ├── AnimateOnScroll.tsx # Scroll-triggered animation wrapper
│       ├── ArtCard.tsx        # Art card with slide-up hover overlay
│       ├── Button.tsx         # Primary/outline button + link support
│       ├── Container.tsx      # Max-width responsive wrapper
│       ├── FeatureCard.tsx    # Icon + text card with hover lift
│       ├── GalleryCard.tsx    # Dark gallery card with hover overlay
│       ├── MenuItem.tsx       # Café menu item component
│       ├── PlantCard.tsx      # Plant card with star rating
│       ├── QuoteCard.tsx      # Gold accent quote card
│       ├── ScrollToTop.tsx    # Floating scroll-to-top button
│       └── SectionTitle.tsx   # Label + title + subtitle heading
├── constants/
│   ├── colors.ts              # Earthy color palette tokens
│   ├── theme.ts               # Dark exhibition theme tokens
│   ├── typography.ts          # Font size and weight tokens
│   └── spacing.ts             # Spacing scale tokens
└── lib/
    ├── data.ts                # Homepage content data arrays
    └── exhibition-data.ts     # Exhibition gallery + curator data
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

The project uses a centralized design token system:

- **Homepage Colors** — Earthy palette: deep forest green (`#2D5A3D`), soft sage (`#8FBC8F`), warm beige (`#FAF7F2`)
- **Exhibition Colors** — Dark forest: background (`#0a0f0d`), surface (`#1a2620`), gold accent (`#d4a843`)
- **Typography** — Inter (body) + Playfair Display (headings)
- **Spacing** — Consistent scale from `4px` to `128px`

Homepage tokens are mapped via CSS custom properties in `globals.css`. Exhibition tokens are in `constants/theme.ts`.

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

- [ ] Replace SVG placeholders with real photography
- [x] Add Art Exhibition page (`/art`)
- [ ] Add Plant Shop page (`/plants`)
- [ ] Add Café Menu page (`/cafe`)
- [ ] Add About Us page (`/about`)
- [ ] Add individual artwork pages (`/art/[slug]`)
- [ ] Add page transitions and route animations

---

## License

This project is private and proprietary to **Zoon Feedback Lab**.