/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://i.etsystatic.com/24809366/r/il/2671f1/4902756637/il_600x600.4902756637_69zm.jpg')",
      },
    },
  },
  plugins: [],
};
