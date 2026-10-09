import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-black text-white"
        >
          <Link to="/" onClick={closeMenu} aria-label="Deepak Codes home">
            Deepak<span className="text-cyan-400">Codes</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex gap-10 text-slate-300 font-medium"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact#discovery-form"
          className="hidden lg:block px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition shadow-lg shadow-cyan-500/10"
        >
          Book Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden text-white text-4xl"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <HiX aria-hidden="true" /> : <HiOutlineMenuAlt3 aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-5 flex flex-col gap-2 text-slate-200 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 px-4 py-3 rounded-xl text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition"
            >
              Book Consultation
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}