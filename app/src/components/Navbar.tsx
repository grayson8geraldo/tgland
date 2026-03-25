"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#challenge", label: "Challenge", active: true },
  { href: "#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "#beloningen", label: "Beloningen" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0e0e13]/90 backdrop-blur-2xl shadow-[0_4px_40px_rgba(211,148,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tighter text-primary font-headline cursor-pointer"
        >
          Nep Of Niet
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-label tracking-tight uppercase text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 hover:text-white ${
                link.active
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                  : "text-slate-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-6 py-2 rounded-xl uppercase text-sm transition-shadow hover:shadow-[0_0_20px_rgba(211,148,255,0.4)]"
        >
          Start Nu
        </motion.button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-container-low/95 backdrop-blur-2xl border-t border-outline-variant/20 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-label uppercase text-sm tracking-tight ${
                    link.active ? "text-secondary font-bold" : "text-slate-400"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-4 bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-6 py-3 rounded-xl uppercase text-sm">
                Start Nu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
