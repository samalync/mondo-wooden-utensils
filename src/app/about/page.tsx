"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Stats } from "@/components/about/Stats";

export default function AboutPage() {
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
            Our Mission
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 dark:text-cream-100">
            A lifesaving initiative. A global community.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-charcoal-600 dark:text-cream-400 max-w-2xl mx-auto">
            We exist to reduce cancer-related deaths caused by plastic—and to turn wooden
            art into real opportunity for displaced communities. This is our story.
          </p>
        </div>
      </section>

      {/* The plastic problem */}
      <section className="section-padding bg-cream-100 dark:bg-charcoal-900 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal-800 dark:text-cream-100">
                The plastic problem isn't just environmental.
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal-600 dark:text-cream-400 leading-relaxed">
                Research continues to link plastic exposure—especially in food contact
                materials—to health risks we can no longer ignore. We're not here to
                spread fear; we're here to offer a better choice. Wooden kitchen tools
                have been used safely for millennia. They don't leach chemicals, don't
                create microplastics, and when sourced responsibly, they support both
                health and livelihoods.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-charcoal-600 dark:text-cream-400 leading-relaxed">
                Our mission is simple: make it easy and beautiful to choose wood over
                plastic in the kitchen, and ensure every purchase supports the people who
                craft these pieces.
              </p>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-200 dark:bg-charcoal-700 max-w-full"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <Image
                src="/1.jpg"
                alt="Wooden kitchen utensils on natural linen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="section-padding bg-cream-200/40 dark:bg-charcoal-800 overflow-hidden">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal-800 dark:text-cream-100">
              Craftsmanship with purpose
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal-600 dark:text-cream-400 max-w-2xl mx-auto">
              Every spoon and board is made by artisans who take pride in their work. We
              use only wood from certified or verified sustainable sources, and we never
              compromise on quality or dignity in our supply chain.
            </p>
          </motion.div>
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[200px] bg-charcoal-200 dark:bg-charcoal-700 max-w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Image
              src="/2.jpg"
              alt="Handcrafted wooden cutting boards and kitchen tools"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
            />
            <div className="absolute inset-0 bg-charcoal-900/30 flex items-center justify-center z-10">
              <p className="font-display text-cream-100 text-lg sm:text-xl md:text-2xl text-center px-4 sm:px-6">
                "We don't just make utensils. We make a way forward."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Displaced communities */}
      <section className="section-padding bg-cream-100 dark:bg-charcoal-900 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-200 dark:bg-charcoal-700 order-2 lg:order-1 max-w-full"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <Image
                src="/3.jpg"
                alt="Wooden utensil sets and kitchen tools"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal-800 dark:text-cream-100">
                Impact on displaced communities
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal-600 dark:text-cream-400 leading-relaxed">
                Displacement strips people of more than a home—it often takes livelihoods
                and hope. We partner with workshops in regions where skilled artisans have
                been uprooted. By creating demand for their craft, we help restore income,
                train the next generation, and build resilience. Your purchase doesn't
                just replace plastic; it pays fair wages and funds training programs that
                last.
              </p>
              <div className="mt-6 sm:mt-8">
                <Button href="/impact" size="lg">
                  See Our Impact
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Vision */}
      <section className="section-padding bg-charcoal-800 dark:bg-charcoal-950 text-cream-100 overflow-hidden">
        <div className="container-narrow text-center">
          <motion.h2
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our vision for the future
          </motion.h2>
          <motion.p
            className="mt-6 sm:mt-8 text-base sm:text-lg text-cream-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We're building a world where every kitchen can be plastic-free without
            sacrificing beauty or performance—and where every wooden piece sold extends
            opportunity to the people who made it. Join us.
          </motion.p>
          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/products" variant="secondary" size="lg">
              Shop the Collection
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg border-2 border-gold-400 text-gold-400 hover:bg-gold-400/10 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
