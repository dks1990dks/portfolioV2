import { DEFAULT_SEO } from "./constants";
import { buildCanonicalUrl, buildImageUrl } from "./utils";
import { projects } from "../projects/projectsData";
import { faqData } from "../Home/faq/faqData";

// 1. Organization Schema
export const getOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": `${DEFAULT_SEO.siteUrl}/#organization`,
  name: DEFAULT_SEO.siteName,
  url: DEFAULT_SEO.siteUrl,
  logo: buildImageUrl("/logo.png"),
  image: buildImageUrl(DEFAULT_SEO.defaultOgImage),
  sameAs: [
    "https://github.com/dks1990dks",
    "https://www.linkedin.com/in/deepak-saw-33962354/",
  ],
  description: DEFAULT_SEO.defaultDescription,
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@deepakcodes.com",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
});

// 2. Person / Author / Founder Schema
export const getPersonSchema = () => ({
  "@type": "Person",
  "@id": `${DEFAULT_SEO.siteUrl}/#author`,
  name: DEFAULT_SEO.author,
  url: DEFAULT_SEO.siteUrl,
  jobTitle: "Founder & Full Stack Software Developer",
  knowsAbout: DEFAULT_SEO.keywords,
  worksFor: {
    "@id": `${DEFAULT_SEO.siteUrl}/#organization`,
  },
  sameAs: [
  "https://github.com/dks1990dks",
  "https://www.linkedin.com/in/deepak-saw-33962354/",
],
});

// Alias for Founder Person Schema (About Page compatibility)
export const getFounderPersonSchema = getPersonSchema;

// 3. WebSite Schema
export const getWebSiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${DEFAULT_SEO.siteUrl}/#website`,
  url: DEFAULT_SEO.siteUrl,
  name: DEFAULT_SEO.siteName,
  description: DEFAULT_SEO.tagline,
  publisher: {
    "@id": `${DEFAULT_SEO.siteUrl}/#organization`,
  },
  inLanguage: `${DEFAULT_SEO.language}-${DEFAULT_SEO.region}`,
});

export const getWebsiteSchema = getWebSiteSchema;

// 4. Breadcrumb Schema
export const getBreadcrumbSchema = (breadcrumbs = []) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: DEFAULT_SEO.siteUrl,
    },
    ...breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: crumb.name,
      item: buildCanonicalUrl(crumb.url),
    })),
  ],
});

// 5. Generic FAQ Schema
export const getFAQSchema = (faqs = []) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question || faq.name,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer || faq.acceptedAnswer?.text,
    },
  })),
});

// Home Page Specific FAQ Schema
export const getHomeFAQSchema = () => getFAQSchema(faqData);

// 6. Professional Service & Local Business Schema
export const getLocalBusinessSchema = () => ({
  "@type": "ProfessionalService",
  "@id": `${DEFAULT_SEO.siteUrl}/#localbusiness`,
  name: DEFAULT_SEO.siteName,
  url: DEFAULT_SEO.siteUrl,
  image: buildImageUrl(DEFAULT_SEO.defaultOgImage),
  telephone: "+91-9737833333",
  email: "contact@deepakcodes.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.1702",
    longitude: "72.8311",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "19:00",
  },
});

export const getProfessionalServiceSchema = getLocalBusinessSchema;

// 7. Generic Project / Software Application Schema
export const getProjectSchema = ({ name, description, image, url }) => ({
  "@type": "SoftwareApplication",
  name,
  description,
  image: buildImageUrl(image),
  url: buildCanonicalUrl(url),
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web-based",
  author: {
    "@id": `${DEFAULT_SEO.siteUrl}/#organization`,
  },
});

