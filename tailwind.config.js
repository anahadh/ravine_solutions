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
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      animation: {
        slide: 'slide 10s linear infinite',
      },
    },
  },
  daisyui: {
    themes: [
      {
        ravine: {
          "primary": "#1D4ED8",       
          "secondary": "#3B82F6",     
          "accent": "#60A5FA",        
          "neutral": "#1F2937",       
          "base-100": "#111827",      
          "info": "#3B82F6",          
          "success": "#10B981",       
          "warning": "#F59E0B",       
          "error": "#EF4444",
        },
      },
      "light", "dark", "cupcake", "night", "dracula", "halloween", "autumn", "business", "corporate"
    ],
  },
  plugins: [require('daisyui')],
};
