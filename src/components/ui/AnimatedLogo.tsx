"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <motion.div
        className="relative h-8 w-8 md:h-9 md:w-9 flex-shrink-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="/logo.png"
          alt="Mondo Wooden Utensils"
          fill
          className="object-contain"
          sizes="48px"
          priority
        />
      </motion.div>
      <span className="flex items-baseline gap-1.5">
        <motion.span
          className="font-display text-lg md:text-xl font-semibold text-charcoal-800"
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          Mondo
        </motion.span>
        <motion.span
          className="font-display text-lg md:text-xl font-light text-gold-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          Wooden
        </motion.span>
        <motion.span
          className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-500 self-end mb-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          Utensils
        </motion.span>
      </span>
    </Link>
  );
}
