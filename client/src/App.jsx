import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToHash from "./components/common/ScrollToHash";

// Primary Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";


// Blog Pages
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

// Legal & System Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";



const App = () => {
  return (
    <>
    <ScrollToHash />
    <Routes>
      
      {/* Home Route */}
      <Route path="/" element={<Home />} />

      {/* About Route */}
      <Route path="/about" element={<About />} />

      {/* Services Routes */}
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />

      {/* Projects Routes */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />

      {/* Pricing Route */}
      <Route path="/pricing" element={<Pricing />} />

      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />

      {/* Contact Route */}
      <Route path="/contact" element={<Contact />} />

      {/* Legal Routes */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />

      {/* 404 Catch-All Route */}
      <Route path="*" element={<NotFound />} />
      
    </Routes>
    </>
  );
};

export default App;