"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const metrics = [
  { value: "12K+", label: "Households cooking plastic-free" },
  { value: "8", label: "Partner communities" },
  { value: "45%", label: "Average artisan income increase" },
  { value: "100%", label: "Wood from certified or verified sources" },
];

const storyBlocks = [
  {
    title: "Before",
    body: "Displaced families often lose not only their homes but their means to earn. Skills that once supported entire communities go unused. Plastic continues to dominate kitchens—and with it, avoidable health risks.",
  },
  {
    title: "After",
    body: "Through Mondo Wood, artisan workshops receive fair orders and training. Wood is sourced responsibly; every piece is made with dignity. Families earn again. Kitchens become plastic-free, and health and hope both grow.",
  },
];

export default function ImpactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-x-hidden"
    >
      {/* Hero */}
      <section className="section-padding bg-cream-200/40 dark:bg-charcoal-800 overflow-hidden">
        <div className="container-narrow text-center">
          <p className="text-gold-500 dark:text-gold-400 font-medium tracking-widest uppercase text-sm mb-4">
            Impact
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 dark:text-cream-100">
            How your purchase supports communities
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-charcoal-600 dark:text-cream-400 max-w-2xl mx-auto">
            Every Mondo Wood product connects your kitchen to a global mission: less
            plastic, more dignity, and real opportunity for displaced artisans.
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section className="section-padding bg-cream-100 dark:bg-charcoal-900 overflow-hidden">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {storyBlocks.map((block, i) => (
              <motion.div
                key={block.title}
                className="p-6 sm:p-8 md:p-10 rounded-2xl bg-cream-200/60 dark:bg-charcoal-800 border border-charcoal-100 dark:border-charcoal-700"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2 className="font-display text-lg sm:text-xl text-gold-600 dark:text-gold-400 mb-3 sm:mb-4">
                  {block.title}
                </h2>
                <p className="text-sm sm:text-base text-charcoal-600 dark:text-cream-400 leading-relaxed">
                  {block.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-charcoal-800 dark:bg-charcoal-950 overflow-hidden">
        <div className="container-narrow">
          <motion.blockquote
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-cream-100 italic">
              "Wood gave us a way back. Now we're building futures, one piece at a time."
            </p>
            <cite className="mt-6 block text-gold-400 not-italic">
              — Partner artisan, Mondo Wood
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* How purchases support */}
      <section className="section-padding bg-cream-100 dark:bg-charcoal-900 overflow-hidden">
        <div className="container-wide">
          <motion.h2
            className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal-800 dark:text-cream-100 text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How your purchase supports communities
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              "Fair wages paid directly to artisan workshops",
              "Skills training and capacity building programs",
              "Sustainable wood sourcing and reforestation initiatives",
              "Safe working conditions and dignified employment",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-cream-200/60 dark:bg-charcoal-800 border border-charcoal-100 dark:border-charcoal-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold-300/30 dark:bg-gold-600/30 flex items-center justify-center flex-shrink-0 text-gold-600 dark:text-gold-400 font-display text-base sm:text-lg">
                  {i + 1}
                </span>
                <p className="text-charcoal-600 dark:text-cream-400 text-xs sm:text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="section-padding bg-charcoal-800 dark:bg-charcoal-950 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-display text-3xl sm:text-4xl md:text-5xl text-gold-400">{m.value}</p>
                <p className="mt-2 text-cream-300 text-xs sm:text-sm">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-200/40 dark:bg-charcoal-800 overflow-hidden">
        <div className="container-narrow text-center">
          <motion.p
            className="text-charcoal-600 dark:text-cream-400 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to be part of the impact?
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button href="/products" size="lg">
              Shop Now
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
