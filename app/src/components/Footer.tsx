"use client";

const TELEGRAM_BOT = "https://t.me/NepOfNietBot";

const footerLinks = {
  Product: [
    { label: "Hoe het werkt", href: "#hoe-het-werkt" },
    { label: "Beloningen", href: "#beloningen" },
    { label: "Business API", href: "#" },
  ],
  Bedrijf: [
    { label: "Over Ons", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Telegram", href: TELEGRAM_BOT },
  ],
  Legaal: [
    { label: "Privacybeleid", href: "#" },
    { label: "Voorwaarden", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-10 sm:py-12 px-4 sm:px-6 mt-12 sm:mt-20 border-t border-primary/10">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <a href="#challenge" className="text-lg font-bold text-primary mb-4 font-headline tracking-tighter block">
            Nep Of Niet
          </a>
          <p className="font-body text-sm text-slate-400 leading-relaxed max-w-xs">
            De ultieme Real vs AI uitdaging. Wij helpen bedrijven met het
            valideren van AI datasets terwijl jij geld verdient.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-label text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
              {title}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-body text-sm text-slate-500 hover:text-tertiary transition-colors inline-block py-1 min-h-[32px] flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-body text-xs sm:text-sm text-slate-400">
          © 2024 Nep Of Niet. De ultieme Real vs AI uitdaging.
        </p>
      </div>
    </footer>
  );
}
