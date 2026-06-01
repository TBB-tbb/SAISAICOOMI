import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#07136b",
          cream: "#fffaf0",
          soft: "#f7efe1",
          green: "#72df25",
          wine: "#8c075a",
          violet: "#4024b9",
          pink: "#d94fdc",
          blush: "#f199d9",
        },
      },
      boxShadow: {
        soft: "0 22px 60px rgba(7, 19, 107, 0.10)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
