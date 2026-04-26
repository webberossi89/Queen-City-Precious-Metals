import { Helmet } from "react-helmet-async";

const BASE_URL = "https://queencitypreciousmetals.com";
const SITE_NAME = "Queen City Precious Metals";

type JsonLd = Record<string, unknown>;

interface SchemaProps {
  data: JsonLd | JsonLd[];
}

/** Renders one or more JSON-LD blocks into <head>. */
export function Schema({ data }: SchemaProps) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList JSON-LD. Pass items in order from root to current page. */
export function buildBreadcrumb(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

interface FaqEntry {
  question: string;
  answer: string;
}

/** FAQPage JSON-LD. */
export function buildFaqPage(faqs: FaqEntry[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

interface ServiceEntry {
  name: string;
  description: string;
  serviceType?: string;
}

/** Service JSON-LD for a buying category. */
export function buildService({ name, description, serviceType }: ServiceEntry): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: BASE_URL,
      telephone: "(866) 721-7869",
    },
    areaServed: {
      "@type": "City",
      name: "Charlotte",
      sameAs: "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina",
    },
  };
}

interface ArticleEntry {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author?: string;
  image?: string;
}

/** Article JSON-LD for a blog post. */
export function buildArticle({
  title,
  description,
  slug,
  datePublished,
  author,
  image,
}: ArticleEntry): JsonLd {
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: author ?? SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    ...(image ? { image: `${BASE_URL}${image}` } : {}),
  };
}

interface PersonEntry {
  name: string;
  jobTitle: string;
  description?: string;
}

/** Person JSON-LD for E-E-A-T signal on /about. */
export function buildPerson({ name, jobTitle, description }: PersonEntry): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    ...(description ? { description } : {}),
    worksFor: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: BASE_URL,
    },
  };
}
