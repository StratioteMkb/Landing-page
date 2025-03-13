import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
const config: Config = {
  content: [
    // ... votre contenu
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
        'spin-slow': 'spin-slow 5s linear infinite', // Ajustez la durée (5s) selon vos besoins
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"], // Adapter selon ton projet
  theme: {
    extend: {},
  },
  plugins: [],
};


export default config;