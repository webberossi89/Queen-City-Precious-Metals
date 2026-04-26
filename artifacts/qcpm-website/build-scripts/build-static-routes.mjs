#!/usr/bin/env node
/**
 * build-static-routes.mjs
 *
 * Post-build SEO step. After `vite build` produces dist/index.html, this script
 * generates per-route static HTML files (dist/<route>/index.html) with each
 * route's title, description, canonical, and OG tags injected into the
 * <!--SEO_HEAD_START--> ... <!--SEO_HEAD_END--> block.
 *
 * Why: the React SPA only sets per-page tags via react-helmet-async after JS
 * runs. Static crawlers (Google's first-pass, social link unfurlers, AI
 * crawlers, llms.txt fetchers) read raw HTML and would otherwise see the
 * homepage tags on every URL. With per-route static files, the right tags
 * are baked in at build time.
 *
 * Cloudflare Pages serves dist/<route>/index.html for direct hits to <route>
 * automatically. Client-side React Router takes over for in-app navigation
 * (the bundled JS hydrates and behaves as a normal SPA).
 *
 * Routes here mirror src/data/navigation.ts and the page components. Update
 * this file when adding new top-level routes.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const indexHtmlPath = path.join(distDir, "index.html");
const blogDataPath = path.resolve(__dirname, "..", "src", "data", "blog.ts");

const SITE_URL = "https://queencitypreciousmetals.com";
const SITE_NAME = "Queen City Precious Metals";

/** Per-route SEO. Mirrors what each page passes to <SEO> in src/pages/*.tsx. */
const ROUTES = [
  {
    path: "/",
    title: "We Buy Gold, Coins, Bullion & Luxury Watches",
    description:
      "Sell gold jewelry, coins, bullion, Rolex, Cartier, Breitling, and luxury watches to Queen City Precious Metals. Professional valuations at scheduled buying events across the Charlotte region.",
  },
  {
    path: "/what-we-buy",
    title: "What We Buy",
    description:
      "We buy gold jewelry, silver, coins, bullion, bars, estate jewelry, collector watches (for precious metal value), and luxury watches including Rolex, Cartier, Breitling, Patek Philippe, and more.",
  },
  {
    path: "/events",
    title: "Upcoming Events",
    description:
      "Find upcoming Queen City Precious Metals buying events near Charlotte, NC. Bring your gold, coins, bullion, jewelry, or luxury watches for a free, no-obligation valuation.",
  },
  {
    path: "/about",
    title: "About Us",
    description:
      "Queen City Precious Metals is a professional precious metals and luxury watch buyer serving Charlotte, NC. Transparent valuations, no-pressure consultations, and expert knowledge.",
  },
  {
    path: "/faq",
    title: "FAQ",
    description:
      "Common questions about selling gold, coins, bullion, jewelry, and luxury watches to Queen City Precious Metals. Learn about our process, events, and what we buy.",
  },
  {
    path: "/blog",
    title: "Blog",
    description:
      "Precious metals market updates, selling guides, and news from Queen City Precious Metals. Stay informed about gold prices, coins, and luxury watch trends.",
  },
  {
    path: "/contact",
    title: "Contact Us",
    description:
      "Contact Queen City Precious Metals to ask about selling gold, coins, bullion, jewelry, or luxury watches. Call (866) 721-7869 or send us a message.",
  },
];

/**
 * Extract blog post route metadata from src/data/blog.ts. The source is a
 * TypeScript object literal, but we only need slug + title + excerpt, which
 * always appear together at the top of each post entry. Pulling them by
 * regex avoids adding a TS loader to this build step. If the source format
 * changes, this will silently return an empty list and the prerender will
 * just skip blog posts.
 */
function readBlogRoutes() {
  if (!fs.existsSync(blogDataPath)) return [];
  const src = fs.readFileSync(blogDataPath, "utf8");
  const entryRe = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)"/g;
  const routes = [];
  for (const m of src.matchAll(entryRe)) {
    const [, slug, title, excerpt] = m;
    routes.push({
      path: `/blog/${slug}`,
      title,
      description: excerpt,
    });
  }
  return routes;
}

function escapeAttr(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildSeoBlock({ path: routePath, title, description }) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
  return [
    `<title>${escapeAttr(fullTitle)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
  ].join("\n    ");
}

function injectSeo(html, route) {
  const block = buildSeoBlock(route);
  // Replace everything between the markers, inclusive of one newline padding
  return html.replace(
    /<!--SEO_HEAD_START-->[\s\S]*?<!--SEO_HEAD_END-->/,
    `<!--SEO_HEAD_START-->\n    ${block}\n    <!--SEO_HEAD_END-->`,
  );
}

function main() {
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(
      `[build-static-routes] dist/index.html not found at ${indexHtmlPath}. Run \`vite build\` first.`,
    );
    process.exit(1);
  }
  const baseHtml = fs.readFileSync(indexHtmlPath, "utf8");
  if (!baseHtml.includes("<!--SEO_HEAD_START-->")) {
    console.error(
      "[build-static-routes] Missing SEO_HEAD_START marker in dist/index.html. Did the source index.html get reverted?",
    );
    process.exit(1);
  }

  const blogRoutes = readBlogRoutes();
  const allRoutes = [...ROUTES, ...blogRoutes];

  let written = 0;
  for (const route of allRoutes) {
    const html = injectSeo(baseHtml, route);
    let outPath;
    if (route.path === "/") {
      outPath = path.join(distDir, "index.html");
    } else {
      const dir = path.join(distDir, route.path.replace(/^\//, ""));
      fs.mkdirSync(dir, { recursive: true });
      outPath = path.join(dir, "index.html");
    }
    fs.writeFileSync(outPath, html, "utf8");
    written++;
    console.log(
      `[build-static-routes] ${route.path.padEnd(15)} -> ${path.relative(distDir, outPath)}`,
    );
  }
  console.log(`[build-static-routes] wrote ${written} static route files.`);
}

main();
