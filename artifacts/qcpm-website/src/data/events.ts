import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "charlotte-buying-event",
    title: "Queen City Buying Event",
    city: "Charlotte",
    state: "NC",
    venue: "Charlotte Marriott City Center",
    address: "100 W Trade St, Charlotte, NC 28202",
    startDate: "2026-04-18",
    endDate: "2026-04-19",
    hours: "Friday–Saturday | 10 AM–5 PM",
    description:
      "Bring your gold jewelry, coins, bullion, and luxury watches to our Charlotte buying event. Our team is ready to evaluate your items and present straightforward cash offers.",
    categories: [
      "Gold Jewelry",
      "Coins & Collections",
      "Bullion & Bars",
      "Luxury Watches",
      "Estate Jewelry",
    ],
    featured: true,
  },
  {
    id: "concord-buying-event",
    title: "Precious Metals Buying Event",
    city: "Concord",
    state: "NC",
    venue: "Concord Mills Conference Center",
    address: "8111 Concord Mills Blvd, Concord, NC 28027",
    startDate: "2026-04-24",
    hours: "Thursday | 11 AM–6 PM",
    description:
      "Rolex, Cartier, Breitling, coins, bars, and estate jewelry welcome. Our evaluators provide professional assessments with no pressure and immediate payment for accepted items.",
    categories: [
      "Luxury Watches",
      "Designer Watches",
      "Coins & Collections",
      "Bullion & Bars",
      "Estate Jewelry",
    ],
    featured: false,
  },
  {
    id: "gastonia-buying-event",
    title: "Regional Buying Event",
    city: "Gastonia",
    state: "NC",
    venue: "Gastonia Conference & Event Center",
    address: "255 W Franklin Blvd, Gastonia, NC 28052",
    startDate: "2026-05-03",
    hours: "Saturday | 9 AM–4 PM",
    description:
      "Walk in with your items and receive an expert evaluation. We buy gold and silver jewelry, coins, bullion, and select luxury watches at our Gastonia regional buying event.",
    categories: [
      "Gold Jewelry",
      "Silver Jewelry & Scrap",
      "Coins & Collections",
      "Bullion & Bars",
      "Luxury Watches",
    ],
    featured: false,
  },
];
