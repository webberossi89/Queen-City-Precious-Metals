import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SITE_NAME = "Queen City Precious Metals";
const BASE_URL = "https://queencitypreciousmetals.com";

export function SEO({ title, description, canonical }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
}
