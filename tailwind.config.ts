import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "welcome-gradient":
          "linear-gradient(135deg, #D9D7F5 60%, #E4E3FA 80%, #B4B2E3 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "quick-view": "url('/banner/bg.png')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#4338ca",
      dark: "#020617",
      medium: "#6b7280",
      white: "#ffffff",
      light: "#f1f5f9",
      danger: "#dc2626",
      warning: "#facc15",
      info: "#1d4ed8",
      success: "#047857",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config
