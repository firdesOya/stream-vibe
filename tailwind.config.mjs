/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"], 
      },
      screens: {
        desktop: "1598px", 
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: "1rem",
          md:"2rem"
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          desktop: "1598px",
        },
      },
      colors: {
        red: {
          100: "#FFFAFA",
          200: "#FFE5E5",
          300: "#FFCCCC",
          400: "#FF9999",
          500: "#FF3333",
          600: "#FF1919",
          700: "#FF0000",
          800: "#E50000",
        },
        black: {
          100: "#4C4C4C",
          200: "#404040",
          300: "#333333",
          400: "#262626",
          500: "#1F1F1F",
          600: "#1A1A1A",
          700: "#141414",
          800: "#0F0F0F",
          900: "#000000",
        },
        gray: {
          100: "#FCFCFD",
          200: "#F7F7F8",
          300: "#F1F1F3",
          400: "#E4E4E7",
          500: "#BFBFBF",
          600: "#B3B3B3",
          700: "#A6A6A6",
          800: "#999999",
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
