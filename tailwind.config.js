/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Jost"],
    },
    extend: {
      colors: {
        primary: "#dfbaa0",
        primaryLight: "#f9f1ec",
        dark: "#141414",
        grayed: "#9b9a99",
      },
      fontFamily: {
        prata: ["ui-serif", "Prata"],
      },
    },
    container: {
      center: true,
      padding: "24px",
      screens: {
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
