import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      playfairDisplaySC: ["Playfair Display SC", "serif"],
    },
    extend: {
      backgroundImage: {
        'custom-image': "url('/Dorothea bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
