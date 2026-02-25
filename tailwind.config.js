/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oat: "#F3EEE7",
        "oat-dark": "#E8E0D5",
        espresso: "#2B1B10",
        "espresso-light": "#4A3728",
        caramel: "#B08457",
        "caramel-light": "#C9A07A",
        cream: "#FAF7F2",
        mist: "#9B8E84",
        rose: "#8B4255",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};