import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          cyan:       "#0891B2", // cyan-600
          "cyan-hov": "#0E7490", // cyan-700
          navy:       "#0F172A", // slate-900
          mid:        "#1E3A5F",
        },
      },
      boxShadow: {
        card:       "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hov": "0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)",
        cta:        "0 4px 14px rgba(8,145,178,0.30)",
        "cta-hov":  "0 6px 20px rgba(8,145,178,0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
