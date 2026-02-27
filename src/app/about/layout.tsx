import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | Mondo Wooden Utensils",
  description:
    "A lifesaving initiative committed to reducing cancer-related deaths caused by plastic. Transforming wooden art into opportunity for displaced communities.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
