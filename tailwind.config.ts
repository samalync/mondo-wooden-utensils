import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#F7F3E8",
          100: "#EDE5D0",
          200: "#D9C99E",
          300: "#C6A75E",
          400: "#B8943D",
          500: "#9A7B2E",
          600: "#7A6225",
          700: "#5A491C",
          800: "#3A3012",
          900: "#1A1708",
        },
        cream: {
          50: "#FFFEF9",
          100: "#FDFBF5",
          200: "#F8F5EC",
          300: "#F0EBE0",
          400: "#E5DFD0",
        },
        charcoal: {
          50: "#F5F5F5",
          100: "#E8E8E8",
          200: "#D1D1D1",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#1A1A1A",
          900: "#0F0F0F",
          950: "#080808",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "gold-shimmer": "goldShimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        goldShimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #C6A75E 0%, #9A7B2E 100%)",
      },
      boxShadow: {
        "premium": "0 4px 24px -4px rgba(198, 167, 94, 0.12), 0 8px 48px -8px rgba(0,0,0,0.08)",
        "premium-lg": "0 12px 48px -12px rgba(198, 167, 94, 0.18), 0 24px 64px -24px rgba(0,0,0,0.12)",
        "card": "0 2px 12px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 32px rgba(198, 167, 94, 0.12), 0 16px 48px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
