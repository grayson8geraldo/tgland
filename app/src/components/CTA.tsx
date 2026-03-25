"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-primary-dim to-primary p-[2px] flex flex-col items-center"
      >
        <div className="w-full bg-background rounded-[1.4rem] p-12 md:p-20 text-center relative overflow-hidden noise">
          <div className="absolute inset-0 bg-primary/5 opacity-50 pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-headline text-5xl md:text-7xl font-bold mb-8 tracking-tighter relative z-10"
          >
            Klaar om te <br />
            <span className="text-primary">starten?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mx-auto mb-12 relative z-10"
          >
            Scan de code of klik op de button om direct naar onze Telegram-bot
            te gaan en je eerste €1 te verdienen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 relative z-10"
          >
            {/* QR Code Placeholder */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-48 h-48 bg-white p-4 rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.1)] group cursor-pointer"
            >
              <div className="w-full h-full bg-background rounded-lg border-4 border-dashed border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/40 group-hover:scale-110 transition-transform">
                  qr_code_2
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-10 py-5 rounded-xl text-xl flex items-center justify-center gap-3 transition-shadow shadow-[0_0_40px_rgba(211,148,255,0.4)] hover:shadow-[0_0_60px_rgba(211,148,255,0.6)]"
              >
                <span className="material-symbols-outlined">send</span>
                Open in Telegram
              </motion.button>
              <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest font-bold">
                Geen installatie nodig
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
