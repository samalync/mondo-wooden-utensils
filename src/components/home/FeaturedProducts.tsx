"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products, getProductFallbackImage } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

const featured = products.filter((p) => p.featured).slice(0, 6);

export function FeaturedProducts() {
  const { addItem } = useCart();

  return (
    <section className="section-padding bg-cream-200/40 dark:bg-charcoal-900/60 overflow-hidden">
      <div className="container-wide">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold-500 dark:text-gold-400 font-medium tracking-widest uppercase text-sm mb-4">
            Featured
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 dark:text-cream-100">
            Crafted for life. Built for impact.
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal-600 dark:text-cream-300">
            Each piece is made by artisans in our partner communities. Beautiful, functional,
            plastic-free.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((product, i) => (
            <motion.article
              key={product.id}
              className="group rounded-2xl overflow-hidden bg-cream-100 dark:bg-charcoal-800 border border-charcoal-100 dark:border-charcoal-700 shadow-card hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/products#${product.slug}`} className="block overflow-hidden">
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
              </Link>
              <div className="p-4 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 mb-1">
                  {product.category.replace("-", " ")}
                </p>
                <Link href={`/products#${product.slug}`}>
                  <h3 className="font-display text-lg sm:text-xl text-charcoal-800 dark:text-cream-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-2 text-charcoal-600 dark:text-cream-400 text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-display text-xl text-gold-600 dark:text-gold-400">
                    ${product.price}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => addItem(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button href="/products" variant="outline" size="lg">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
