"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

const TELEGRAM_BOT = "https://t.me/NepOfNietBot";

const allFeedEntries = [
  { initials: "JD", name: "Jesper D.", amount: "+ €1,00", bgColor: "bg-primary/20", textColor: "text-primary" },
  { initials: "MA", name: "Mila A.", amount: "+ €10,00", bgColor: "bg-tertiary/20", textColor: "text-tertiary" },
  { initials: "SB", name: "Sophie B.", amount: "+ €1,00", bgColor: "bg-secondary/20", textColor: "text-secondary" },
  { initials: "TH", name: "Tim H.", amount: "+ €1,00", bgColor: "bg-surface-variant", textColor: "text-on-surface-variant" },
  { initials: "LV", name: "Lars V.", amount: "+ €1,00", bgColor: "bg-primary/20", textColor: "text-primary" },
  { initials: "NK", name: "Nina K.", amount: "+ €10,00", bgColor: "bg-tertiary/20", textColor: "text-tertiary" },
  { initials: "RW", name: "Ruben W.", amount: "+ €1,00", bgColor: "bg-secondary/20", textColor: "text-secondary" },
  { initials: "AJ", name: "Anna J.", amount: "+ €1,00", bgColor: "bg-primary/20", textColor: "text-primary" },
  { initials: "DM", name: "Daan M.", amount: "+ €10,00", bgColor: "bg-tertiary/20", textColor: "text-tertiary" },
  { initials: "EH", name: "Eva H.", amount: "+ €1,00", bgColor: "bg-secondary/20", textColor: "text-secondary" },
];

const timeLabels = ["Nu", "1 min geleden", "3 min geleden", "5 min geleden", "8 min geleden"];

const stats = [
  { label: "Actieve Spelers", value: "12.450+", icon: "group" },
  { label: "Taken Vandaag", value: "3.820", icon: "task_alt" },
  { label: "Gem. Reactietijd", value: "4,2s", icon: "timer" },
];

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const frames = 60;
    const increment = target / frames;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / frames);
    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("nl-NL")}
      {suffix}
    </span>
  );
}

function LiveFeed() {
  const [offset, setOffset] = useState(0);
  const visible = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % allFeedEntries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getItems = useCallback(() => {
    const items = [];
    for (let i = 0; i < visible; i++) {
      const idx = (offset + i) % allFeedEntries.length;
      items.push({ ...allFeedEntries[idx], time: timeLabels[i], key: `${offset}-${i}` });
    }
    return items;
  }, [offset]);

  const items = getItems();

  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {items.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: i >= 4 ? 0.4 : 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`flex items-center justify-between p-3 sm:p-4 bg-background/50 rounded-xl border border-outline-variant/10 ${i >= 4 ? "opacity-40" : ""}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.bgColor} flex items-center justify-center ${item.textColor} text-xs font-bold shrink-0`}
              >
                {item.initials}
              </div>
              <div className="min-w-0">
                <span className="text-sm font-medium block truncate">{item.name}</span>
                <span className="text-[10px] sm:text-xs text-on-surface-variant">{item.time}</span>
              </div>
            </div>
            <span className="text-secondary font-bold text-sm whitespace-nowrap ml-3">
              {item.amount}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function Rewards() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden" id="beloningen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Beloningen &amp; Social Proof
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto">
            Duizenden spelers verdienen dagelijks. Bekijk de resultaten.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

          {/* Main Reward Card — spans 2 cols on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 bg-gradient-to-br from-surface-container-highest to-background p-6 sm:p-10 rounded-xl border border-outline-variant/20 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-700">
              <span
                className="material-symbols-outlined text-[120px] sm:text-[200px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                monetization_on
              </span>
            </div>
            <div>
              <span className="bg-secondary/10 text-secondary px-3 sm:px-4 py-1 rounded-full font-label font-bold text-[10px] sm:text-xs uppercase tracking-tighter mb-4 sm:mb-6 inline-block">
                Directe Uitbetaling
              </span>
              <h3 className="font-headline text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Verdien zonder limiet.
              </h3>
              <p className="text-on-surface-variant text-base sm:text-xl max-w-md">
                Elke taak die je correct identificeert levert je geld op. Er is
                geen limiet aan het aantal taken per dag.
              </p>
            </div>
            <div className="flex items-center gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div>
                <div className="text-secondary text-3xl sm:text-5xl font-headline font-bold">
                  €1,-
                </div>
                <div className="text-on-surface-variant font-label text-[10px] sm:text-sm uppercase font-bold tracking-widest mt-1 sm:mt-2">
                  Per Taak
                </div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-outline-variant/30" />
              <div>
                <div className="text-primary text-3xl sm:text-5xl font-headline font-bold">
                  €10,-
                </div>
                <div className="text-on-surface-variant font-label text-[10px] sm:text-sm uppercase font-bold tracking-widest mt-1 sm:mt-2">
                  Per Referral
                </div>
              </div>
            </div>
          </motion.div>

          {/* Total Paid Card */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container-high p-6 sm:p-8 rounded-xl border border-outline-variant/20 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-on-surface-variant font-label text-[10px] sm:text-xs uppercase font-bold tracking-widest mb-3 sm:mb-4">
                Totaal Uitbetaald
              </div>
              <div className="text-3xl sm:text-5xl font-headline font-bold text-white mb-2">
                <AnimatedCounter target={42850} prefix="€" suffix="+" />
              </div>
              <div className="text-secondary-dim font-bold flex items-center justify-center gap-2 text-sm">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                En groeiend
              </div>
            </div>
          </motion.div>

          {/* Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 bg-surface-container-high p-6 sm:p-8 rounded-xl border border-outline-variant/20 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="text-on-surface-variant font-label text-[10px] sm:text-xs uppercase font-bold tracking-widest">
                Live Feed
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-secondary text-[10px] sm:text-xs font-label font-bold uppercase">Live</span>
              </div>
            </div>
            <LiveFeed />
          </motion.div>

          {/* Platform Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-surface-container-high p-6 sm:p-8 rounded-xl border border-outline-variant/20"
          >
            <div className="text-on-surface-variant font-label text-[10px] sm:text-xs uppercase font-bold tracking-widest mb-6 sm:mb-8">
              Platform Stats
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">{stat.icon}</span>
                  </div>
                  <div>
                    <div className="font-headline font-bold text-xl sm:text-2xl text-white leading-tight">{stat.value}</div>
                    <div className="text-on-surface-variant text-[10px] sm:text-xs font-label uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 text-center"
        >
          <a
            href={TELEGRAM_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-dim to-primary text-on-primary-fixed font-label font-bold px-8 py-4 rounded-xl text-base active:scale-[0.97] transition-all shadow-[0_0_20px_rgba(211,148,255,0.3)] min-h-[52px]"
          >
            <span className="material-symbols-outlined text-xl">send</span>
            Begin nu met verdienen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
