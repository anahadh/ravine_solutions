/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "night", "dracula", "halloween", "autumn", "business", "corporate"],
  },
  plugins: [require('daisyui')],
};
