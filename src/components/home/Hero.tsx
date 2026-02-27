"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/2.jpg"
        alt=""
        fill
        className="object-cover object-center scale-105 blur-sm"
        priority
        sizes="100vw"
        aria-hidden
      />
      {/* Warm cream overlay — strong enough to keep text fully legible */}
      <div
        className="absolute inset-0 bg-cream-50/[0.72]"
        aria-hidden
      />
      {/* Subtle gold glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-300/10 blur-3xl"
        aria-hidden
      />

      <div className="container-wide section-padding relative z-10 text-center">
        <motion.p
          className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Wooden Kitchen · Plastic-Free Living
        </motion.p>
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal-800 max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transform your kitchen.
          <br />
          <span className="text-gold-500">Transform lives.</span>
        </motion.h1>
        <motion.p
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-charcoal-600 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Based in Rwanda. A lifesaving initiative committed to reducing cancer-related deaths caused by plastic.
          We turn wooden art into opportunity for displaced communities—one spoon, one board,
          one choice at a time.
        </motion.p>
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button href="/products" size="lg">
            Shop Now
          </Button>
          <Button href="/about" variant="outline" size="lg">
            Our Mission
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-gold-400/50 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
