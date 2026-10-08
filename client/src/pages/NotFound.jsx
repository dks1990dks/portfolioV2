import React from "react";
import { Link } from "react-router-dom";
import SEO, { getBreadcrumbSchema } from "../components/SEO";

export default function NotFound() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "404 Page Not Found", url: "/404" },
  ];

  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The requested page or route could not be found."
        pathname="/404"
        noIndex={true}
        schemas={[getBreadcrumbSchema(breadcrumbItems)]}
      />

      <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-6 text-center space-y-6 antialiased">
        <div className="space-y-2">
          <p className="text-cyan-400 font-semibold tracking-widest text-xs uppercase">
            Error 404
          </p>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tight">
            404
          </h1>
        </div>

        <p className="text-slate-400 max-w-md text-base md:text-lg">
          Oops! The architectural page or resource you are searching for does not exist or has been relocated.
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl transition duration-200 shadow-lg shadow-cyan-500/10"
        >
          Return to Home
        </Link>
      </main>
    </>
  );
}