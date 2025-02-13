import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sakuraPink: "#FFB3C6",      // Main pink - medium intensity
        sakuraWhite: "#FFF5F7",     // Very light pink/white
        sakuraAccent: "#FF8FAB",    // Deeper pink (replacing brown)
        sakuraLight: "#FFE4E9",     // Light background pink
        sakuraGold: "#FFD1DC",      // Soft pink (replacing gold)
      },
    },
  },
  plugins: [],
} satisfies Config;
