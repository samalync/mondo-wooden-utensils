"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { products } from "@/lib/products";
import { FilterBar, type CategoryId } from "./FilterBar";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import type { Product } from "@/types";

function getCategoryFromSearch(): CategoryId {
  if (typeof window === "undefined") return "all";
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("category");
  if (
    cat &&
    ["all", "spoons", "cutting-boards", "sets", "utensils", "accessories"].includes(cat)
  ) {
    return cat as CategoryId;
  }
  const hash = window.location.hash.slice(1);
  const product = products.find((p) => p.slug === hash);
  return product ? (product.category as CategoryId) : "all";
}

export function ProductGrid() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setActiveCategory(getCategoryFromSearch());
  }, [searchParams]);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (hash) {
      const product = products.find((p) => p.slug === hash);
      if (product) setSelectedProduct(product);
    }
  }, []);

  return (
    <>
      <div className="mb-12">
        <FilterBar active={activeCategory} onSelect={setActiveCategory} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            onOpenDetail={setSelectedProduct}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
