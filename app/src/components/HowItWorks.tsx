"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "chat_bubble",
    title: "1. Ontvang een taak",
    description:
      "Onze bot stuurt je een willekeurige foto of video. Is dit door een mens gemaakt, of is het puur AI-generatie?",
    accent: "primary",
    hoverBorder: "hover:border-primary/30",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: "ads_click",
    title: "2. Kies: Echt of AI?",
    description:
      "Gebruik je intuïtie of zoek naar digitale inconsistenties. Maak je keuze met één druk op de knop in de chat.",
    accent: "tertiary",
    hoverBorder: "hover:border-tertiary/30",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
  },
  {
    icon: "payments",
    title: "3. Ontvang €1 beloning",
    description:
      "Heb je het goed? Dan staat er direct €1 op je balans. Zo simpel is het. Snel verdiend bij elk goed antwoord.",
    accent: "secondary",
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
      className="py-24 bg-surface-container-low relative"
      id="hoe-het-werkt"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Hoe het werkt
            </h2>
            <p className="text-on-surface-variant text-lg">
              In drie simpele stappen van een vermoeden naar een beloning. Geen
              complexe registraties, gewoon Telegram.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-label text-primary font-bold text-7xl leading-none select-none"
          >
            PROCESS
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`p-8 bg-surface-container-highest rounded-xl border border-outline-variant/10 ${step.hoverBorder} transition-all duration-300 group`}
            >
              <div
                className={`w-14 h-14 ${step.iconBg} rounded-xl flex items-center justify-center mb-6 ${step.iconColor} group-hover:scale-110 transition-transform`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
