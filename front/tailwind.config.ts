import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-MabryPro)'],
      },
      colors: {
        primary: '#FF595E',
        secondary: '#A43D83',
        accent: '#F7CB45',
        contrast: '#797979',
      },
    },
  },
  plugins: [],
};

export default config;