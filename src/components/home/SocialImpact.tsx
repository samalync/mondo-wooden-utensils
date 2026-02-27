"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function SocialImpact() {
  return (
    <section className="section-padding bg-charcoal-800 dark:bg-charcoal-950 text-cream-100 overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4">
              Social Impact
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream-100 leading-tight">
              Transforming wooden art into opportunity for displaced communities.
            </h2>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-cream-300 leading-relaxed">
              We partner with artisan workshops in regions affected by displacement. Every
              spoon, board, and set we sell creates fair-wage work, skills training, and
              dignity. You're not just buying kitchen tools—you're investing in people
              rebuilding their lives through craft.
            </p>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {[
                "Fair wages and safe working conditions",
                "Skills training and capacity building",
                "Sustainable wood sourcing and reforestation",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-cream-200">
                  <span className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 sm:mt-10">
              <Button href="/impact" variant="secondary" size="lg">
                See Our Impact
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] min-h-[320px] bg-charcoal-700 max-w-full"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/4.jpg"
              alt="Artisan hands crafting wooden utensils"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
              <p className="font-display text-cream-100 text-base sm:text-lg italic">
                "Wood gave us a way back. Now we're building futures, one piece at a time."
              </p>
              <p className="mt-2 text-gold-400 text-sm">— Partner artisan, Mondo Wood</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
