const lineClamp = require("@tailwindcss/line-clamp");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};
