"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { getProductFallbackImage } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import { getWhatsAppOrderUrl, hasWhatsAppOrderEnabled } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const whatsappUrl = getWhatsAppOrderUrl(items, totalPrice);
  const showWhatsApp = hasWhatsAppOrderEnabled();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-charcoal-900/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-100 dark:bg-charcoal-900 border-l border-charcoal-200 dark:border-charcoal-700 z-50 flex flex-col shadow-premium-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-charcoal-100 dark:border-charcoal-700">
              <h2 className="font-display text-xl text-charcoal-800 dark:text-cream-100">
                Your Cart
              </h2>
              <button
                type="button"
                onClick={closeCart}
                className="p-2 rounded-lg hover:bg-charcoal-100 dark:hover:bg-charcoal-700 text-charcoal-600 dark:text-cream-300"
                aria-label="Close cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-charcoal-500 dark:text-cream-400 text-center py-12">
                  Your cart is empty. Add something beautiful.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 p-3 rounded-lg bg-cream-200/50 dark:bg-charcoal-800"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-charcoal-100 dark:bg-charcoal-700 flex-shrink-0">
                        <ProductImage
                          src={item.image}
                          fallbackSrc={getProductFallbackImage(item.slug)}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-charcoal-800 dark:text-cream-100 truncate">
                          {item.name}
                        </p>
                        <p className="text-sm text-gold-600 dark:text-gold-400">
                          ${item.price} × {item.quantity}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded border border-charcoal-300 dark:border-charcoal-600 flex items-center justify-center text-sm hover:bg-charcoal-100 dark:hover:bg-charcoal-700"
                          >
                            −
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded border border-charcoal-300 dark:border-charcoal-600 flex items-center justify-center text-sm hover:bg-charcoal-100 dark:hover:bg-charcoal-700"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="ml-2 text-xs text-charcoal-500 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="px-6 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-charcoal-100 dark:border-charcoal-700 space-y-4">
              {items.length > 0 && (
                <div className="flex justify-between text-lg font-medium">
                  <span className="text-charcoal-600 dark:text-cream-300">Subtotal</span>
                  <span className="text-charcoal-800 dark:text-cream-100">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              )}

              {showWhatsApp && whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                    onClick={closeCart}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Order via WhatsApp
                </a>
              )}

              {showWhatsApp && whatsappUrl && (
                <div className="relative flex items-center gap-3">
                  <div className="flex-1 h-px bg-charcoal-200 dark:bg-charcoal-600" />
                  <span className="text-xs text-charcoal-400 dark:text-cream-500 shrink-0">or</span>
                  <div className="flex-1 h-px bg-charcoal-200 dark:bg-charcoal-600" />
                </div>
              )}

              <Button
                href="/contact"
                className="w-full"
                size="lg"
                variant={showWhatsApp && whatsappUrl ? "outline" : "primary"}
                onClick={closeCart}
              >
                Request Quote / Contact
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