// 8. Services Catalog & FAQ Schemas
export const getServicesCatalogSchema = () => ({
  "@type": "ItemList",
  "@id": `${DEFAULT_SEO.siteUrl}/services/#catalog`,
  name: "Deepak Codes Software Development Services",
  description:
    "Custom ERP systems, SaaS applications, business dashboards, API integrations, and workflow automation solutions.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "ERP Development",
        description:
          "Custom ERP software integrating inventory, accounting, purchase, sales, GST workflows, dispatch, and business reporting.",
        provider: { "@id": `${DEFAULT_SEO.siteUrl}/#organization` },
        url: buildCanonicalUrl("/services"),
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Custom SaaS Development",
        description:
          "Scalable SaaS applications with secure authentication, multi-tenant architecture, subscriptions, administration, and analytics.",
        provider: { "@id": `${DEFAULT_SEO.siteUrl}/#organization` },
        url: buildCanonicalUrl("/services"),
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Business Dashboards",
        description:
          "Interactive business dashboards that transform operational and transactional data into useful visual insights and reports.",
        provider: { "@id": `${DEFAULT_SEO.siteUrl}/#organization` },
        url: buildCanonicalUrl("/services"),
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "API Integration Infrastructure",
        description:
          "Integration of payment gateways, email, WhatsApp, SMS, REST APIs, and other third-party services into business applications.",
        provider: { "@id": `${DEFAULT_SEO.siteUrl}/#organization` },
        url: buildCanonicalUrl("/services"),
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Business Workflow Automation",
        description:
          "Automation of recurring business processes, notifications, reports, approvals, scheduled tasks, and operational workflows.",
        provider: { "@id": `${DEFAULT_SEO.siteUrl}/#organization` },
        url: buildCanonicalUrl("/services"),
      },
    },
  ],
});

export const getServicesFAQSchema = () =>
  getFAQSchema([
    {
      question:
        "Do you build custom tools or configure off-the-shelf software?",
      answer:
        "We build custom software around the specific workflows and requirements of each project rather than forcing the business to adapt to a generic system.",
    },
    {
      question: "Can your systems integrate with existing accounting setups?",
      answer:
        "Yes. We design customized background API hooks that let your new ERP systems or automation tools securely push or balance records directly into common legacy systems or custom local database tables.",
    },
  ]);

// 9. Pricing Offers & FAQ Schemas
export const getPricingOffersSchema = () => ({
  "@type": "ItemList",
  "@id": `${DEFAULT_SEO.siteUrl}/pricing/#engagement-models`,
  name: "Software Engagement Models",
  description:
    "Flexible collaboration models for custom software development, ERP systems, SaaS applications, business dashboards, and workflow automation.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Offer",
        name: "Fixed Scope Project",
        description:
          "A structured engagement for clearly defined requirements, including planning, development, testing, deployment, and handover documentation.",
        url: buildCanonicalUrl("/pricing"),
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Offer",
        name: "Dedicated Development",
        description:
          "A long-term development engagement focused on product improvements, organized sprints, feature expansion, maintenance, and codebase improvements.",
        url: buildCanonicalUrl("/pricing"),
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Offer",
        name: "Consulting & Modernization",
        description:
          "An engagement for reviewing and improving existing software through code review, performance optimization, UI modernization, database improvements, and API integration.",
        url: buildCanonicalUrl("/pricing"),
      },
    },
  ],
});

export const getPricingFAQSchema = () =>
  getFAQSchema([
    {
      question: "Why don't you show fixed price tags on the website?",
      answer:
        "Custom software varies significantly based on complexity, integrations, and performance requirements. Providing a fixed price without understanding your needs can lead to inaccurate quotes. We craft tailored estimates to ensure you pay only for what your project actually requires.",
    },

    {
      question: "How do we handle changes in project scope?",
      answer:
        "For fixed-scope projects, new feature requests are discussed, estimated, and approved separately as change orders. For dedicated development, adjustments are integrated into weekly sprint iterations smoothly.",
    },

    {
      question: "What technology stack do you specialize in?",
      answer:
        "My core stack includes React, TypeScript, Node.js, Express, MongoDB, Tailwind CSS, REST APIs, and cloud deployment technologies.",
    },

    {
      question: "How do we start working together?",
      answer:
        "Simply request a proposal or send an email. I'll discuss your goals, timeline, and deliverables with you by email or through a discovery call.",
    },
  ]);

// 10. Contact Schema & FAQ
export const getContactFAQSchema = () =>
  getFAQSchema([
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on overall scope and complexity. Small dashboards or API integrations typically take 2 to 4 weeks, while comprehensive enterprise Textile ERP or multi-tenant SaaS builds range from 2 to 6 months.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we work with clients globally across the US, UAE, Europe, and India through async-friendly communication, milestone delivery reports, and flexible timezone availability.",
    },
    {
      question: "Can you modernize existing legacy software?",
      answer:
        "Yes, we perform complete code audits, database optimization, UI/UX modernizations, and migration from legacy systems to modern React, Node.js, and cloud architectures.",
    },
    {
      question: "Do you build custom ERP systems from scratch?",
      answer:
        "Yes, we specialize in building custom, tailormade ERP systems from scratch, engineered around your exact manufacturing workflows, inventory pipelines, and GST ledgers.",
    },
  ]);

