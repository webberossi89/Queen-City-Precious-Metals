# Queen City Precious Metals

## Brand

Premium, Charlotte-rooted precious metals and luxury watch buyer. See `brand-voice-guide.md` in the parent project directory for full brand voice, tone, messaging pillars, and visual direction.

**Tone:** Confident, clear, respectful, no-pressure, polished not flashy.
**Not:** Pawn shop, flea market, cash-for-gold, cluttered.

## Tech Stack

- **Frontend:** React 19 + Vite 7 + TypeScript (strict)
- **Styling:** Tailwind CSS v4 (Navy #0D1B3E, Gold #C9A44A, Playfair Display + Lato)
- **Routing:** Wouter (client-side SPA)
- **UI:** Radix UI / shadcn pattern
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Package Manager:** pnpm workspace monorepo

## Project Structure

```
artifacts/qcpm-website/src/
  pages/        - Page components (one per route)
  components/
    layout/     - Header, Footer, MainLayout
    sections/   - HeroSection, CategoryCard, EventCard, etc.
    ui/         - shadcn/Radix primitives (do not modify)
  data/         - Content data files (categories, events, FAQs, navigation)
  hooks/        - Custom React hooks
  lib/          - Utility functions
  types/        - TypeScript interfaces
```

## Content Updates

All site content is in TypeScript data files under `src/data/`:
- `navigation.ts` - Nav links, business info (phone, email, address)
- `categories.ts` - What We Buy product categories
- `events.ts` - Upcoming buying events
- `faqs.ts` - FAQ groups and questions

**To update content, edit the data files.** Do not hardcode content in page components.

## Protected Files (Discord Bot Guardrails)

These files must NOT be modified by automated tools or the Discord bot:
- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`
- `vite.config.ts`, `tsconfig*.json`, `amplify.yml`
- `CLAUDE.md`, `.replit`, `scripts/`
- `artifacts/api-server/` (entire backend)
- `lib/` (shared libraries)
- `src/components/ui/` (shadcn primitives)

## Conventions

- Immutable data patterns (no mutation)
- Semantic HTML with accessibility
- Mobile-first responsive design
- No `console.log` in production code
- No hardcoded secrets
