import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mondo Wooden Utensils | Plastic-Free Kitchen · Social Impact",
description:
      "Based in Rwanda. Lifesaving initiative committed to reducing cancer-related deaths caused by plastic. Transforming wooden art into opportunity for displaced communities. Premium wooden kitchen utensils, cutting boards, and sets.",
  keywords: [
    "wooden utensils",
    "plastic-free kitchen",
    "Rwanda",
    "wooden cutting boards",
    "eco kitchen",
    "social impact",
    "cancer prevention",
    "displaced communities",
  ],
  openGraph: {
    title: "Mondo Wooden Utensils | Plastic-Free Kitchen · Social Impact",
    description:
      "Transform your kitchen. Transform lives. Premium wooden utensils and a mission to reduce plastic-related harm.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans overflow-x-hidden`}>
        <CartProvider>
          <Header />
          <main className="pt-[56px] min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
