"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  end,
  duration = 2,
  inView,
}: {
  end: number;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const animate = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = (timestamp - startTime.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return <span>{count}</span>;
}

const stats = [
  { value: 12, suffix: "K+", label: "Households plastic-free" },
  { value: 8, suffix: "", label: "Partner communities" },
  { value: 45, suffix: "%", label: "Artisan income increase" },
  { value: 100, suffix: "%", label: "Wood from certified sources" },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-charcoal-800 dark:bg-charcoal-950" ref={ref}>
      <div className="container-wide px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-display text-3xl sm:text-4xl md:text-5xl text-gold-400">
                <AnimatedCounter end={stat.value} inView={inView} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-cream-300 text-xs sm:text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
