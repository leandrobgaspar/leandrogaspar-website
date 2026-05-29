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
        background: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        border: "#2a2a2a",
        purple: {
          DEFAULT: "#a855f7",
          dark: "#700c86",
          light: "#c084fc",
          glow: "rgba(168, 85, 247, 0.3)",
        },
        orange: {
          DEFAULT: "#FF914D",
          glow: "rgba(255, 145, 77, 0.3)",
        },
        text: {
          primary: "#f1f1f1",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(168, 85, 247, 0.15), transparent)",
        "purple-gradient": "linear-gradient(135deg, #700c86 0%, #a855f7 100%)",
        "orange-gradient": "linear-gradient(135deg, #FF914D 0%, #ffb347 100%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)" },
          to: { boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)" },
        },
      },
      boxShadow: {
        purple: "0 0 30px rgba(168, 85, 247, 0.3)",
        orange: "0 0 30px rgba(255, 145, 77, 0.3)",
        card: "0 4px 20px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
