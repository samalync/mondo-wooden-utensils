"use client";

import { motion } from "framer-motion";
import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="section-padding overflow-x-hidden"
    >
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-gold-500 dark:text-gold-400 font-medium tracking-widest uppercase text-sm mb-4">
            Collection
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 dark:text-cream-100">
            Wooden kitchen, plastic-free
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal-600 dark:text-cream-400">
            Every piece is crafted for health, durability, and impact. Click any product
            for full details and add to cart.
          </p>
        </div>
        <ProductGrid />
      </div>
    </motion.div>
  );
}
