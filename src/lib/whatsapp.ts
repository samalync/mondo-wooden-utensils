import type { CartItem } from "@/types";

/**
 * WhatsApp business number in international format without + or spaces.
 * Example: 1234567890 (US), 447700900123 (UK)
 * Set in .env.local as NEXT_PUBLIC_WHATSAPP_NUMBER
 */
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

export function getWhatsAppOrderUrl(items: CartItem[], totalPrice: number): string | null {
  if (!WHATSAPP_NUMBER) return null;

  const lines = [
    "Hi! I'd like to place an order from Mondo Wooden Utensils:",
    "",
    ...items.flatMap((item) => [
      `• ${item.name} × ${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`,
      `  📷 ${item.image}`,
      "",
    ]),
    `*Total: $${totalPrice.toFixed(2)}*`,
    "",
    "Please let me know how to complete the order. Thank you!",
  ];

  const text = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function hasWhatsAppOrderEnabled(): boolean {
  return Boolean(WHATSAPP_NUMBER);
}

/** Pre-filled WhatsApp chat link for general contact (no order). */
export function getWhatsAppContactUrl(message?: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  const text =
    message ||
    "Hi, I'd like to get in touch with Mondo Wooden Utensils.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
