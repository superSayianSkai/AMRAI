/** @type {import('tailwindcss').Config} */
import { addUtilities } from './src/plugins/scroll';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Added fallback to sans-serif
      },
      colors: {
        "custom-gray": "rgb(248, 250, 252)", // Define the custom color
      },
    },
  },
  plugins: [addUtilities],
};
