import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#F5EFE4", deep: "#EDE4D3", soft: "#FAF7F1" },
        earth: { DEFAULT: "#5C3A21", dark: "#3E2715", light: "#7A5438" },
        caramel: { DEFAULT: "#B5651D", light: "#C98A4E" },
        wine: { DEFAULT: "#6B1E23" },
        gold: { DEFAULT: "#C9A227", muted: "#B8995A" },
        ink: "#2A1D14",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        western: ["Rye", "Georgia", "serif"],
      },
      letterSpacing: { widest2: "0.3em" },
      transitionDuration: { 1100: "1100ms", 1400: "1400ms" },
      transitionTimingFunction: { editorial: "cubic-bezier(0.22, 1, 0.36, 1)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slow-zoom": { from: { transform: "scale(1.08)" }, to: { transform: "scale(1)" } },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.2s ease both",
        "slow-zoom": "slow-zoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  // Container próprio (fluido até 1440px) definido em src/index.css.
  corePlugins: { container: false },
  plugins: [animate],
};
