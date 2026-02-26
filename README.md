# Cactus Coffee

A production-grade, mobile-first website for **Cactus Coffee** — a curated space in Mandian, Abbottabad that blends specialty coffee, contemporary art, and lush indoor plants.

Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, cafe specials, featured art, popular plants, past events, past workshops, latest blogs, reviews, and visit CTA |
| `/coffee` | Full restaurant-style menu — Today's Special, categorized menu (Mains, Cold Drinks, Hot Beverages, Sides & Pastries), and testimonial |
| `/art` | Nigarkhana Art Gallery — Pinterest-style masonry grid with 36 items, category filter tabs, curator bio, and PKR pricing |
| `/art/exhibitions` | Artist Exhibitions — filterable exhibition cards (Upcoming, Ongoing, Past), individual exhibition detail pages with artwork galleries and PKR pricing |
| `/art/classes` | Art Classes — instructor bio (Sir Khalid Khayan), curriculum modules, class grid with PKR pricing, and student gallery |
| `/plants` | Plant shop — category chip filters, care tips, and office plants section |
| `/visit` | About & location — origin story, three-pillar features, map with directions, hours, contact, and Instagram grid |
| `/shop` | Bean shop — hero, product grid, and process section |

---

## Features

- **Restaurant-Style Menu** — Categorized coffee menu with Today's Special (daily rotating item), pricing (Single/Double), and item images
- **Masonry Art Gallery** — Pinterest-style layout with CSS `columns` (2→3→4 cols responsive), filter tabs, hover overlays, and PKR price tags
- **Artist Exhibitions** — Filterable exhibition cards with individual detail pages, artwork galleries, and per-artwork PKR pricing
- **Art Classes** — Instructor profile with large photo, structured curriculum modules, class cards with level badges, schedule, and PKR pricing, student photo gallery
- **Plant Shop** — Category chip filtering, care tip cards, and office plant showcase
- **Past Events & Workshops** — Cards showcasing previous events and workshops with dates, locations, and attendee counts
- **Latest Blogs** — 3 blog preview cards with category badges and dates
- **Scroll Animations** — Content reveals on scroll using Intersection Observer (zero dependencies)
- **Responsive Design** — Mobile-first layout with adaptive navbar and grid systems
- **Design Token System** — Centralized colors, typography, and spacing via CSS custom properties
- **SEO Optimized** — Per-page `<title>` and `<meta description>` on all routes, semantic HTML, heading hierarchy
- **Accessibility** — `aria-label` on interactive elements, `aria-expanded` on mobile menu, semantic landmarks
- **Minimal Client JS** — Only interactive components are client components
- **Scroll-to-Top Button** — Floating button appears after scrolling
- **Consistent Hero Sections** — All pages share identical hero structure (60vh, gradient overlay, responsive heading scale)
- **Art Sub-Navigation** — Tabbed navigation across Gallery, Exhibitions, and Classes pages

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
│   │   ├── page.tsx              # Art gallery page
│   │   ├── layout.tsx            # Art section layout
│   │   ├── exhibitions/
│   │   │   ├── page.tsx          # Exhibitions listing page
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Individual exhibition detail
│   │   └── classes/
│   │       └── page.tsx          # Art classes page
│   ├── plants/
│   │   └── page.tsx              # Plant shop page
│   ├── shop/
│   │   └── page.tsx              # Bean shop page
│   ├── visit/
│   │   └── page.tsx              # Visit & location page
│   ├── globals.css               # Tailwind 4 theme tokens + CSS custom properties
│   ├── layout.tsx                # Root layout (font, Navbar, Footer, ScrollToTop)
│   └── page.tsx                  # Homepage
├── components/
│   ├── classes/
│   │   ├── ClassesHero.tsx       # Art classes hero section
│   │   ├── ClassesGrid.tsx       # Available classes 3-col grid with PKR pricing
│   │   ├── CurriculumSection.tsx # Curriculum modules in 2-col grid
│   │   ├── InstructorSection.tsx # Instructor bio with large portrait photo
│   │   └── StudentGallery.tsx    # Masonry student photo gallery
│   ├── coffee/
│   │   ├── Hero.tsx              # Coffee page hero
│   │   ├── FeaturedSpecials.tsx   # Today's Special (daily rotating item)
│   │   ├── MenuSection.tsx       # Full categorized menu grid
│   │   ├── PhilosophySection.tsx  # Testimonial / quote section
│   │   ├── CactusRewardsSection.tsx # Rewards section
│   │   ├── NewArrivalsSection.tsx # New arrivals showcase
│   │   └── ShopBeansSection.tsx  # Shop beans CTA
│   ├── exhibition/
│   │   ├── Hero.tsx              # Art gallery hero (Nigarkhana Art Gallery)
│   │   ├── EditorialGallery.tsx  # Gallery with ArtworkCard and PKR pricing
│   │   ├── FeaturedArtwork.tsx   # Featured artwork with PKR pricing
│   │   ├── FilterTabs.tsx        # Category filter pills + masonry grid (client)
│   │   └── CuratorSection.tsx    # Two-column curator bio + quote card
│   ├── exhibitions/
│   │   ├── ExhibitionsHero.tsx   # Exhibitions hero section
│   │   ├── ExhibitionsGrid.tsx   # Filterable exhibition cards grid
│   │   └── ExhibitionCard.tsx    # Individual exhibition card with PKR pricing
│   ├── plants/
│   │   ├── Hero.tsx              # Plants page hero
│   │   ├── CategoryChips.tsx     # Filter chips + plant grid (client)
│   │   ├── CareTips.tsx          # Two-column care tips section
│   │   └── OfficePlants.tsx      # Horizontal office plant cards
│   ├── shop/
│   │   ├── ShopHero.tsx          # Shop page hero
│   │   ├── ProductGrid.tsx       # Product listing grid
│   │   └── ProcessSection.tsx    # Coffee process showcase
│   ├── layout/
│   │   ├── Navbar.tsx            # Responsive header with mobile menu
│   │   ├── ArtSubNav.tsx         # Art section tabbed sub-navigation
│   │   └── Footer.tsx            # 4-column footer with newsletter signup
│   ├── sections/
│   │   ├── HeroSection.tsx       # Homepage hero
│   │   ├── FeaturedArt.tsx       # 3-column art preview grid
│   │   ├── PopularPlants.tsx     # 3-column plant grid
│   │   ├── CafeSpecials.tsx      # Menu item highlights
│   │   ├── UpcomingEvents.tsx    # Past events 3-card grid
│   │   ├── PastWorkshops.tsx     # Past workshops 3-card grid
│   │   ├── LatestBlogs.tsx       # Latest blog posts 3-card grid
│   │   ├── ReviewsSection.tsx    # Customer reviews
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
│       ├── MenuItem.tsx          # Cafe menu item component
│       ├── PlantCard.tsx         # Plant card with star rating
│       ├── PlantDetailCard.tsx   # Detailed plant card with badges
│       ├── QuoteCard.tsx         # Gold accent quote card
│       ├── ScrollToTop.tsx       # Floating scroll-to-top button
│       ├── SectionTitle.tsx      # Label + title + subtitle heading
│       └── TipCard.tsx           # Care tip card with icon
└── lib/
    ├── data.ts                   # Homepage content data
    ├── coffee-data.ts            # Coffee menu items, categories, testimonial
    ├── exhibition-data.ts        # Art gallery items, categories, curator (with PKR pricing)
    ├── exhibitions-data.ts       # Exhibition listings and artworks (with PKR pricing)
    ├── art-classes-data.ts       # Art classes, curriculum, student photos (with PKR pricing)
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

- [x] Homepage with 9 sections (hero, specials, art, plants, events, workshops, blogs, reviews, CTA)
- [x] Art Gallery page (`/art`) with masonry gallery and PKR pricing
- [x] Art Exhibitions page (`/art/exhibitions`) with filterable cards and detail pages
- [x] Art Classes page (`/art/classes`) with instructor bio, curriculum, and class grid
- [x] Plants page (`/plants`) with category filtering
- [x] Coffee Menu page (`/coffee`) with Today's Special
- [x] Visit page (`/visit`) with map and contact info
- [x] Shop page (`/shop`) with product grid
- [x] Per-page SEO metadata on all routes
- [ ] Blog listing page (`/blog`)
- [ ] Events listing page (`/events`)
- [ ] Workshops listing page (`/workshops`)
- [ ] Replace placeholder images with real photography
- [ ] Add page transitions and route animations
- [ ] Add online ordering / reservation system

---

## License

This project is private and proprietary to **Zoon Feedback Lab**.