import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";
import { blogPosts } from "./src/components/blog/blogData";
import { projects } from "./src/components/projects/projectsData";

const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

const serviceRoutes = [
  "/services/erp",
  "/services/saas",
  "/services/dashboard",
  "/services/api",
  "/services/automation",
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    Sitemap({
      hostname: "https://deepakcodes.com",

      dynamicRoutes: [
        "/about",
        "/services",
        "/projects",
        "/pricing",
        "/blog",
        "/contact",
        "/privacy-policy",
        "/terms",
        ...projectRoutes,
        ...blogRoutes,
        ...serviceRoutes,
      ],

      changefreq: "weekly",
      priority: 0.8,
    }),
  ],
});
