import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        barlow: ['"barlow"', "sans-serif"]
      },
      colors: {
        'custom-yellow-100' : "#FFCA40",
        'custom-yellow-200' : "#594A30"
      },
      backgroundColor: {
        mainColor : '#252836',
        sideColor : '#1F1D2B'
      },
      width: {
        '104': '6.5rem',
      }
    },
  },
  plugins: [],
};
export default config;
