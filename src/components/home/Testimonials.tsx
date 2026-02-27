"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: "1",
    quote:
      "Switching to Mondo Wood was one of the best decisions for our family. We feel good knowing we're reducing plastic and supporting real people. The quality is exceptional.",
    author: "Sarah Chen",
    role: "Home cook & parent",
  },
  {
    id: "2",
    quote:
      "Finally, wooden utensils that look as good as they perform. The olive wood spoon set is the centerpiece of our kitchen—and the story behind it makes every meal meaningful.",
    author: "James Okonkwo",
    role: "Chef & restaurateur",
  },
  {
    id: "3",
    quote:
      "I wanted to go plastic-free but didn't know where to start. Mondo made it easy. Beautiful products, clear mission, and I can taste the difference in how we cook.",
    author: "Elena Vasquez",
    role: "Sustainability advocate",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-cream-100 dark:bg-charcoal-900 overflow-hidden">
      <div className="container-wide">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold-500 dark:text-gold-400 font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 dark:text-cream-100">
            Loved by cooks who care
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-cream-200/60 dark:bg-charcoal-800 border border-charcoal-100 dark:border-charcoal-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-sm sm:text-base text-charcoal-700 dark:text-cream-200 leading-relaxed italic">
                "{t.quote}"
              </p>
              <footer className="mt-6">
                <p className="font-medium text-charcoal-800 dark:text-cream-100">
                  {t.author}
                </p>
                {t.role && (
                  <p className="text-sm text-charcoal-500 dark:text-cream-400">{t.role}</p>
                )}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
