/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('src/assets/images/pattern-background-mobile.svg')",
        'desktop': "url('src/assets/images/pattern-background-desktop.svg')",
      },
    },
    plugins: [],
  }
  }