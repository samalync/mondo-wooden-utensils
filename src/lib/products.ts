import type { Product } from "@/types";

// Product images: add your photos from https://www.instagram.com/mondowoodenutensils/
// to public/products/. The catalog below references local files like product-01.png.
// If you rename or add images, update the `image` fields accordingly.
const PRODUCT_IMAGES_BASE = "/products";
// Keep fallbacks local to avoid Next/Image remote host config issues causing runtime 500s.
// Using the brand logo is a safe, always-present default.
const FALLBACK_IMAGES: Record<string, string> = {};

const DEFAULT_FALLBACK_IMAGE = "/logo.png";

function localProductImage(filename: string): string {
  return `${PRODUCT_IMAGES_BASE}/${filename}`;
}

export function getProductFallbackImage(slug: string): string {
  return FALLBACK_IMAGES[slug] ?? DEFAULT_FALLBACK_IMAGE;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mondo Everyday Cooking Spoon",
    slug: "mondo-everyday-cooking-spoon",
    description: "A go-to wooden spoon for sautéing, stirring, and serving. Smooth edges, plastic-free cooking.",
    longDescription:
      "Hand-finished for a comfortable grip and a smooth bowl that won't scratch cookware. Sealed with food-safe oil for easy rinsing and everyday durability.",
    price: 29,
    category: "spoons",
    image: localProductImage("product-01.png"),
    benefits: ["Plastic-free", "Gentle on cookware", "Food-safe finish", "Everyday durable"],
    featured: true,
  },
  {
    id: "2",
    name: "Mondo Flat-Edge Spatula",
    slug: "mondo-flat-edge-spatula",
    description: "Thin, sturdy edge for flipping and scraping. One-piece wood for a clean, plastic-free kitchen.",
    longDescription:
      "Designed for eggs, pancakes, and roasted veggies. The flat edge slides under food easily, while the smooth surface protects non-stick pans.",
    price: 31,
    category: "utensils",
    image: localProductImage("product-02.png"),
    benefits: ["No plastic", "Won't scratch pans", "Easy to rinse", "Comfort grip"],
    featured: true,
  },
  {
    id: "3",
    name: "Mondo Serving Spoon",
    slug: "mondo-serving-spoon",
    description: "A larger spoon for serving rice, stews, and salads. Warm wood tones, clean finish.",
    longDescription:
      "Perfect for table service and family-style meals. Hand-smoothed edges and a slightly deeper bowl for easy scooping.",
    price: 30,
    category: "spoons",
    image: localProductImage("product-03.png"),
    benefits: ["Plastic-free", "Table-ready", "Smooth edges", "Hand-finished"],
    featured: true,
  },
  {
    id: "4",
    name: "Mondo Slotted Spoon",
    slug: "mondo-slotted-spoon",
    description: "Lift and drain with ease. Great for pasta, boiled veggies, and frying—without plastic.",
    price: 32,
    category: "spoons",
    image: localProductImage("product-04.png"),
    benefits: ["Drains quickly", "Heat-safe wood", "Gentle on cookware", "Plastic-free"],
    featured: false,
  },
  {
    id: "5",
    name: "Mondo Wooden Ladle",
    slug: "mondo-wooden-ladle",
    description: "Soup-night essential. A deep wooden ladle for broth, sauces, and stews.",
    price: 34,
    category: "utensils",
    image: localProductImage("product-05.png"),
    benefits: ["Comfortable handle", "Food-safe finish", "No plastic", "Great for soups"],
    featured: false,
  },
  {
    id: "6",
    name: "Mondo Salad Servers (2pc)",
    slug: "mondo-salad-servers-2pc",
    description: "A matched pair of wooden servers for salad and pasta. Lightweight, strong, and table-ready.",
    price: 33,
    category: "utensils",
    image: localProductImage("product-06.png"),
    benefits: ["Set of 2", "Elegant serving", "Plastic-free", "Easy to clean"],
    featured: true,
  },
  {
    id: "7",
    name: "Mondo Wooden Tongs",
    slug: "mondo-wooden-tongs",
    description: "Grip and serve safely with wooden tongs. Great for salad, toast, and grilling.",
    price: 28,
    category: "utensils",
    image: localProductImage("product-07.png"),
    benefits: ["Strong grip", "Plastic-free", "Counter-friendly", "Lightweight"],
    featured: false,
  },
  {
    id: "8",
    name: "Mondo Mini Tasting Spoon",
    slug: "mondo-mini-tasting-spoon",
    description: "A small wooden spoon for tasting, spices, and coffee. Minimal, handy, and plastic-free.",
    price: 19,
    category: "spoons",
    image: localProductImage("product-08.png"),
    benefits: ["Perfect for jars", "Quick rinse", "Food-safe finish", "Plastic-free"],
    featured: false,
  },
  {
    id: "9",
    name: "Mondo Cutting Board (Medium)",
    slug: "mondo-cutting-board-medium",
    description: "Everyday wooden cutting board for prep and serving. A clean alternative to plastic boards.",
    price: 35,
    category: "cutting-boards",
    image: localProductImage("product-09.png"),
    benefits: ["No microplastics", "Knife-friendly", "Doubles as serving board", "Easy maintenance"],
    featured: true,
  },
  {
    id: "10",
    name: "Mondo Wooden Spatula (Classic)",
    slug: "mondo-wooden-spatula-classic",
    description: "A classic wooden spatula for stirring, scraping, and folding. Smooth, sturdy, and simple.",
    price: 27,
    category: "utensils",
    image: localProductImage("product-10.png"),
    benefits: ["One-piece wood", "Cookware-safe", "Plastic-free", "Built to last"],
    featured: false,
  },
  {
    id: "11",
    name: "Mondo Stirring Spoon (Long Handle)",
    slug: "mondo-stirring-spoon-long",
    description: "Long handle for deep pots and big batches. Great for soups, grains, and sauces.",
    price: 29,
    category: "spoons",
    image: localProductImage("product-11.png"),
    benefits: ["Long reach", "Heat-safe wood", "Comfort grip", "Plastic-free"],
    featured: false,
  },
  {
    id: "12",
    name: "Mondo Honey Dipper",
    slug: "mondo-honey-dipper",
    description: "A wooden honey dipper for tea, toast, and yogurt. Less mess, more drizzle.",
    price: 18,
    category: "accessories",
    image: localProductImage("product-12.png"),
    benefits: ["Smooth drizzle", "Easy to rinse", "Plastic-free", "Giftable"],
    featured: false,
  },
  {
    id: "13",
    name: "Mondo Coffee Scoop",
    slug: "mondo-coffee-scoop",
    description: "A simple wooden scoop for coffee beans, loose tea, or spices. Minimal and durable.",
    price: 22,
    category: "accessories",
    image: localProductImage("product-13.png"),
    benefits: ["Fits jars easily", "Food-safe", "Plastic-free", "Easy to store"],
    featured: false,
  },
  {
    id: "14",
    name: "Mondo Utensil Caddy",
    slug: "mondo-utensil-caddy",
    description: "Keep your wooden tools within reach. A tidy counter caddy with a natural finish.",
    price: 26,
    category: "accessories",
    image: localProductImage("product-14.png"),
    benefits: ["Counter-ready", "Fast-drying", "Plastic-free", "Keeps tools organized"],
    featured: false,
  },
  {
    id: "15",
    name: "Mondo Starter Set (4pc)",
    slug: "mondo-starter-set-4pc",
    description: "A small starter bundle of everyday wooden tools. A great gift and an easy plastic-free swap.",
    price: 36,
    category: "sets",
    image: localProductImage("product-15.png"),
    benefits: ["Bundle value", "Plastic-free kitchen", "Gift-ready", "Everyday essentials"],
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "spoons", label: "Spoons" },
  { id: "cutting-boards", label: "Cutting Boards" },
  { id: "sets", label: "Sets" },
  { id: "utensils", label: "Utensils" },
  { id: "accessories", label: "Accessories" },
] as const;
