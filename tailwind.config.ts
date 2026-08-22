import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B1220",
          dark2: "#111827",
          dark3: "#1E293B",
          accent: "#2563EB",
          accentHover: "#1D4ED8",
          teal: "#14B8A6",
          tealHover: "#0D9488",
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          textPrimary: "#0F172A",
          textSecondary: "#475569",
          textMuted: "#64748B",
          border: "#E2E8F0",
          borderDark: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 4px 6px -1px rgba(11, 18, 32, 0.05), 0 2px 4px -1px rgba(11, 18, 32, 0.03)",
        cardHover: "0 12px 24px -4px rgba(11, 18, 32, 0.08), 0 4px 8px -2px rgba(11, 18, 32, 0.04)",
        darkCard: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
        glowBlue: "0 0 20px -4px rgba(37, 99, 235, 0.25)",
        glowTeal: "0 0 20px -4px rgba(20, 184, 166, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
