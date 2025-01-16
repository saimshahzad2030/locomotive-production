import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-xl": { raw: "(min-width: 1280px) and (min-height: 720px)" },
        'xs': '520px',
        'xl-2': '1400px',
        '3xl': '1750px',
        '4xl': '2000px',
        '5xl': '2250px',
        '6xl': '2500px',

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
