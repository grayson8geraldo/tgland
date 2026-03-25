"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TELEGRAM_BOT } from "@/config";

const navLinks = [
  { href: "#challenge", label: "Challenge" },
  { href: "#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "#beloningen", label: "Beloningen" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#challenge");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
        <a
          href="#challenge"
          className="text-xl sm:text-2xl font-bold tracking-tighter text-primary font-headline"
        >
          Nep Of Niet
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-8 font-label tracking-tight uppercase text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 hover:text-white py-1 ${
                activeSection === link.href
                  ? "text-secondary font-bold border-b-2 border-secondary"
                  : "text-slate-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={TELEGRAM_BOT}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-5 lg:px-6 py-2 rounded-xl uppercase text-sm transition-shadow hover:shadow-[0_0_20px_rgba(211,148,255,0.4)] active:scale-95"
        >
          Start Nu
        </a>

        {/* Mobile Hamburger — min 44px touch target */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-3 -mr-2 min-w-[44px] min-h-[44px] items-center justify-center"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 56px)" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-container-low/98 backdrop-blur-2xl border-t border-outline-variant/20 overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-label uppercase text-base tracking-tight py-3 px-4 rounded-xl transition-colors min-h-[48px] flex items-center ${
                    activeSection === link.href
                      ? "text-secondary font-bold bg-secondary/10"
                      : "text-slate-400 active:bg-surface-container"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={TELEGRAM_BOT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-6 py-4 rounded-xl uppercase text-sm text-center min-h-[48px] flex items-center justify-center"
              >
                Start Nu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
