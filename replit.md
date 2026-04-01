# Queen City Precious Metals — Project Notes

## Project Overview

A premium marketing website for Queen City Precious Metals, a gold, coins, bullion, and luxury watch buying company based in Charlotte, NC.

## Tech Stack

- **Framework**: React + Vite + TypeScript
- **Styling**: Tailwind CSS v4 (dark navy/gold theme)
- **Animation**: Framer Motion
- **Routing**: Wouter
- **UI Components**: Radix UI (via shadcn/ui)
- **Icons**: Lucide React

## Brand Identity (Design A — Royal Heritage)

- Navy background: `#0D1B3E`
- Gold accent: `#C9A44A`
- Card navy: `#162257`
- Dark sections: `#081128`
- Headings: Playfair Display (serif)
- Body: Lato

## Project Structure

```
artifacts/qcpm-website/
  src/
    pages/          — home, what-we-buy, events, about, faq, contact
    components/
      layout/       — Header, Footer, MainLayout
      sections/     — HeroSection, CtaSection, SectionWrapper, EventCard, CategoryCard, FaqAccordion
      ui/           — Radix UI components (shadcn)
    data/           — events.ts, categories.ts, faqs.ts, navigation.ts
    types/          — TypeScript types
    index.css       — Theme + brand colors
  CONTENT_BRIEF.md  — Full copy spec
```

## Design Samples (Canvas)

Four design samples were built in the mockup sandbox:
- **Design A** — Royal Heritage (Navy + Gold, Playfair Display) ← SELECTED
- **Design B** — Modern Queen City (Charcoal + Gold, Oswald)
- **Design C** — Carolina Gold (Warm Cream + Forest Green + Copper, Merriweather)
- **Design D** — Midnight Prestige (Pure Black + Gold/Platinum, Montserrat 900)

## Content

**What we buy:** Gold jewelry, silver jewelry/scrap, coins & collections, bullion & bars, luxury watches (Rolex, Cartier, Breitling), designer watches, estate jewelry, select Apple Watches.

**Does NOT buy:** Antiques, playing cards.

**Priority brands:** Rolex, Cartier, Breitling, Apple Watch.

## Data Files

- `src/data/events.ts` — 3 placeholder events (Charlotte, Concord, Gastonia)
- `src/data/categories.ts` — 8 buying categories + featuredBrands
- `src/data/faqs.ts` — Grouped FAQ data (5 groups)
- `src/data/navigation.ts` — Nav links + business info

## User Preferences

- No emojis in UI
- Premium, not pawn-shop — refined, trustworthy, conversion-focused
- Framer Motion for subtle animations only — no bounce, no aggressive parallax
- All elements individually named/isolatable for future design file export