export const getContactSchema = () => ({
  "@type": "ContactPage",
  "@id": `${DEFAULT_SEO.siteUrl}/contact/#webpage`,
  url: buildCanonicalUrl("/contact"),
  name: "Contact & Book Consultation | Deepak Codes",
  description:
    "Discuss your software requirements or submit a project proposal brief for custom ERP systems, SaaS applications, business dashboards, and workflow automation.",
});

// ==================== PAGE SCHEMA GRAPH EXPORTS ====================

export const getHomeSchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getPersonSchema(),
    getWebSiteSchema(),
    getHomeFAQSchema(),
  ],
});

export const getAboutSchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${DEFAULT_SEO.siteUrl}/about/#webpage`,
      url: buildCanonicalUrl("/about"),
      name: "About Deepak Codes | Custom ERP & SaaS Development Studio",
      description:
        "Deepak Codes develops scalable ERP systems, SaaS applications, business dashboards, and automation solutions for growing businesses.",
      mainEntity: getPersonSchema(),
    },
    getOrganizationSchema(),
  ],
});

export const getServicesSchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${DEFAULT_SEO.siteUrl}/services/#webpage`,
      url: buildCanonicalUrl("/services"),
      name: "Custom ERP, SaaS & Business Automation Services | Deepak Codes",
      description:
        "Robust ERP setups, scalable SaaS configurations, and automated business architectures optimized specifically to streamline manual procedures and support scaling.",
    },
    getOrganizationSchema(),
    getServicesCatalogSchema(),
    getServicesFAQSchema(),
  ],
});

export const getProjectsCatalogSchema = () => ({
  "@type": "ItemList",
  "@id": `${DEFAULT_SEO.siteUrl}/projects/#catalog`,
  name: "Deepak Codes Project Portfolio & Software Case Studies",
  description:
    "Explore completed and in-development software projects built with modern full-stack technologies.",
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      "@id": `${DEFAULT_SEO.siteUrl}/projects/${project.slug}/#software`,
      name: project.title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web-based",
      description:
        project.description ||
        project.subtitle ||
        `${project.title} software project by Deepak Codes.`,
      url: buildCanonicalUrl(`/projects/${project.slug}`),
      author: {
        "@id": `${DEFAULT_SEO.siteUrl}/#organization`,
      },
    },
  })),
});

export const getProjectsSchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${DEFAULT_SEO.siteUrl}/projects/#webpage`,
      url: buildCanonicalUrl("/projects"),
      name: "Case Studies & Enterprise Software Projects | Deepak Codes",
      description:
        "Explore completed and in-development ERP, SaaS, e-commerce, inventory, dashboard, education, accounting, and business software projects.",
    },
    getOrganizationSchema(),
    getProjectsCatalogSchema(),
  ],
});

export const getPricingSchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${DEFAULT_SEO.siteUrl}/pricing/#webpage`,
      url: buildCanonicalUrl("/pricing"),
      name: "Pricing & Engagement Models | Deepak Codes",
      description:
        "Flexible engagement models for custom ERP systems, SaaS applications, business dashboards, and workflow automation. Request a tailored software development proposal.",
    },
    getOrganizationSchema(),
    getPricingOffersSchema(),
    getPricingFAQSchema(),
  ],
});

export const getContactSchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getContactSchema(),
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getContactFAQSchema(),
  ],
});

export const getPrivacyPolicySchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${DEFAULT_SEO.siteUrl}/privacy-policy/#webpage`,
      url: buildCanonicalUrl("/privacy-policy"),
      name: "Privacy Policy | Deepak Codes",
      description:
        "Privacy policy outlining data collection, usage, and security practices for Deepak Codes.",
    },
    getOrganizationSchema(),
  ],
});

export const getTermsSchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${DEFAULT_SEO.siteUrl}/terms/#webpage`,
      url: buildCanonicalUrl("/terms"),
      name: "Terms of Service | Deepak Codes",
      description:
        "Terms and conditions governing the use of services, code delivery, and software engagements with Deepak Codes.",
    },
    getOrganizationSchema(),
  ],
});

// Single Service Schema Builder
export const getServiceSchema = (service = {}) => ({
  "@type": "Service",
  name: service.title || service.name || DEFAULT_SEO.siteName,
  description: service.description || DEFAULT_SEO.defaultDescription,
  provider: {
    "@type": "Organization",
    name: DEFAULT_SEO.siteName,
    url: DEFAULT_SEO.siteUrl,
  },
  url: service.url ? buildCanonicalUrl(service.url) : DEFAULT_SEO.siteUrl,
});
