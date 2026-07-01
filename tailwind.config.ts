import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "var(--ink)", soft: "var(--ink-soft)" },
        paper: { DEFAULT: "var(--paper)", dim: "var(--paper-dim)" },
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        fg: { DEFAULT: "var(--fg)", muted: "var(--fg-muted)" },
        line: { DEFAULT: "var(--line)", dark: "var(--line-dark)" },
        success: "var(--success)",
        danger: "var(--danger)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,10,11,0.04), 0 8px 24px rgba(10,10,11,0.06)",
        lift: "0 12px 40px rgba(10,10,11,0.12)",
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
