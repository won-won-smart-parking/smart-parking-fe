/** @type {import('tailwindcss').Config} */

const colors = require("./src/shared/tokens/color");
const fontSize = require("./src/shared/tokens/font-size");
const spacing = require("./src/shared/tokens/spacing");

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontSize,
      spacing,
    },
  },
  plugins: [],
};
