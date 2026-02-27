import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact | Mondo Wooden Utensils",
  description:
    "How your purchase supports displaced communities. Fair wages, skills training, and sustainable wood sourcing.",
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
