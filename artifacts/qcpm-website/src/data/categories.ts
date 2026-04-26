import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "gold-jewelry",
    name: "Gold Jewelry",
    description:
      "Chains, necklaces, bracelets, rings, earrings, charms, broken gold, and estate pieces.",
    longDescription: [
      "Gold jewelry is the most common item we evaluate, and it ranges from a single broken chain to entire family collections that have built up over generations. Every piece is tested for purity (10K, 14K, 18K, 22K, or 24K), weighed on a calibrated scale, and priced against the live spot market.",
      "Designer and signed pieces (Cartier, Tiffany, David Yurman, Bulgari, and similar) are evaluated separately for any brand premium. A signed gold ring or pendant in good condition can be worth significantly more than its scrap value, and we will tell you when that applies.",
      "Broken, worn, mismatched, or unstamped pieces are welcome. Sorting at home is not necessary, and we do not ask you to clean or polish anything in advance. Cleaning gold does not change its value, and polishing a vintage piece can actually reduce collector value.",
    ],
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
    longDescription: [
      "We buy sterling silver in all forms, from jewelry and flatware to industrial silver and scrap. Sterling is 92.5 percent silver and is usually stamped 925 or sterling. Coin silver (90 percent), continental silver (800), and other purities are also evaluated; we test each piece to confirm what it is.",
      "Silver flatware sets are weighed and priced by silver content. Hollow handles (which contain a small amount of cement filler) are accounted for in the calculation. Complete sets in original boxes can sometimes carry a small premium above scrap value if there is a resale market for the pattern.",
      "Pre-1965 U.S. coins (90 percent silver dimes, quarters, and halves) are evaluated as junk silver. Pre-1965 silver dollars are evaluated as numismatic items because some dates and mint marks carry significant collector value above silver content.",
    ],
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
    longDescription: [
      "Coin collections range from a small accumulation of inherited silver dollars to detailed lifetime collections in albums and slabs. We work through every collection in front of you, identifying bullion content, scanning for key dates and rare varieties, and noting any pieces that warrant separate handling.",
      "Bullion-grade coins (American Eagles, Canadian Maple Leafs, South African Krugerrands, Austrian Philharmonics, Mexican Libertads) are valued at live spot price plus a small premium. Junk silver is valued by weight and silver content.",
      "Key dates, rare varieties, and high-grade pieces are evaluated against the active numismatic market. Examples include the 1893-S Morgan dollar, the 1909-S VDB Lincoln cent, the 1916-D Mercury dime, and many others. PCGS, NGC, and ANACS slabs carry weight in the evaluation; the assigned grade is part of the value.",
      "If you are settling an estate, do not sort or clean the collection in advance. Cleaning a coin can destroy its numismatic value. Bring the collection in whatever state you have it, including original albums, flips, paper rolls, and notes.",
    ],
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
    longDescription: [
      "Bullion is the cleanest category to evaluate because the value math is straightforward. Recognized refiners (PAMP Suisse, Credit Suisse, Royal Canadian Mint, Perth Mint, Engelhard, Johnson Matthey) are valued at live spot price with the smallest spreads in the market.",
      "Smaller fractional bars (1 gram through 10 gram) carry slightly higher per-ounce premiums when sold. Larger bars (1 ounce, 10 ounce, 100 ounce, kilo) sit closer to spot. Generic rounds and bars without a recognized refiner mark are also accepted, evaluated by weight and purity rather than brand.",
      "If your bullion is sealed in original assay cards (PAMP Suisse Lady Fortuna, Credit Suisse veriscan), keep it sealed. The seal preserves the assay and can carry a small premium. Bullion from estate holdings, broken assay cards, and tumbled or scratched bars are all evaluated; condition primarily affects collector premiums on numismatic-grade pieces.",
    ],
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
    longDescription: [
      "We evaluate luxury watches by reference number, condition, originality, and completeness of the kit. The brands we work with most often are Rolex (Submariner, GMT-Master, Daytona, Datejust, Day-Date), Cartier (Tank, Santos, Ballon Bleu), Breitling (Navitimer, Superocean, Chronomat), Patek Philippe, Audemars Piguet, IWC, Omega, Vacheron Constantin, and Jaeger-LeCoultre.",
      "Originality drives value. A watch with original dial, original hands, original bracelet or strap, and matching reference and serial numbers is worth meaningfully more than the same watch with replaced parts. Service receipts, warranty cards, and original boxes all factor into the evaluation, sometimes adding 10 to 25 percent.",
      "Do not service the watch before selling. A service can run several thousand dollars and rarely returns its cost in resale value. Do not polish the case; polishing rounds off original geometry that vintage collectors look for. Bring the watch as-is, with whatever paperwork and packaging you have.",
      "For Patek Philippe and other top-tier brands, the original certificate of origin or archive extract is essentially mandatory for top-tier resale. If you have it, find it. The presence or absence of original documentation can move the offer significantly.",
    ],
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
    id: "collector-watches",
    name: "Collector Watches",
    description:
      "Collector and antique watches purchased for their precious metal value only.",
    longDescription: [
      "Antique pocket watches and older collector watches are valued primarily for their precious metal content rather than as functional timepieces. Gold-cased pocket watches (Hamilton, Elgin, Waltham, and similar American makers) typically carry case markings indicating purity (14K, 18K, or sometimes a karat number stamped in the case back).",
      "Silver pocket watches (sterling, coin silver, or hallmarked European silver) are evaluated similarly. We weigh the case (after the movement is removed if possible) and price the silver content against the live market.",
      "Collector watches with broken or non-running movements are still welcome. We are not buying for the watch movement; we are buying for the recoverable precious metal in the case. Bring whatever you have, including incomplete pieces and movements separated from cases.",
    ],
    items: [
      "Gold collector watches",
      "Silver collector watches",
      "Antique & vintage gold cases",
      "Gold-cased pocket watches",
      "Silver-cased pocket watches",
      "Scrap & broken precious metal watches",
    ],
    icon: "clock",
    highlighted: false,
  },
  {
    id: "estate-jewelry",
    name: "Estate Jewelry",
    description: "Vintage and modern jewelry with precious metal value.",
    longDescription: [
      "Estate jewelry refers to previously owned pieces, often inherited or accumulated over time. We evaluate estate jewelry across two dimensions: the metal content (gold, silver, platinum) and any additional value from designer hallmarks, period style, or significant gemstones.",
      "Era matters. Victorian, Edwardian, Art Deco, Retro, and Mid-Century Modern pieces sometimes carry collector premiums above their metal value because there is a resale market for the period style. Signed pieces from established designers (Cartier, Tiffany, Van Cleef & Arpels, Bulgari, David Webb, and similar) are evaluated against the secondary market for the brand.",
      "Stones in estate pieces are evaluated separately if they are significant. Diamonds, sapphires, rubies, and emeralds of meaningful size and quality are factored into the offer in addition to the metal value. Smaller accent stones are typically left in place and not separately valued.",
      "Bring the original boxes, receipts, appraisals, and certificates if you have them. They establish provenance and can affect the offer, particularly for designer pieces and significant gemstones.",
    ],
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
