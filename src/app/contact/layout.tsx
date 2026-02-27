import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mondo Wooden Utensils",
  description:
    "Get in touch for wholesale, partnerships, or inquiries. We'd love to hear from you.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
