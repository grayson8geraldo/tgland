"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const liveFeed = [
  { initials: "JD", name: "Jesper D.", amount: "+ €1,00", color: "primary" },
  { initials: "MA", name: "Mila A.", amount: "+ €10,00", color: "tertiary" },
  { initials: "TH", name: "Tim H.", amount: "+ €1,00", color: "surface-variant", faded: true },
];

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
        setHasAnimated(true);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, hasAnimated]);

  return (
    <span>
      {prefix}
      {count.toLocaleString("nl-NL")}
      {suffix}
    </span>
  );
}

export default function Rewards() {
  return (
    <section className="py-24 overflow-hidden" id="beloningen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
        >
          Beloningen &amp; Social Proof
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Main Reward Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-surface-container-highest to-background p-10 rounded-xl border border-outline-variant/20 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-700">
              <span
                className="material-symbols-outlined text-[200px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                monetization_on
              </span>
            </div>
            <div>
              <span className="bg-secondary/10 text-secondary px-4 py-1 rounded-full font-label font-bold text-xs uppercase tracking-tighter mb-6 inline-block">
                Directe Uitbetaling
              </span>
              <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">
                Verdien zonder limiet.
              </h3>
              <p className="text-on-surface-variant text-xl max-w-md">
                Elke taak die je correct identificeert levert je geld op. Er is
                geen limiet aan het aantal taken per dag.
              </p>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="text-secondary text-5xl font-headline font-bold">
                  €1,-
                </div>
                <div className="text-on-surface-variant font-label text-sm uppercase font-bold tracking-widest mt-2">
                  Per Taak
                </div>
              </div>
              <div className="h-12 w-px bg-outline-variant/30" />
              <div>
                <div className="text-primary text-5xl font-headline font-bold">
                  €10,-
                </div>
                <div className="text-on-surface-variant font-label text-sm uppercase font-bold tracking-widest mt-2">
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
            className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/20 flex flex-col items-center justify-center text-center group"
          >
            <div className="text-on-surface-variant font-label text-xs uppercase font-bold tracking-widest mb-4">
              Totaal Uitbetaald
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-5xl font-headline font-bold text-white mb-2"
            >
              <AnimatedCounter target={42850} prefix="€" suffix="+" />
            </motion.div>
            <div className="text-secondary-dim font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                trending_up
              </span>
              En groeiend
            </div>
          </motion.div>

          {/* Recent Activity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/20 overflow-hidden"
          >
            <div className="text-on-surface-variant font-label text-xs uppercase font-bold tracking-widest mb-6">
              Live Feed
            </div>
            <div className="space-y-4">
              {liveFeed.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: item.faded ? 0.5 : 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                  className={`flex items-center justify-between p-3 bg-background/50 rounded-xl border border-outline-variant/10 ${
                    item.faded ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full bg-${item.color}/20 flex items-center justify-center text-${item.color} text-xs font-bold`}
                    >
                      {item.initials}
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-secondary font-bold text-sm">
                    {item.amount}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
