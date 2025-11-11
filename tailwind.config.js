/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // This is important for Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
};
