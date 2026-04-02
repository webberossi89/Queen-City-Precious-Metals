import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "gold-jewelry",
    name: "Gold Jewelry",
    description:
      "Chains, necklaces, bracelets, rings, earrings, charms, broken gold, and estate pieces.",
    items: [
      "Gold chains",
      "Gold necklaces",
      "Bracelets & bangles",
      "Rings",
      "Earrings",
      "Charms & pendants",
      "Broken or damaged gold",
      "Estate gold pieces",
    ],
    icon: "ring",
    highlighted: true,
  },
  {
    id: "silver-jewelry",
    name: "Silver Jewelry & Scrap",
    description:
      "Silver pieces, scrap silver, and items with precious metal value.",
    items: [
      "Sterling silver jewelry",
      "Silver flatware",
      "Silver coins",
      "Scrap silver",
      "Silver bars",
      "Silver estate pieces",
    ],
    icon: "gem",
    highlighted: false,
  },
  {
    id: "coins",
    name: "Coins & Coin Collections",
    description:
      "Gold coins, silver coins, U.S. coins, foreign coins, and curated collections.",
    items: [
      "U.S. gold coins",
      "U.S. silver coins",
      "American Eagles",
      "Morgan dollars",
      "Peace dollars",
      "Foreign gold & silver coins",
      "Coin collections",
      "Proof sets",
    ],
    icon: "circle-dollar-sign",
    highlighted: true,
  },
  {
    id: "bullion",
    name: "Gold & Silver Bars / Bullion",
    description:
      "Gold bars, silver bars, rounds, and investment-grade bullion.",
    items: [
      "Gold bars (all sizes)",
      "Silver bars (all sizes)",
      "Gold rounds",
      "Silver rounds",
      "PAMP Suisse bars",
      "Credit Suisse bars",
      "Investment-grade bullion",
    ],
    icon: "layers",
    highlighted: true,
  },
  {
    id: "luxury-watches",
    name: "Luxury Watches",
    description: "Rolex, Cartier, Breitling, and other premium brands.",
    items: [
      "Rolex",
      "Cartier",
      "Breitling",
      "Patek Philippe",
      "Omega",
      "IWC Schaffhausen",
      "TAG Heuer",
      "Audemars Piguet",
    ],
    icon: "watch",
    highlighted: true,
  },
  {
    id: "designer-watches",
    name: "Designer Watches",
    description: "Recognized watches with resale or collector value.",
    items: [
      "Recognized luxury brands",
      "Collector watches",
      "Vintage timepieces",
      "Limited edition watches",
    ],
    icon: "clock",
    highlighted: false,
  },
  {
    id: "estate-jewelry",
    name: "Estate Jewelry",
    description:
      "Vintage and modern jewelry with precious metal value.",
    items: [
      "Antique jewelry",
      "Victorian pieces",
      "Art Deco jewelry",
      "Mid-century modern",
      "Fine diamond jewelry",
      "Signed designer pieces",
    ],
    icon: "sparkles",
    highlighted: false,
  },
];

export const featuredBrands = [
  { name: "Rolex", category: "Luxury Watch" },
  { name: "Cartier", category: "Luxury Watch" },
  { name: "Breitling", category: "Luxury Watch" },
  { name: "Gold Chains", category: "Gold Jewelry" },
  { name: "Bullion & Bars", category: "Precious Metals" },
  { name: "Coins", category: "Coins & Collections" },
  { name: "Estate Jewelry", category: "Fine Jewelry" },
];
