"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { getProductFallbackImage } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

interface ProductCardProps {
  product: Product;
  index: number;
  onOpenDetail: (product: Product) => void;
}

export function ProductCard({ product, index, onOpenDetail }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.article
      className="group rounded-2xl overflow-hidden bg-cream-100 dark:bg-charcoal-800 border border-charcoal-100 dark:border-charcoal-700 shadow-card hover:shadow-card-hover transition-all duration-300"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        type="button"
        className="block w-full text-left overflow-hidden"
        onClick={() => onOpenDetail(product)}
      >
        <div className="relative aspect-[4/3] bg-charcoal-100 dark:bg-charcoal-700">
          <ProductImage
            src={product.image}
            fallbackSrc={getProductFallbackImage(product.slug)}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </button>
      <div className="p-4 sm:p-6">
        <p className="text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 mb-1">
          {product.category.replace("-", " ")}
        </p>
        <button
          type="button"
          onClick={() => onOpenDetail(product)}
          className="text-left block"
        >
          <h3 className="font-display text-lg sm:text-xl text-charcoal-800 dark:text-cream-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
            {product.name}
          </h3>
        </button>
        <p className="mt-2 text-charcoal-600 dark:text-cream-400 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <span className="font-display text-xl text-gold-600 dark:text-gold-400">
            ${product.price}
          </span>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button size="sm" variant="ghost" onClick={() => onOpenDetail(product)}>
              Details
            </Button>
            <Button size="sm" onClick={() => addItem(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
