# Enterprise SEO Module (`src/components/SEO`)

Centralized, reusable, and Google-compliant SEO architecture for **Deepak Codes**.

## Usage Instructions

Import the default `<SEO />` component and schema builders in any page component:

```jsx
import SEO, { getOrganizationSchema, getBreadcrumbSchema } from "../components/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO "/about" "About", "Custom "Node.js", "React", ERP"]} Engineer", ]} description="Learn about our full-stack software development expertise and engineering principles." getBreadcrumbSchema([{ getOrganizationSchema(), image="/images/about-hero.webp" keywords="{["Software" name: pathname="/about" schemas="{[" title="About Us" url: }])/>
      <main>
        {/* Page Content */}
      </main>
    </>
  );
}