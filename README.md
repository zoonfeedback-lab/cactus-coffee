# Cactus Coffee

A production-grade, mobile-first website for **Cactus Coffee** — a curated space in Mandian, Abbottabad that blends specialty coffee, contemporary art, and lush indoor plants.

Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, cafe specials, featured art, popular plants, past events, past workshops, latest blogs, reviews, and visit CTA |
| `/coffee` | Full restaurant-style menu — Today's Special, categorized menu (Mains, Cold Drinks, Hot Beverages, Sides & Pastries), rewards, new arrivals, and shop beans CTA |
| `/art` | Nigarkhana Art Gallery — magazine-style editorial layout with 36 clickable artworks, category filter tabs, featured artwork, curator bio, and PKR pricing |
| `/art/exhibitions` | Artist Exhibitions — filterable exhibition cards (Upcoming, Ongoing, Past) with individual detail pages featuring clickable artwork galleries |
| `/art/exhibitions/[id]` | Exhibition Detail — artist bio, artwork gallery with clickable pieces linking to artwork detail pages |
| `/art/artwork/[id]` | Artwork Detail — product-style page with large image, status badge (Available/Sold/On Exhibition), price, medium, dimensions, source info, "Inquire to Buy" button, and related artworks |
| `/art/classes` | Art Classes — instructor bio (Sir Khalid Khayam), curriculum modules, class grid with PKR pricing, and student gallery |
| `/art/commissions` | Commissioned Art — 12-section page: intro, art types grid, how-it-works process, portfolio gallery, pricing packages, artist bio, customization options, testimonials, commission request form, FAQ accordion, and CTA |
| `/art/studio` | Art Studio — Sir Khalid Khayam's studio: intro & bio, live painting section, signature works gallery, studio experience offerings, and commission CTA |
| `/art/customer-art` | Community Art — customer artwork gallery, behind-the-moments photo grid, participant testimonials, and submit-your-artwork CTA |
| `/plants` | Plant shop — category chip filters, care tips, and CTA |
| `/plants/[id]` | Plant Detail — individual plant product page |
| `/plants/gallery` | Plant Gallery — masonry grid of all plants |
| `/plants/office` | Office Plants — workspace-specific plants with benefits grid |
| `/plants/care` | Plant Care — care guides and tips |
| `/plants/consultation` | Plant Consultation — booking consultation services |
| `/plants/workshops` | Plant Workshops — plant care workshop listings |
| `/shop` | Bean shop — hero, product grid, and process section |
| `/shop/gear` | Coffee Gear — equipment and accessories shop |
| `/shop/gear/[slug]` | Gear Detail — individual coffee gear product page |
| `/blog` | Blog — featured article, blog grid with category filters, popular posts, newsletter signup, pagination, and CTA |
| `/blog/[slug]` | Blog Post — individual article with author spotlight and tags |
| `/workshops` | Creative workshops — intro highlights, filterable card grid with category pills, instructor spotlight, benefits, past workshop gallery, testimonials, FAQ accordion, and CTA |
| `/events` | Community events — featured event hero card, filterable event grid with status tags (Upcoming/Ongoing/Sold Out), vertical timeline, past event gallery, animated stats, attendee testimonials, host-an-event CTA, FAQ accordion |
| `/visit` | About & location — origin story, three-pillar features, map with directions, hours, contact, and Instagram grid |

---

## Features

### 🎨 Art & Gallery
- **Magazine-Style Art Gallery** — Editorial layout with CSS `columns` (responsive), filter tabs, hover overlays, and PKR price tags. Every artwork is clickable and links to a detail page
- **Artwork Detail Pages** — Product-style pages for every piece: large image, status badges (Available / Sold / On Exhibition), price, medium, dimensions, year, source info, "Inquire to Buy" mailto button, sold items get greyscale + ribbon overlay, and "You May Also Like" related artworks
- **Artist Exhibitions** — Filterable exhibition cards with individual detail pages. Artwork cards within exhibitions are clickable, linking to the artwork detail page
- **Art Classes** — Instructor profile, structured curriculum modules, class cards with level badges, schedule, and PKR pricing, student photo gallery
- **Commissioned Art** — Full 12-section page with art types, how-it-works process, portfolio, pricing packages, customization options, commission request form, FAQ, and CTA
- **Art Studio** — Dedicated page for Sir Khalid Khayam with live painting showcase, signature works gallery, studio experience, and commission CTA
- **Community Art** — Showcase of customer-created artwork with behind-the-moments photos, testimonials, and artwork submission CTA
- **Art Sub-Navigation** — Tabbed navigation across Gallery, Exhibitions, Classes, Commissioned, Studio, and Community Art pages

