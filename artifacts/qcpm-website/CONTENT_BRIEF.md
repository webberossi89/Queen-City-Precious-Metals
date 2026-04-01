# Queen City Precious Metals — Website Content Brief

## Brand Identity

**Company:** Queen City Precious Metals  
**Location:** Charlotte, NC  
**Business:** Buys gold jewelry, silver, coins, bullion, luxury watches, estate jewelry, select Apple Watches  
**Tagline:** Charlotte's Trusted Precious Metals & Luxury Watch Buyer  
**Phone:** (704) 555-0100  
**Email:** info@queencitypreciousmetals.com

**Does NOT buy:** antiques, playing cards

## Design A — Royal Heritage Brand Colors

- Navy (background): #0D1B3E
- Gold (accent/primary): #C9A44A
- Dark navy sections: #081128
- Card navy: #162257
- Gold hover: #D9B860
- White text: #FFFFFF
- Muted text: rgba(255,255,255,0.65)

**Fonts:**
- Headings: Playfair Display (serif), weights 400, 600, 700, 900
- Body: Lato, weights 300, 400, 700

---

## Pages

### 1. HOME PAGE `/`

#### Header (Sticky, all pages)
- Logo: Queen City Precious Metals (crown + Charlotte skyline SVG or text wordmark)
- Nav: Home, What We Buy, Events, About, FAQ, Contact
- Primary CTA: "Upcoming Events"
- Secondary: "Call Now" or phone number
- Mobile hamburger menu
- Backdrop blur on scroll

#### Hero Section

**Layout:** Two-column desktop (left copy, right visual)

**Eyebrow:**
Charlotte's Trusted Precious Metals & Luxury Watch Buyer

**Headline:**
Turn Gold, Coins, Bullion, and Luxury Watches Into Cash

**Subheadline:**
Queen City Precious Metals buys gold jewelry, coins, bars, bullion, Rolex, Cartier, Breitling, and other high-value pieces with straightforward evaluations and upcoming buying events.

**Supporting copy:**
Whether you're selling a single chain, a collection of coins, or a luxury watch, our team makes the process simple, transparent, and professional.

**Buttons:**
- Primary: "View Upcoming Events"
- Secondary: "See What We Buy"

**Trust bullets:**
- Free evaluations
- No pressure to sell
- Luxury watch expertise
- Event-based buying across the region

**Right visual:** Premium hero composition suggesting gold necklaces, gold bars, coins, luxury watches, subtle Charlotte skyline

#### What We Buy Snapshot

Headline: What We Buy
Intro: We focus on precious metals, coins, bullion, jewelry, and premium watches.

Grid cards (use data from src/data/categories.ts):
- Gold Jewelry, Silver Jewelry & Scrap, Coins & Coin Collections, Gold & Silver Bars / Bullion, Luxury Watches, Designer Watches, Estate Jewelry, Select Smart Watches

Qualification note below grid:
"We do not buy playing cards or general antiques."

#### Featured Brands & Items

Headline: Looking to Sell a Rolex, Cartier, Breitling, or Gold Jewelry?

Body: Some of the most common items we buy include luxury watches, gold chains, bullion, collectible coins, and estate jewelry. If it has precious metal value or recognized luxury brand value, it may qualify.

Brand badges: Rolex, Cartier, Breitling, Apple Watch, Gold Chains & Necklaces, Gold & Silver Coins, Bars & Bullion, Estate Jewelry

CTA: "Ask About Your Item"

#### How It Works

Headline: How It Works
Subheadline: Simple, clear, and designed to make selling easy.

Steps:
1. Find an Event — Browse our upcoming events and choose the location that works best for you.
2. Bring Your Items In — Bring your gold, coins, bullion, jewelry, or luxury watch for an in-person evaluation.
3. Review Your Offer — Our team evaluates your items and presents a straightforward offer with no pressure.

Support line: No confusion. No unnecessary delays. Just a professional process from start to finish.

#### Upcoming Events

Headline: Upcoming Events
Intro: Meet the Queen City Precious Metals team at one of our upcoming buying events. Bring your items in person for a professional evaluation.

