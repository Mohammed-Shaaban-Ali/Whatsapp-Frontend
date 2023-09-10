/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1476ff",
        primaryHover: "#1476dd",
        secondary: "#f3f5ff",
        light: "#f9faff",
      },
    },
  },
  plugins: [],
};
