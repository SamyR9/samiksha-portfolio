import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bodyColor: "#000000",
        textLight: "#ffffff",
        textDark: "#efc2d9",
        hoverColor: "rgba(254,223,238,0.1)", 
      },
      fontFamily: {
        bodyFont: ["Roboto","sans-serif"],
        titleFont: ["Roboto", "sans-serif"]
      },
      boxShadow : {
        navbarShadow: "0 10px 30px -10px rgba(50,50,60,0.7)"
      },
      screens : {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      }
    },
  },
  plugins: [],
} satisfies Config;
