import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import NotFound from "./NotFound";
import { getBlogPostBySlug } from "../components/blog/blogData";


export default function BlogDetails() {
  const { slug } = useParams();

  const post = getBlogPostBySlug(slug);

  // Invalid blog slug
  if (!post) {
  return <NotFound />;
}

  const articleUrl = `https://deepakcodes.com/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Deepak",
      url: "https://deepakcodes.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Deepak Codes",
      url: "https://deepakcodes.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        pathname={`/blog/${post.slug}`}
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
        schemas={[articleSchema]}
      />

      <article className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Back Navigation */}
          <Link
            to="/blog"
            className="text-sm font-semibold text-cyan-400 hover:underline flex items-center gap-1"
          >
            ← Back to All Articles
          </Link>

          {/* Article Header */}
          <header className="space-y-4 border-b border-slate-800 pb-8">
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/20">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span>By Deepak</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none text-slate-300 space-y-6 leading-relaxed">
            <p className="text-lg text-slate-200 font-medium">
              {post.content.introduction}
            </p>

            {post.content.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold text-white pt-4">
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </section>
            ))}

            {post.content.quote && (
              <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-slate-300 bg-slate-900/50 py-3 pr-4 rounded-r-lg">
                "{post.content.quote}"
              </blockquote>
            )}
          </div>
        </div>
      </article>
    </>
  );
}