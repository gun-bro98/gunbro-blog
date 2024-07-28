import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      fadein: {
        '0%': { opacity: "0" },
        '100%': { opacity: "1" },
      },
    },
    animation: {
      fadein: 'fadein 0.5s ease-in-out',
    },
    screens: {
      tablet: { min: "0px", max: "640px" },
      // => @media (min-width: 640px) { ... }

      laptop: { min: "640px", max: "1280px" },
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      background: "#DCDCDC",
      normal: "#4D4646",
      title: "#333030",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
