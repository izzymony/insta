import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        xs: '290px',
        sm: '375px',
        md: '678px',
        lg: '850px',
        xl: '1000px',
        xxl: '1200px',
       
      
      },
    },
  },
  plugins: [],
} satisfies Config;