Render events from src/data/events.ts — first event featured, rest in grid.

CTA: "View All Events"

#### Why Choose Queen City Precious Metals

Headline: Why Sellers Choose Queen City Precious Metals

4 icon cards:
1. Focused Expertise — We specialize in precious metals, coins, bullion, and premium watches.
2. Luxury Watch Recognition — We understand recognized brands like Rolex, Cartier, and Breitling.
3. Professional Evaluations — Clear communication, straightforward offers, and a no-pressure experience.
4. Event Convenience — Attend an upcoming event and meet with our team in person.

#### Trust / Proof Section

Headline: A More Professional Selling Experience

Body: When people sell gold, jewelry, coins, or luxury watches, they want clarity and confidence. Queen City Precious Metals is built around a straightforward process, category expertise, and local event access that makes it easier to sell valuable items.

4 proof cards:
- Trusted regional buying events
- Luxury watch & bullion focus
- Transparent evaluations
- No-pressure consultations

#### FAQ (accordion, homepage)

Use questions from src/data/faqs.ts (first 4-5 most common).

#### Final CTA Section

Headline: Have Something to Sell?
Body: Check our upcoming events or reach out to ask about your item before you visit.
Buttons: "See Upcoming Events", "Contact Us"

#### Footer (all pages)
- Logo/wordmark
- Short business description
- Nav links
- Contact info
- Events link
- Copyright

---

### 2. WHAT WE BUY `/what-we-buy`

Hero:
Headline: What We Buy
Subheadline: Queen City Precious Metals buys precious metals, bullion, coins, estate jewelry, and premium watches.

Detailed category sections (from src/data/categories.ts — one per category):
- Title, short explanation, sample items list, CTA: "Ask About This Category"

Brand/item highlight strip: Rolex, Cartier, Breitling, Apple Watch, Gold Chains, Bullion, Coins

End with CTA section.

---

### 3. EVENTS `/events`

Hero:
Headline: Upcoming Buying Events
Subheadline: Find an upcoming Queen City Precious Metals event near you and bring your items for an in-person evaluation.

Event grid from src/data/events.ts (optional filter by city or month if simple).
Rich event cards with all metadata.

Final CTA: "Have questions before you attend? Contact us."

---

### 4. ABOUT `/about`

Hero headline: A Straightforward, Professional Way to Sell High-Value Items

Sections:
1. Company overview
2. What makes them different (expertise, transparency, events)
3. Focus areas: precious metals, coins, bullion, luxury watches
4. Event-based service model
5. CTA section

Premium placeholder copy consistent with a trusted local buyer brand.

---

### 5. FAQ `/faq`

Grouped accordion FAQ from src/data/faqs.ts groups:
- What We Buy
- How Events Work
- Evaluations and Offers
- Watches and Jewelry
- Contact and Appointments

---

### 6. CONTACT `/contact`

Hero headline: Questions About an Item or Upcoming Event?
Supporting text: Reach out to Queen City Precious Metals to ask about what we buy, upcoming event details, or whether your item qualifies.

Contact form fields: Name, Email, Phone, Item Type, Message

Contact info placeholders + event inquiry block.

---

## SEO Metadata

Homepage:
Title: Queen City Precious Metals | We Buy Gold, Coins, Bullion & Luxury Watches
Description: Sell gold jewelry, coins, bullion, Rolex, Cartier, Breitling, and other luxury watches to Queen City Precious Metals. View upcoming events and get expert evaluations.

---

## Technical Notes

- Router: wouter (already configured in App.tsx with lazy page imports)
- Animation: framer-motion (already installed)
- Data files: src/data/ (events.ts, categories.ts, faqs.ts, navigation.ts)
- Types: src/types/index.ts
- Components: src/components/layout/, src/components/sections/, src/components/ui/
- Pages: src/pages/home.tsx, what-we-buy.tsx, events.tsx, about.tsx, faq.tsx, contact.tsx
- Use Link from wouter for internal navigation
- Use <head> metadata via document.title or react-helmet equivalent
