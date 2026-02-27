"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "No plastic, no risk",
    description:
      "Plastic utensils and boards can leach chemicals into food, especially when heated. Wood stays inert and safe—no microplastics, no endocrine disruptors.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Naturally antibacterial",
    description:
      "Wood has natural antimicrobial properties. Studies show wooden cutting boards can be safer than plastic when properly maintained—and they don't harbor bacteria in knife scars.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "Kind to knives & cookware",
    description:
      "Wood is gentle on blade edges and non-stick surfaces. No scratching, no chipping—just smooth, lasting performance in a sustainable material.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    ),
  },
];

export function WhyWood() {
  return (
    <section className="section-padding bg-cream-100 dark:bg-charcoal-900 overflow-hidden">
      <div className="container-wide">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-gold-500 dark:text-gold-400 font-medium tracking-widest uppercase text-sm mb-4">
            Why Wood Over Plastic
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 dark:text-cream-100">
            Healthier for you. Better for the planet.
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal-600 dark:text-cream-400">
            Every choice to use wood instead of plastic is a step toward a safer kitchen
            and a cleaner future.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative p-6 sm:p-8 rounded-2xl bg-cream-200/60 dark:bg-charcoal-800 border border-charcoal-100 dark:border-charcoal-700 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-300/20 dark:bg-gold-600/20 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-lg sm:text-xl text-charcoal-800 dark:text-cream-100 mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-600 dark:text-cream-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
