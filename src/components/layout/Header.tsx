"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "Our Mission" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-cream-100/90 dark:bg-charcoal-900/90 backdrop-blur-md border-b border-charcoal-100 dark:border-charcoal-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-wide px-4 sm:px-6 md:px-12 lg:px-16 py-3 md:py-4 flex items-center justify-between">
        <AnimatedLogo />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link
                href={link.href}
                className="text-charcoal-600 dark:text-cream-300 hover:text-gold-500 dark:hover:text-gold-300 font-medium transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            type="button"
            onClick={openCart}
            className="relative p-2 rounded-lg text-charcoal-600 dark:text-cream-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-700 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Open cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold-400 text-charcoal-900 text-xs font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </motion.button>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-charcoal-600 dark:text-cream-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-charcoal-100 dark:border-charcoal-700 bg-cream-100 dark:bg-charcoal-900"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-charcoal-600 dark:text-cream-300 hover:text-gold-500 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
