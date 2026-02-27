"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { getProductFallbackImage } from "@/lib/products";
import { getWhatsAppContactUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gold-500 shrink-0" viewBox="0 0 16 16" fill="currentColor">
      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
    </svg>
  );
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  // Reset state whenever the product changes
  useEffect(() => {
    setQty(1);
    setAdded(false);
  }, [product?.id]);

  // Close on Escape key
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!product) return null;

  const whatsappUrl = getWhatsAppContactUrl(
    [
      "Hi! I'd like to order from Mondo Wooden Utensils:",
      "",
      `• ${product.name} × ${qty} — $${(product.price * qty).toFixed(2)}`,
      "",
      "Please let me know the next steps. Thank you!",
    ].join("\n")
  );

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);

    // Mobile UX: close product details after adding.
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches) {
      onClose();
    }
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-charcoal-900/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full sm:max-w-5xl max-h-[96dvh] sm:max-h-[92vh] overflow-hidden rounded-t-3xl sm:rounded-2xl bg-cream-50 dark:bg-charcoal-900 shadow-2xl flex flex-col"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag handle (mobile) */}
          <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
            <div className="w-10 h-1 rounded-full bg-charcoal-300 dark:bg-charcoal-600" />
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-charcoal-700/80 backdrop-blur-sm flex items-center justify-center text-charcoal-600 dark:text-cream-300 hover:bg-white dark:hover:bg-charcoal-600 transition-colors shadow-sm"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col md:grid md:grid-cols-[1fr_1.1fr] overflow-y-auto md:overflow-hidden flex-1">
            {/* ── Image panel ── */}
            <div className="relative md:h-full aspect-[4/3] md:aspect-auto bg-charcoal-100 dark:bg-charcoal-800 shrink-0 md:shrink group">
              {/* Clickable image overlay */}
              <button
                type="button"
                onClick={() => setFullscreen(true)}
                className="absolute inset-0 z-10 cursor-zoom-in hover:bg-black/5 transition-colors"
                aria-label="View fullscreen"
              >
                <span className="sr-only">View image fullscreen</span>
              </button>
              <ProductImage
                src={product.image}
                fallbackSrc={getProductFallbackImage(product.slug)}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Category badge on image */}
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/80 dark:bg-charcoal-900/80 backdrop-blur-sm text-xs font-semibold uppercase tracking-widest text-charcoal-700 dark:text-cream-200 z-20 pointer-events-none">
                {product.category.replace(/-/g, " ")}
              </span>
              {/* Fullscreen button */}
              <button
                type="button"
                onClick={() => setFullscreen(true)}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/80 dark:bg-charcoal-900/80 backdrop-blur-sm flex items-center justify-center text-charcoal-600 dark:text-cream-300 hover:bg-white dark:hover:bg-charcoal-800 transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="View fullscreen"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>

            {/* ── Details panel ── */}
            <div className="flex flex-col p-6 md:p-8 md:overflow-y-auto gap-4">
              {/* Name & price */}
              <div className="flex flex-col gap-2 pr-12">
                <h2 className="font-display text-2xl md:text-3xl text-charcoal-900 dark:text-cream-50 leading-tight">
                  {product.name}
                </h2>
                <span className="font-display text-2xl text-gold-600 dark:text-gold-400">
                  ${product.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-charcoal-600 dark:text-cream-400 leading-relaxed text-sm md:text-base">
                {product.longDescription || product.description}
              </p>

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-500 dark:text-cream-500 mb-2">
                    Why you'll love it
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-charcoal-700 dark:text-cream-300 text-sm">
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Craft story */}
              {product.craftStory && (
                <div className="p-4 rounded-xl bg-gold-50 dark:bg-charcoal-800 border-l-4 border-gold-400">
                  <p className="text-sm text-charcoal-700 dark:text-cream-300 italic leading-relaxed">
                    {product.craftStory}
                  </p>
                </div>
              )}

              {/* Spacer to push CTA to bottom on desktop */}
              <div className="hidden md:flex flex-1" />

              {/* Divider */}
              <div className="h-px bg-charcoal-100 dark:bg-charcoal-700" />

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Qty stepper */}
                <div className="flex items-center rounded-lg border border-charcoal-200 dark:border-charcoal-600 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-10 flex items-center justify-center text-charcoal-600 dark:text-cream-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-700 transition-colors text-lg font-light"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-9 h-10 flex items-center justify-center font-medium text-charcoal-800 dark:text-cream-100 text-sm border-x border-charcoal-200 dark:border-charcoal-600">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-9 h-10 flex items-center justify-center text-charcoal-600 dark:text-cream-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-700 transition-colors text-lg font-light"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <Button
                  size="lg"
                  className="flex-1 min-w-0"
                  onClick={handleAdd}
                >
                  {added ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckIcon /> Added!
                    </span>
                  ) : (
                    `Add ${qty > 1 ? `${qty} ` : ""}to Cart`
                  )}
                </Button>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                href={whatsappUrl}
                external
                onClick={onClose}
              >
                Order via WhatsApp
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 text-xs text-charcoal-500 dark:text-cream-500">
                <span className="flex items-center gap-1">Sustainably sourced</span>
                <span className="flex items-center gap-1">Food-safe finish</span>
                <span className="flex items-center gap-1">Ships from Rwanda</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence mode="wait">
        {fullscreen && (
          <motion.div
            key="fullscreen-viewer"
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreen(false)}
          >
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ProductImage
                src={product.image}
                fallbackSrc={getProductFallbackImage(product.slug)}
                alt={product.name}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              Click anywhere to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
