"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    "bg-gold-300 text-charcoal-900 hover:bg-gold-400 shadow-premium hover:shadow-premium-lg border border-gold-400/30",
  secondary:
    "bg-charcoal-800 text-cream-100 hover:bg-charcoal-700 dark:bg-cream-100 dark:text-charcoal-800 dark:hover:bg-cream-200",
  outline:
    "border-2 border-gold-300 text-gold-600 dark:text-gold-200 hover:bg-gold-300/10",
  ghost:
    "text-charcoal-700 dark:text-cream-200 hover:bg-charcoal-100 dark:hover:bg-charcoal-700",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 dark:focus:ring-offset-charcoal-900";

  const combined = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combined}
          onClick={onClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} onClick={onClick}>
        <motion.span
          className={combined}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
