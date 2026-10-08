import React from "react";
import { Helmet } from "react-helmet-async";
import { DEFAULT_SEO, BRAND } from "./constants";
import { getBreadcrumbSchema } from "./schemas";
import {
  buildCanonicalUrl,
  buildImageUrl,
  buildTitle,
  truncateDescription,
} from "./utils";

export default function SEO({
  title,
  description,
  pathname = "",
  canonicalUrl = "", // Props fallback alias for pathname
  image = "",
  ogImage = "", // Props fallback alias for image
  twitterImage = "", // Specific Twitter share image override
  ogType = "website",
  keywords = [],
  noindex = false,
  noIndex = false, // Props fallback alias for noindex
  breadcrumbs = [],
  schemas = [],
  schema = null, // Props fallback alias for schemas
  children,
}) {
  // Normalize Props across versions
  const path = pathname || canonicalUrl;
  const img = image || ogImage;
  const isNoIndex = noindex || noIndex;

  // Collect input schemas
  const rawSchemas = schemas.length > 0 ? schemas : schema ? [schema] : [];

  // Compute SEO Values using Utils & Constants
  const pageTitle = buildTitle(title);
  const pageDescription = truncateDescription(
    description || DEFAULT_SEO.defaultDescription,
  );
  const finalCanonicalUrl = buildCanonicalUrl(path);
  const ogImageUrl = buildImageUrl(img);
  const twitterImageUrl = twitterImage
    ? buildImageUrl(twitterImage)
    : ogImageUrl;
  const robotsValue = isNoIndex ? "noindex, nofollow" : DEFAULT_SEO.robots;

  // Merge page keywords with global fallback keywords
  const combinedKeywords = Array.from(
    new Set([...keywords, ...(DEFAULT_SEO.keywords || [])]),
  ).join(", ");

  // Handle Breadcrumbs schema generation if provided
  const breadcrumbSchema =
    breadcrumbs.length > 0 ? getBreadcrumbSchema(breadcrumbs) : null;

  // Combine and filter out any falsy/null values from schemas array
  const activeSchemas = [
    ...rawSchemas,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
  ]
    .filter(Boolean)
    .map((schema) =>
      schema["@context"]
        ? schema
        : {
            "@context": "https://schema.org",
            ...schema,
          },
    );
  return (
    <Helmet>
      {/* Basic HTML Metadata */}
      <html lang={DEFAULT_SEO.language} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content={DEFAULT_SEO.author} />
      <meta name="robots" content={robotsValue} />
      <meta name="application-name" content={DEFAULT_SEO.siteName} />
      <meta
        name="theme-color"
        content={DEFAULT_SEO.themeColor || BRAND?.primary || "#06b6d4"}
      />
      {combinedKeywords && <meta name="keywords" content={combinedKeywords} />}

      {/* Canonical Link */}
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Open Graph Tags (Facebook, LinkedIn, Discord, WhatsApp) */}
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:locale"
        content={
          DEFAULT_SEO.locale || `${DEFAULT_SEO.language}_${DEFAULT_SEO.region}`
        }
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_SEO.twitterHandle} />
      <meta name="twitter:creator" content={DEFAULT_SEO.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={twitterImageUrl} />

      {/* Multiple JSON-LD Schema Script Injections */}
      {activeSchemas.map((s, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}

      {/* Custom Tag Extensions */}
      {children}
    </Helmet>
  );
}
