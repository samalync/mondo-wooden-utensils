# Mondo Wooden Utensils — Premium Website Demo

A next-generation, premium website demo for **Mondo Wooden Utensils**: a mission-driven brand committed to reducing plastic-related health risks and creating opportunity for displaced communities through wooden kitchen tools.

## Overview

- **Brand:** Mondo Wooden Utensils  
- **Industry:** Wooden kitchen materials & utensils  
- **Primary color:** Gold (#C6A75E)  
- **Core message:** *"Lifesaving initiative committed to reducing cancer-related deaths caused by plastic. Transforming wooden art into opportunity for displaced communities."*

The site is built to feel **luxurious**, **eco-conscious**, and **investor-ready**, with smooth animations, clear storytelling, and conversion-focused sections.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS** (custom theme: gold, cream, charcoal)
- **Framer Motion** (animations, page transitions, microinteractions)
- **TypeScript**

## Features

- **Home:** Hero, Why Wood Over Plastic, Featured Products, Social Impact, Testimonials, CTA, premium footer  
- **Products:** Filterable grid, product cards with hover states, product detail modal, Add to Cart (demo)  
- **About / Our Mission:** Plastic problem, craftsmanship, displaced communities, animated stats, vision  
- **Impact:** Before/after narrative, how purchases support communities, metrics, quotes  
- **Contact:** Premium form, map placeholder, social links  

**Bonus:**

- **Demo cart** — slide-out drawer, add/remove/update quantity, subtotal  
- **Dark mode** — toggle in header, persisted in `localStorage`  
- **Loading state** — global loading UI with Mondo branding  
- **Animated logo** — staggered reveal in header  
- **Smooth scroll** — anchor behavior and in-view animations  
- **SEO** — metadata and layout titles per page  
- **Order via WhatsApp** — cart can send the order to your WhatsApp number (see below)

## WhatsApp ordering

When a customer has items in the cart, they can place the order through WhatsApp. Clicking **Order via WhatsApp** opens a chat with a pre-filled message listing all items, quantities, prices, and the total.

**Setup:** Create a `.env.local` in the project root and set your business WhatsApp number (international format, no `+` or spaces):

```bash
# Example: US 555-123-4567 → 15551234567
# Example: UK 07700 900123 → 447700900123
NEXT_PUBLIC_WHATSAPP_NUMBER=15551234567
```

Restart the dev server after changing env. If the variable is not set, only the “Request Quote / Contact” button is shown in the cart.

## Getting Started

### Prerequisites

- Node.js 18+  
- npm (or yarn/pnpm)

### Install and run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, providers, Header/Footer/Cart
│   ├── page.tsx            # Home
│   ├── loading.tsx         # Global loading UI
│   ├── globals.css
│   ├── products/           # Products page + layout (metadata)
│   ├── about/              # Our Mission page + layout
│   ├── impact/             # Impact page + layout
│   └── contact/            # Contact page + layout
├── components/
│   ├── layout/             # Header, Footer, CartDrawer
│   ├── home/               # Hero, WhyWood, FeaturedProducts, SocialImpact, Testimonials, CTA
│   ├── products/           # ProductGrid, ProductCard, ProductModal, FilterBar
│   ├── about/              # Stats (animated counters)
│   ├── contact/            # ContactForm
│   └── ui/                 # Button, AnimatedLogo, LoadingScreen, PageTransition
├── lib/
│   ├── products.ts         # Demo product data
│   ├── cart-context.tsx    # Cart state and drawer
│   └── theme-context.tsx   # Dark mode
└── types/
    └── index.ts            # Product, CartItem, Testimonial
```

## Design Notes

- **Typography:** Playfair Display (headings) + Inter (body) via Next.js font optimization  
- **Colors:** Gold accents (#C6A75E), cream/white and dark charcoal bases  
- **Spacing:** Generous section padding and container widths  
- **Shadows:** Soft, gold-tinted shadows for cards and CTAs  
- **Animations:** Framer Motion for entrance, hover, and scroll-triggered effects  

## Demo Content

- Product images use **Unsplash** placeholders (wood/kitchen). Replace with real assets for production.  
- Cart and contact form are **demo-only** (no backend).  
- Map on Contact is a placeholder; integrate Google Maps or similar when needed.  

## License

Private / demo use. All content and design for Mondo Wooden Utensils presentation.
