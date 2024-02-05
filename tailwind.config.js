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
        bebas_neue: [`var(--Bebas_Neue)`, "sans-serif"],
      },
      colors: {
        primary_joke: "#363635",
        secondary_joke: "#280D54",
        header_joke: "#283640",
        background_joke: "#F3F0EB",
        background_image_joke: "#283640",
        button_joke: "#00A1B3",
        text_fav_joke: "#505883",
        bg_fav_joke: "#F4F5F5",
        background_input_joke: "#E2E8F0",
      },
      screens: {
        xs: "400px",
        "3xl": "1700px",
      },
    },
  },
  plugins: [],
};
