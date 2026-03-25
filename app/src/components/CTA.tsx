"use client";

import { motion } from "framer-motion";
import { TELEGRAM_BOT, TELEGRAM_DOWNLOAD_IOS, TELEGRAM_DOWNLOAD_ANDROID, TELEGRAM_DOWNLOAD_DESKTOP } from "@/config";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="faq">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-dim to-primary p-[2px] flex flex-col items-center"
      >
        <div className="w-full bg-background rounded-[calc(1rem-1px)] sm:rounded-[1.4rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden noise">
          <div className="absolute inset-0 bg-primary/5 opacity-50 pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 tracking-tighter relative z-10"
          >
            Klaar om te <br />
            <span className="text-primary">starten?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-on-surface-variant text-base sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 sm:mb-12 relative z-10"
          >
            Klik op de button om direct naar onze Telegram-bot te gaan en je
            eerste €1 te verdienen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 relative z-10"
          >
            <a
              href={TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl flex items-center justify-center gap-3 active:scale-[0.97] transition-all shadow-[0_0_40px_rgba(211,148,255,0.4)] hover:shadow-[0_0_60px_rgba(211,148,255,0.6)] min-h-[52px]"
            >
              <span className="material-symbols-outlined">send</span>
              Open in Telegram
            </a>
            <p className="text-on-surface-variant text-xs sm:text-sm font-label uppercase tracking-widest font-bold text-center">
              Geen installatie nodig
            </p>
          </motion.div>

          {/* Telegram Download Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative z-10 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-outline-variant/15"
          >
            <p className="text-on-surface-variant text-sm sm:text-base mb-5 sm:mb-6 font-body">
              Heb je nog geen Telegram? Download het gratis:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={TELEGRAM_DOWNLOAD_IOS}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-outline-variant/40 bg-surface-container-highest hover:bg-surface-container text-on-surface font-label font-bold px-6 py-3.5 rounded-xl text-sm transition-colors active:scale-[0.97] min-h-[48px]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                iPhone / iPad
              </a>
              <a
                href={TELEGRAM_DOWNLOAD_ANDROID}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-outline-variant/40 bg-surface-container-highest hover:bg-surface-container text-on-surface font-label font-bold px-6 py-3.5 rounded-xl text-sm transition-colors active:scale-[0.97] min-h-[48px]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2.226l-1.29 2.231A7.93 7.93 0 0012 3.5a7.95 7.95 0 00-4.235.957L6.477 2.226a.5.5 0 00-.866.5l1.27 2.2A8.01 8.01 0 004 12v1h16v-1a8.01 8.01 0 00-2.881-6.074l1.27-2.2a.5.5 0 10-.866-.5zM9 10a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2zM4 14h16v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5z"/></svg>
                Android
              </a>
              <a
                href={TELEGRAM_DOWNLOAD_DESKTOP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-outline-variant/40 bg-surface-container-highest hover:bg-surface-container text-on-surface font-label font-bold px-6 py-3.5 rounded-xl text-sm transition-colors active:scale-[0.97] min-h-[48px]"
              >
                <span className="material-symbols-outlined text-lg">desktop_windows</span>
                Desktop
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
