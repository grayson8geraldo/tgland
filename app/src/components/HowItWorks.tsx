"use client";

import { motion } from "framer-motion";
import { TELEGRAM_BOT } from "@/config";

const steps = [
  {
    icon: "chat_bubble",
    title: "1. Ontvang een taak",
    description:
      "Onze bot stuurt je een willekeurige foto of video. Is dit door een mens gemaakt, of is het puur AI-generatie?",
    hoverBorder: "hover:border-primary/30",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: "ads_click",
    title: "2. Kies: Echt of AI?",
    description:
      "Gebruik je intuïtie of zoek naar digitale inconsistenties. Maak je keuze met één druk op de knop in de chat.",
    hoverBorder: "hover:border-tertiary/30",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
  },
  {
    icon: "payments",
    title: "3. Ontvang €1 beloning",
    description:
      "Heb je het goed? Dan staat er direct €1 op je balans. Zo simpel is het. Snel verdiend bij elk goed antwoord.",
    hoverBorder: "hover:border-secondary/30",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HowItWorks() {
  return (
    <section
      className="py-16 sm:py-24 bg-surface-container-low relative"
      id="hoe-het-werkt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
              Hoe het werkt
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg">
              In drie simpele stappen van een vermoeden naar een beloning. Geen
              complexe registraties, gewoon Telegram.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden md:block font-label text-primary font-bold text-7xl leading-none select-none"
          >
            PROCESS
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`p-6 sm:p-8 bg-surface-container-highest rounded-xl border border-outline-variant/10 ${step.hoverBorder} transition-all duration-300 group active:scale-[0.98] sm:hover:-translate-y-2`}
            >
              <div
                className={`w-12 sm:w-14 h-12 sm:h-14 ${step.iconBg} rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${step.iconColor} group-hover:scale-110 transition-transform`}
              >
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA after steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <a
            href={TELEGRAM_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-8 py-4 rounded-xl text-base active:scale-[0.97] transition-all shadow-[0_0_20px_rgba(211,148,255,0.3)] min-h-[52px]"
          >
            <span className="material-symbols-outlined text-xl">send</span>
            Probeer het nu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
