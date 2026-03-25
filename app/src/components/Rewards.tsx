"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const TELEGRAM_BOT = "https://t.me/NepOfNietBot";

const liveFeed = [
  { initials: "JD", name: "Jesper D.", amount: "+ €1,00", time: "2 min geleden", bgColor: "bg-primary/20", textColor: "text-primary" },
  { initials: "MA", name: "Mila A.", amount: "+ €10,00", time: "5 min geleden", bgColor: "bg-tertiary/20", textColor: "text-tertiary" },
  { initials: "SB", name: "Sophie B.", amount: "+ €1,00", time: "8 min geleden", bgColor: "bg-secondary/20", textColor: "text-secondary" },
  { initials: "TH", name: "Tim H.", amount: "+ €1,00", time: "12 min geleden", bgColor: "bg-surface-variant", textColor: "text-on-surface-variant" },
  { initials: "LV", name: "Lars V.", amount: "+ €1,00", time: "15 min geleden", bgColor: "bg-primary/20", textColor: "text-primary" },
];

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
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
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
            <div className="space-y-3">
              {liveFeed.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: i >= 4 ? 0.4 : 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className={`flex items-center justify-between p-3 bg-background/50 rounded-xl border border-outline-variant/10 ${i >= 4 ? "opacity-40" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ${item.bgColor} flex items-center justify-center ${item.textColor} text-xs font-bold shrink-0`}
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
            </div>
          </motion.div>

          {/* Mini Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-surface-container-high p-6 sm:p-8 rounded-xl border border-outline-variant/20 flex flex-col justify-between"
          >
            <div className="text-on-surface-variant font-label text-[10px] sm:text-xs uppercase font-bold tracking-widest mb-4 sm:mb-6">
              Platform Stats
            </div>
            <div className="space-y-5 sm:space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                  </div>
                  <div>
                    <div className="font-headline font-bold text-lg sm:text-xl text-white">{stat.value}</div>
                    <div className="text-on-surface-variant text-[10px] sm:text-xs font-label uppercase tracking-wider">{stat.label}</div>
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
