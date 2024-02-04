/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: [`var(--Ubuntu)`, "sans-serif"],
        bebas_Neue: [`var(--Bebas_Neue)`, "sans-serif"],
      },
      colors: {
        primary: "#363635",
        secondary: "#513A72",
        header: "#283640",
        background: "#F3F0EB",
        button: "#00A1B3",
        text_fav: "#505883",
        bg_fav: "#F4F5F5",
      },
    },
  },
  plugins: [],
};
