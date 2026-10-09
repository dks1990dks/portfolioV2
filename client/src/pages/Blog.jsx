import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import { blogPosts } from "../components/blog/blogData";

export default function Blog() {
  return (
    <>
      <SEO
        title="Software Engineering & Business Automation Blog"
        description="Insights, tutorials, and deep dives on custom ERP, React, Node.js development, SaaS architecture, and modern business automation."
        canonicalUrl="/blog"
        keywords={[
          "Software Engineering Blog",
          "ERP Development Insights",
          "React Tutorials",
          "Node.js Development",
          "SaaS Architecture",
          "Business Automation",
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      <div
        id="blog"
        className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <header
            id="hero"
            className="space-y-3 text-center md:text-left border-b border-slate-800 pb-8"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Engineering Insights & Articles
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl">
              Thoughts on custom ERP development, enterprise web applications,
              SaaS architecture, and business automation.
            </p>
          </header>

          {/* Posts */}
          <div id="articles" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full font-semibold border border-cyan-500/20">
                      {post.category}
                    </span>

                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-500">
                  <span>{post.date}</span>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-cyan-400 font-semibold hover:underline"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
