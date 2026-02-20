import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "battle-orange": "hsl(var(--battle-orange))",
        "battle-red": "hsl(var(--battle-red))",
        "battle-green": "hsl(var(--battle-green))",
        "battle-blue": "hsl(var(--battle-blue))",
        "battle-purple": "hsl(var(--battle-purple))",
        saboteur: "hsl(var(--saboteur))",
        "vibe-keeper": "hsl(var(--vibe-keeper))",
        "vibe-good": "hsl(var(--vibe-good))",
        "vibe-mid": "hsl(var(--vibe-mid))",
        "vibe-bad": "hsl(var(--vibe-bad))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["Bangers", "cursive"],
        body: ["Rubik", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3) rotate(-10deg)", opacity: "0" },
          "50%": { transform: "scale(1.1) rotate(3deg)", opacity: "1" },
          "70%": { transform: "scale(0.95) rotate(-1deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        "slam-down": {
          "0%": { transform: "translateY(-100px) scale(1.5)", opacity: "0" },
          "60%": { transform: "translateY(10px) scale(0.95)", opacity: "1" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-4px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(4px)" },
        },
        "explode-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.3)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.8)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "dramatic-reveal": {
          "0%": { opacity: "0", transform: "scale(0.3) rotate(-15deg)" },
          "60%": { opacity: "1", transform: "scale(1.15) rotate(3deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        "count-tick": {
          "0%": { transform: "scale(1.5)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "equalizer": {
          "0%, 100%": { height: "20%" },
          "50%": { height: "100%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "war-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(0 85% 55% / 0.3), 0 4px 0 hsl(0 60% 35%)" },
          "50%": { boxShadow: "0 0 25px hsl(0 85% 55% / 0.6), 0 4px 0 hsl(0 60% 35%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "slam-down": "slam-down 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "shake": "shake 0.5s ease-in-out",
        "explode-in": "explode-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "dramatic-reveal": "dramatic-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "count-tick": "count-tick 0.3s ease-out",
        "equalizer": "equalizer 1s ease-in-out infinite",
        "float": "float 2s ease-in-out infinite",
        "war-pulse": "war-pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
