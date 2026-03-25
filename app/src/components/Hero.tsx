"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden"
      id="challenge"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/30 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
              Nu Live op Telegram
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-6 text-glow-primary"
          >
            Echt of AI?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">
              Jij bepaalt.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-xl md:text-2xl text-on-surface-variant max-w-xl mb-10 leading-relaxed"
          >
            Test je waarneming met onze Telegram-bot en verdien geld bij elke
            juiste keuze. De ultieme Real vs AI uitdaging.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-shadow shadow-[0_0_30px_rgba(211,148,255,0.3)] hover:shadow-[0_0_50px_rgba(211,148,255,0.5)]"
            >
              <span className="material-symbols-outlined">send</span>
              Start met verdienen op Telegram
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-outline-variant/50 bg-surface-container-low hover:bg-surface-container text-on-surface font-label font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Hoe het werkt
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div className="relative aspect-square rounded-xl overflow-hidden glitch-border border-2 border-transparent">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Cinematic close-up of a human face split with a digital glitch effect"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBYkTO0srb414nIub-K9u2sLsOw3ZVXGw5FgGXa0lD6rxSlOWt4riFMhTzvR9WZnGzRSqhqAGcJfbVsAcu-Hu0eTxFRxvh37wFRIlHFXJ6ndWn-rHk1MAD1Sj6_-s36W8_vILSopsXoqqOWulUaIsNXgtomrkip4rG-d5afD-6wPZhqw1oz3RUA8moGuANaH4mpjuJb1nGxOdk4yq_4mPyKb13AjooGMSCUHs1z-IQKjWLr-E-DWNJq2wELv0UI6N9dwF57HTa_g"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            {/* Floating Labels */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 bg-secondary/20 backdrop-blur-md border border-secondary/50 px-4 py-2 rounded-full"
            >
              <span className="font-label text-secondary font-bold text-sm tracking-tighter">
                HUMAN LOGIC
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-10 bg-tertiary/20 backdrop-blur-md border border-tertiary/50 px-4 py-2 rounded-full"
            >
              <span className="font-label text-tertiary font-bold text-sm tracking-tighter">
                SYNTHETIC CORE
              </span>
            </motion.div>
          </div>

          {/* Decorative offset border */}
          <div className="absolute -z-10 -top-4 -right-4 w-full h-full border border-primary/20 rounded-xl translate-x-4 translate-y-4" />
        </motion.div>
      </div>
    </section>
  );
}
