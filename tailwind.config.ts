import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#A78A5A",
          foreground: "#000000",
          50: "#F5F1E8",
          100: "#EBE3D1",
          200: "#D7C7A3",
          300: "#C3AB75",
          400: "#B59D67",
          500: "#A78A5A",
          600: "#8A7248",
          700: "#6D5A39",
          800: "#50422A",
          900: "#332B1B",
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
        gold: {
          light: "#D4AF37",
          DEFAULT: "#A78A5A",
          dark: "#85754E",
          muted: "rgba(167, 138, 90, 0.2)",
        },
        luxury: {
          100: "#F9F4E8",
          200: "#E6D9B8",
          300: "#D4BF8C",
          400: "#C1A661",
          500: "#A78A5A",
          600: "#8A7248",
          700: "#6D5A39",
          800: "#50422A",
          900: "#332B1B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        "gold-sm": "0 1px 2px 0 rgba(167, 138, 90, 0.05)",
        gold: "0 1px 3px 0 rgba(167, 138, 90, 0.1), 0 1px 2px 0 rgba(167, 138, 90, 0.06)",
        "gold-md": "0 4px 6px -1px rgba(167, 138, 90, 0.1), 0 2px 4px -1px rgba(167, 138, 90, 0.06)",
        "gold-lg": "0 10px 15px -3px rgba(167, 138, 90, 0.1), 0 4px 6px -2px rgba(167, 138, 90, 0.05)",
        "gold-xl": "0 20px 25px -5px rgba(167, 138, 90, 0.1), 0 10px 10px -5px rgba(167, 138, 90, 0.04)",
        "gold-2xl": "0 25px 50px -12px rgba(167, 138, 90, 0.25)",
        "gold-inner": "inset 0 2px 4px 0 rgba(167, 138, 90, 0.06)",
        "gold-glow": "0 0 15px 2px rgba(167, 138, 90, 0.3)",
        "gold-glow-lg": "0 0 30px 5px rgba(167, 138, 90, 0.4)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        "gold-gradient-vertical": "linear-gradient(to bottom, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        "gold-radial": "radial-gradient(circle, #FCF6BA, #BF953F, #AA771C)",
        "gold-conic": "conic-gradient(from 0deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C, #BF953F)",
        "luxury-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A78A5A' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "luxury-pattern-2":
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A78A5A' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
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
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" }, // ✅ Fixed - string value
          "50%": { opacity: "0.5" },    // ✅ Fixed - string value
        },
        "gold-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(167, 138, 90, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(167, 138, 90, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(167, 138, 90, 0)" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(167, 138, 90, 0.3)" },
          "50%": { borderColor: "rgba(167, 138, 90, 0.8)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite linear",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gold-pulse": "gold-pulse 2s infinite",
        "border-glow": "border-glow 2s infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 6s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "bounce-out": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      },
      backdropBlur: {
        xs: "2px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "#A78A5A",
              "&:hover": {
                color: "#8A7248",
              },
            },
            strong: {
              color: "#A78A5A",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) => {
      const newUtilities = {
        ".text-gold-gradient": {
          background: "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
          "-webkit-background-clip": "text",
          color: "transparent",
          "background-size": "200% auto",
        },
        ".text-shadow-sm": {
          "text-shadow": "0 1px 2px rgba(0, 0, 0, 0.05)",
        },
        ".text-shadow": {
          "text-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-md": {
          "text-shadow": "0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)",
        },
        ".text-shadow-lg": {
          "text-shadow": "0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0, 0, 0, 0.08)",
        },
        ".text-shadow-none": {
          "text-shadow": "none",
        },
        ".gold-border-gradient": {
          "border-image": "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) 1",
        },
        ".gold-border-gradient-rounded": {
          border: "2px solid transparent",
          "background-clip": "padding-box, border-box",
          "background-origin": "padding-box, border-box",
          "background-image":
            "linear-gradient(to right, transparent, transparent), linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        },
        ".backdrop-blur-xs": {
          "backdrop-filter": "blur(2px)",
        },
        ".backdrop-saturate-150": {
          "backdrop-filter": "saturate(150%)",
        },
        ".backdrop-saturate-200": {
          "backdrop-filter": "saturate(200%)",
        },
        ".backdrop-contrast-more": {
          "backdrop-filter": "contrast(1.1)",
        },
        ".backdrop-brightness-110": {
          "backdrop-filter": "brightness(1.1)",
        },
        ".backdrop-filter-gold": {
          "backdrop-filter": "sepia(20%) hue-rotate(350deg) saturate(150%)",
        },
        ".filter-gold": {
          filter: "sepia(20%) hue-rotate(350deg) saturate(150%)",
        },
        ".filter-luxury": {
          filter: "contrast(1.1) brightness(1.05) saturate(1.05)",
        },
        ".gold-highlight": {
          "box-shadow": "inset 0 0 0 1px rgba(167, 138, 90, 0.2), 0 0 0 1px rgba(167, 138, 90, 0.1)",
        },
        ".gold-highlight-hover": {
          "box-shadow": "inset 0 0 0 1px rgba(167, 138, 90, 0.4), 0 0 0 1px rgba(167, 138, 90, 0.2)",
        },
        ".gold-ring": {
          "box-shadow": "0 0 0 2px rgba(167, 138, 90, 0.3)",
        },
        ".gold-ring-hover": {
          "box-shadow": "0 0 0 3px rgba(167, 138, 90, 0.5)",
        },
        ".clip-path-diamond": {
          "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        },
        ".clip-path-hexagon": {
          "clip-path": "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        },
        ".clip-path-shield": {
          "clip-path": "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)",
        },
        ".clip-path-star": {
          "clip-path":
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        },
      }

      addUtilities(newUtilities);
        },
  ],
} satisfies Config

export default config

