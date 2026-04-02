import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  // Add blog posts here. Example format:
  // {
  //   slug: "how-to-sell-gold-jewelry",
  //   title: "How to Sell Gold Jewelry: What You Need to Know",
  //   excerpt: "A straightforward guide to understanding what your gold jewelry is worth and how the selling process works.",
  //   content: "Full article content here...",
  //   date: "2026-04-15",
  //   author: "Queen City Precious Metals",
  //   category: "Guides",
  //   image: "/images/blog/sell-gold.jpg",
  //   featured: true,
  // },
];

export const blogCategories = [
  "Guides",
  "Market Updates",
  "Events",
  "Education",
] as const;
