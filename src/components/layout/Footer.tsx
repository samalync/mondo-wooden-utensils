"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = {
  Shop: [
    { label: "All Products", href: "/products" },
    { label: "Spoons", href: "/products?category=spoons" },
    { label: "Cutting Boards", href: "/products?category=cutting-boards" },
    { label: "Sets", href: "/products?category=sets" },
  ],
  Company: [
    { label: "Our Mission", href: "/about" },
    { label: "Impact", href: "/impact" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal-800 dark:bg-charcoal-950 text-cream-200 overflow-hidden">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center gap-3">
                <span className="relative block h-10 w-10 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Mondo Wooden Utensils"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </span>
                <span className="font-display text-xl sm:text-2xl font-semibold text-cream-100">
                  Mondo Wooden <span className="text-gold-400">Utensils</span>
                </span>
              </Link>
              <p className="text-cream-400 text-xs sm:text-sm mt-2 max-w-xs">
                Based in Rwanda. Lifesaving initiative committed to reducing cancer-related deaths caused by plastic.
                Transforming wooden art into opportunity for displaced communities.
              </p>
            </motion.div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mondowoodenutensils/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream-400/30 flex items-center justify-center text-cream-400 hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Follow Mondo Wooden Utensils on Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links], groupIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.05 }}
            >
              <h3 className="font-display font-medium text-cream-100 mb-3 sm:mb-4 text-sm sm:text-base">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={`${title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-cream-400 hover:text-gold-400 transition-colors text-xs sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-charcoal-600 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
        >
          <p className="text-cream-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mondo Wooden Utensils. All rights reserved.
          </p>
          <p className="text-cream-600 text-[10px] sm:text-xs text-center sm:text-right">
            Crafted with purpose. No plastic. Every purchase supports displaced communities.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
