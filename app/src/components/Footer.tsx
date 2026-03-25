"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Hoe het werkt", "Beloningen", "Business API"],
  Bedrijf: ["Over Ons", "Contact", "Telegram"],
  Legaal: ["Privacybeleid", "Voorwaarden"],
};

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-12 px-6 mt-20 border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-1">
          <div className="text-lg font-bold text-primary mb-4 font-headline tracking-tighter">
            Nep Of Niet
          </div>
          <p className="font-body text-sm text-slate-400 leading-relaxed">
            De ultieme Real vs AI uitdaging. Wij helpen bedrijven met het
            valideren van AI datasets terwijl jij geld verdient.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-label text-white font-bold text-sm uppercase tracking-widest mb-6">
              {title}
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#"
                    className="font-body text-sm text-slate-500 hover:text-tertiary transition-colors inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-body text-sm text-slate-400">
          © 2024 Nep Of Niet. De ultieme Real vs AI uitdaging.
        </p>
      </div>
    </footer>
  );
}
