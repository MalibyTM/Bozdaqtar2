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
        'logo-color': 'rgba(236, 199, 156, 1)',
        'backgr': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        stencil: ['"Saira Stencil One"', 'sans-serif'],
        roboto: ['Roboto','sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
