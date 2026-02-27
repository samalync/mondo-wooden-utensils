"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-cream-200 to-gold-100/20 dark:from-charcoal-900 dark:to-charcoal-950 overflow-hidden">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 dark:text-cream-100">
            Ready to cook without plastic?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-charcoal-600 dark:text-cream-400 max-w-xl mx-auto px-4">
            Join thousands of households who've made the switch. Every purchase supports
            health, sustainability, and displaced communities.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button href="/products" size="lg">
              Shop the Collection
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