### ☕ Coffee & Shop
- **Restaurant-Style Menu** — Categorized coffee menu with Today's Special (daily rotating item), pricing (Single/Double), and item images
- **Rewards Program** — Cactus Rewards section with loyalty benefits
- **Bean Shop** — Product grid for specialty coffee beans
- **Coffee Gear** — Equipment shop with individual product detail pages

### 🌿 Plants
- **Plant Shop** — Category chip filtering, care tip cards, and plant detail pages
- **Plant Sub-Pages** — Gallery, office plants, care guides, consultation booking, and plant workshops
- **Plant Sub-Navigation** — Tabbed navigation across plant section pages

### 📝 Blog
- **Blog Listing** — Featured article hero, filterable blog grid, popular posts sidebar, categories, tags, newsletter signup, and pagination
- **Blog Posts** — Individual article pages with author spotlight and tag navigation

### 🎉 Events & Workshops
- **Community Events** — Featured event hero card with Book Now, status-tagged event cards, vertical timeline, animated count-up stats, host-an-event CTA, FAQ accordion
- **Creative Workshops** — Category-filterable workshop grid, instructor spotlight, benefits grid, past workshop gallery, testimonials, FAQ accordion

### 🛠 Technical
- **Scroll Animations** — Content reveals on scroll using Intersection Observer (zero dependencies)
- **Responsive Design** — Mobile-first layout with adaptive navbar and grid systems
- **Design Token System** — Centralized colors, typography, and spacing via CSS custom properties
- **SEO Optimized** — Per-page `<title>` and `<meta description>` on all routes, semantic HTML, heading hierarchy
- **Static Generation** — Dynamic routes use `generateStaticParams` for pre-rendering at build time
- **Accessibility** — `aria-label` on interactive elements, `aria-expanded` on mobile menu, semantic landmarks
- **Minimal Client JS** — Only interactive components (`'use client'`) are client components
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
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout (font, Navbar, Footer, ScrollToTop)
│   ├── globals.css               # Tailwind 4 theme tokens + CSS custom properties
│   ├── coffee/
│   │   └── page.tsx              # Coffee menu page
│   ├── art/
│   │   ├── page.tsx              # Art gallery page
│   │   ├── layout.tsx            # Art section layout
│   │   ├── artwork/
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Artwork detail page (product-style)
│   │   ├── exhibitions/
│   │   │   ├── page.tsx          # Exhibitions listing page
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Individual exhibition detail
│   │   ├── classes/
│   │   │   └── page.tsx          # Art classes page
│   │   ├── commissions/
│   │   │   └── page.tsx          # Commissioned art page (12 sections)
│   │   ├── studio/
│   │   │   └── page.tsx          # Art Studio — Sir Khalid Khayam
│   │   └── customer-art/
│   │       └── page.tsx          # Community Art page
│   ├── plants/
│   │   ├── page.tsx              # Plant shop page
│   │   ├── layout.tsx            # Plant section layout
│   │   ├── [id]/
│   │   │   └── page.tsx          # Individual plant detail
│   │   ├── gallery/
│   │   │   └── page.tsx          # Plant gallery
│   │   ├── office/
│   │   │   └── page.tsx          # Office plants page
│   │   ├── care/
│   │   │   └── page.tsx          # Plant care guides
│   │   ├── consultation/
│   │   │   └── page.tsx          # Plant consultation
│   │   └── workshops/
│   │       └── page.tsx          # Plant workshops
│   ├── shop/
│   │   ├── page.tsx              # Bean shop page
│   │   └── gear/
│   │       ├── page.tsx          # Coffee gear shop
│   │       └── [slug]/
│   │           └── page.tsx      # Individual gear product
│   ├── blog/
│   │   ├── page.tsx              # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post
│   ├── events/
│   │   └── page.tsx              # Events page (11 sections)
│   ├── workshops/
│   │   └── page.tsx              # Workshops page (9 sections)
│   └── visit/
│       └── page.tsx              # Visit & location page
├── components/
│   ├── blog/                     # Blog components (10 files)
│   │   ├── FeaturedArticle.tsx, BlogGrid.tsx, BlogCategories.tsx
│   │   ├── PopularPosts.tsx, BlogNewsletter.tsx, BlogPagination.tsx
│   │   ├── BlogHeader.tsx, BlogTags.tsx, AuthorSpotlight.tsx
│   │   └── BlogCTA.tsx
│   ├── classes/                  # Art classes components (5 files)
│   │   ├── ClassesHero.tsx, ClassesGrid.tsx, CurriculumSection.tsx
│   │   ├── InstructorSection.tsx, StudentGallery.tsx
│   ├── coffee/                   # Coffee page components (7 files)
│   │   ├── Hero.tsx, FeaturedSpecials.tsx, MenuSection.tsx
│   │   ├── PhilosophySection.tsx, CactusRewardsSection.tsx
│   │   ├── NewArrivalsSection.tsx, ShopBeansSection.tsx
│   ├── commissions/              # Commissioned art components (12 files)
│   │   ├── CommissionsHero.tsx, CommissionsIntro.tsx, ArtTypesGrid.tsx
│   │   ├── HowItWorks.tsx, CommissionsPortfolio.tsx, PricingPackages.tsx
│   │   ├── ArtistIntro.tsx, CustomizationOptions.tsx
│   │   ├── CommissionTestimonials.tsx, CommissionForm.tsx
│   │   ├── CommissionFAQ.tsx, CommissionCTA.tsx
│   ├── customer-art/             # Community art components (6 files)
│   │   ├── CustomerArtHero.tsx, CustomerArtIntro.tsx
│   │   ├── CustomerArtGallery.tsx, BehindTheMoments.tsx
│   │   ├── CustomerTestimonials.tsx, SubmitArtworkCTA.tsx
│   ├── events/                   # Events page components (11 files)
│   │   ├── EventsHero.tsx, EventsOverview.tsx, FeaturedEvent.tsx
│   │   ├── UpcomingEventsGrid.tsx, EventTimeline.tsx
│   │   ├── EventGallery.tsx, EventHighlights.tsx
│   │   ├── EventTestimonials.tsx, HostAnEvent.tsx
│   │   ├── EventFAQ.tsx, EventCTA.tsx
│   ├── exhibition/               # Art gallery components (6 files)
│   │   ├── Hero.tsx, EditorialGallery.tsx, FeaturedArtwork.tsx
│   │   ├── ArtExhibitionFeature.tsx, ArtForSaleFeature.tsx
│   │   └── CuratorSection.tsx
│   ├── exhibitions/              # Exhibition listing components (4 files)
│   │   ├── ExhibitionsHero.tsx, ExhibitionsGrid.tsx
│   │   └── ExhibitionCard.tsx
│   ├── studio/                   # Art studio components (6 files)
│   │   ├── StudioHero.tsx, StudioIntro.tsx, LivePainting.tsx
│   │   ├── SignatureWorks.tsx, StudioExperience.tsx
│   │   └── StudioCommissionCTA.tsx
│   ├── plants/                   # Plant components (11 files)
│   │   ├── Hero.tsx, PlantGallery.tsx, CategoryChips.tsx
│   │   ├── CareTips.tsx, OfficePlants.tsx, and more
│   ├── shop/                     # Shop components (9 files)
│   │   ├── ShopHero.tsx, ProductGrid.tsx, ProcessSection.tsx
│   │   └── gear/ (ProductGallery.tsx, etc.)
│   ├── workshops/                # Workshop components (9 files)
│   │   ├── WorkshopHero.tsx, WorkshopIntro.tsx
│   │   ├── UpcomingWorkshops.tsx, InstructorSpotlight.tsx
│   │   ├── WorkshopBenefits.tsx, PastWorkshopGallery.tsx
│   │   ├── WorkshopTestimonials.tsx, WorkshopFAQ.tsx
│   │   └── WorkshopCTA.tsx
│   ├── layout/                   # Global layout components
│   │   ├── Navbar.tsx            # Responsive header with mobile menu
│   │   ├── Footer.tsx            # 4-column footer with newsletter signup
│   │   ├── ArtSubNav.tsx         # Art section tabbed sub-navigation
│   │   └── PlantSubNav.tsx       # Plant section tabbed sub-navigation
│   ├── sections/                 # Homepage section components (10 files)
│   │   ├── HeroSection.tsx, FeaturedArt.tsx, PopularPlants.tsx
│   │   ├── CafeSpecials.tsx, UpcomingEvents.tsx, PastWorkshops.tsx
│   │   ├── LatestBlogs.tsx, ReviewsSection.tsx
│   │   ├── CTASection.tsx, Features.tsx
│   └── ui/                       # Reusable UI components (16 files)
│       ├── AnimateOnScroll.tsx, Container.tsx, Button.tsx, Badge.tsx
│       ├── ArtCard.tsx, GalleryCard.tsx, PlantCard.tsx
│       ├── PlantDetailCard.tsx, CoffeeMenuItem.tsx
│       ├── FeaturedCoffeeCard.tsx, FeatureCard.tsx
│       ├── MenuItem.tsx, QuoteCard.tsx, TipCard.tsx
│       ├── Input.tsx, ScrollToTop.tsx, SectionTitle.tsx
└── lib/                          # Data layers
    ├── data.ts                   # Homepage content data
    ├── coffee-data.ts            # Coffee menu items, categories, testimonial
    ├── exhibition-data.ts        # Art gallery items, categories, curator (36 artworks)
    ├── exhibitions-data.ts       # Exhibition listings and artworks (6 exhibitions)
    ├── art-shop-data.ts          # Unified artwork detail data (gallery + exhibitions)
    ├── art-classes-data.ts       # Art classes, curriculum, student photos
    ├── commissions-data.ts       # Commission types, pricing, portfolio, FAQ
    ├── studio-data.ts            # Studio artist bio, works, offerings
    ├── customer-art-data.ts      # Customer artwork, moments, testimonials
    ├── plants-data.ts            # Plants, categories, tips, office plants
    ├── gear-data.ts              # Coffee gear products
    ├── blog-data.ts              # Blog posts, categories, authors
    ├── workshop-data.ts          # Workshops, instructors, gallery, FAQ
    └── events-data.ts            # Events, timeline, gallery, stats, FAQ
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
- [x] Art Gallery page (`/art`) with editorial magazine layout, clickable artworks, and PKR pricing
- [x] Art Exhibitions page (`/art/exhibitions`) with filterable cards and detail pages with clickable artworks
- [x] Artwork Detail pages (`/art/artwork/[id]`) — product-style with status badges, "Inquire to Buy", and related artworks
- [x] Art Classes page (`/art/classes`) with instructor bio, curriculum, and class grid
- [x] Commissioned Art page (`/art/commissions`) — 12 sections: art types, process, portfolio, pricing, form, FAQ
- [x] Art Studio page (`/art/studio`) — Sir Khalid Khayam's studio, live painting, signature works
- [x] Community Art page (`/art/customer-art`) — customer artwork gallery, moments, testimonials, submit CTA
- [x] Plants page (`/plants`) with category filtering, gallery, office plants, care, consultation, workshops
- [x] Coffee Menu page (`/coffee`) with Today's Special, rewards, new arrivals
- [x] Visit page (`/visit`) with map and contact info
- [x] Shop page (`/shop`) with product grid
- [x] Coffee Gear shop (`/shop/gear`) with individual product pages
- [x] Blog (`/blog`) with featured article, grid, categories, newsletter, individual post pages
- [x] Workshops page (`/workshops`) — category filters, instructor spotlight, benefits, gallery, FAQ
- [x] Events page (`/events`) — featured event, status tags, timeline, animated stats, host-an-event CTA
- [x] Per-page SEO metadata on all routes
- [x] Art sub-navigation (Gallery, Exhibitions, Classes, Commissioned, Studio, Community Art)
- [x] Plant sub-navigation (main, gallery, office, care, consultation, workshops)
- [ ] Replace placeholder images with real photography
- [ ] Add page transitions and route animations
- [ ] Add online ordering / reservation system

---

## Stats

| Metric | Count |
|--------|-------|
| Total Pages | 25+ routes |
| Components | 100+ React components |
| Data Layers | 14 TypeScript files |
| Static Pages | 76 pre-rendered at build time |

---

## License

This project is private and proprietary to **Zoon Feedback Lab**.