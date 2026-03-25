"use client";

import { TELEGRAM_BOT } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-10 sm:py-12 px-4 sm:px-6 mt-12 sm:mt-20 border-t border-primary/10">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 max-w-7xl mx-auto">
        <div className="max-w-xs">
          <a href="#challenge" className="text-lg font-bold text-primary mb-4 font-headline tracking-tighter block">
            Nep Of Niet
          </a>
          <p className="font-body text-sm text-slate-400 leading-relaxed">
            De ultieme Real vs AI uitdaging. Wij helpen bedrijven met het
            valideren van AI datasets terwijl jij geld verdient.
          </p>
        </div>

        <div className="flex gap-8 sm:gap-12">
          <div>
            <h4 className="font-label text-white font-bold text-xs uppercase tracking-widest mb-4">
              Navigatie
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#hoe-het-werkt" className="font-body text-sm text-slate-500 hover:text-tertiary transition-colors py-1 inline-block">
                  Hoe het werkt
                </a>
              </li>
              <li>
                <a href="#beloningen" className="font-body text-sm text-slate-500 hover:text-tertiary transition-colors py-1 inline-block">
                  Beloningen
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_BOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-slate-500 hover:text-tertiary transition-colors py-1 inline-block"
                >
                  Telegram Bot
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-white font-bold text-xs uppercase tracking-widest mb-4">
              Legaal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-body text-sm text-slate-500 hover:text-tertiary transition-colors py-1 inline-block">
                  Privacybeleid
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-slate-500 hover:text-tertiary transition-colors py-1 inline-block">
                  Voorwaarden
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-outline-variant/10 text-center">
        <p className="font-body text-xs sm:text-sm text-slate-400">
          © 2026 Nep Of Niet. De ultieme Real vs AI uitdaging.
        </p>
      </div>
    </footer>
  );
}
