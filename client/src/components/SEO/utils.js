import { DEFAULT_SEO } from "./constants";

/**
 * Builds a clean, absolute canonical URL.
 */
export const buildCanonicalUrl = (pathname = "") => {
  if (!pathname) return DEFAULT_SEO.siteUrl;
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) {
    return pathname;
  }
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${DEFAULT_SEO.siteUrl}${cleanPath}`;
};

/**
 * Formats full document titles.
 */
export const buildTitle = (title) => {
  if (!title) return DEFAULT_SEO.defaultTitle;
  if (title.includes(DEFAULT_SEO.siteName)) return title;
  return `${title} | ${DEFAULT_SEO.siteName}`;
};

/**
 * Ensures absolute URLs for Open Graph and Twitter images.
 */
export const buildImageUrl = (imagePath) => {
  if (!imagePath) return `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.defaultImage}`;
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${DEFAULT_SEO.siteUrl}${cleanPath}`;
};

/**
 * Strips HTML tags from text content.
 */
export const stripHtml = (html = "") => {
  return html.replace(/<[^>]*>?/gm, "").trim();
};

/**
 * Truncates descriptions safely for meta tags.
 */
export const truncateDescription = (text = "", maxLength = 160) => {
  const cleanText = stripHtml(text);
  if (cleanText.length <= maxLength) return cleanText;
  return `${cleanText.substring(0, maxLength - 3).trim()}...`;
};