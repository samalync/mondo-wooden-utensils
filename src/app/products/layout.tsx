import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Mondo Wooden Utensils",
  description:
    "Shop wooden spoons, cutting boards, and sets. Plastic-free kitchen essentials crafted for health and impact.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
