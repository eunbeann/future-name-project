import type { Config } from "tailwindcss";
const { violet, blackA, mauve, green } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        custom: 'url("/path/to/your-cursor.png"), auto',
      },
      fontFamily: {
        "pixter-display": ["Pixter Display", "sans-serif"],
        // DungGeunMo: ["DungGeunMo", "DungGeunMo"],
      },
    },
    keyframes: {
      overlayShow: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      blink: {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
      contentShow: {
        from: {
          opacity: "0",
          transform: "translate(-50%, -48%) scale(0.96)",
        },
        to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    colors: {
      ...mauve,
      ...violet,
      ...green,
      ...blackA,
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      chart: {
        "1": "hsl(var(--chart-1))",
        "2": "hsl(var(--chart-2))",
        "3": "hsl(var(--chart-3))",
        "4": "hsl(var(--chart-4))",
        "5": "hsl(var(--chart-5))",
      },
    },
    animation: {
      overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      blink: "blink 1s step-start infinite",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
