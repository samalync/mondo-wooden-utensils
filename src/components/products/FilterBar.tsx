"use client";

import { motion } from "framer-motion";

export type CategoryId = "all" | "spoons" | "cutting-boards" | "sets" | "utensils" | "accessories";

interface FilterBarProps {
  active: CategoryId;
  onSelect: (id: CategoryId) => void;
}

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "spoons", label: "Spoons" },
  { id: "cutting-boards", label: "Cutting Boards" },
  { id: "sets", label: "Sets" },
  { id: "utensils", label: "Utensils" },
  { id: "accessories", label: "Accessories" },
];

export function FilterBar({ active, onSelect }: FilterBarProps) {
  return (
    <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          type="button"
          onClick={() => onSelect(cat.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            active === cat.id
              ? "bg-gold-300 text-charcoal-900 dark:bg-gold-400 dark:text-charcoal-900"
              : "bg-cream-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-cream-400 hover:bg-cream-300 dark:hover:bg-charcoal-700"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {cat.label}
        </motion.button>
      ))}
    </nav>
  );
}
