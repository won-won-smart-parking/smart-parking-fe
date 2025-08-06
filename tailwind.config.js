/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Color Token
      colors: {
        neutral: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#F2F2F2",
          400: "#EDEDED",
          500: "#ECECEC",
          600: "#E5E5E5",
          700: "#E0E0E0",
          800: "#B0B0B0",
          850: "#A0A0A0",
          870: "#9E9E9E",
          900: "#616161",
          950: "#333333",
          1000: "#12141A",
        },
        coolgray: {
          100: "#F1F2F6",
          200: "#E5E7EB",
          300: "#DFE4EA",
          400: "#C7C7CD",
          500: "#A4B0BE",
        },
        blue: {
          100: "#E7F0F9",
          200: "#E4F1FE",
          300: "#5BABF8",
          400: "#3A8DDE",
        },
        green: {
          100: "#F1FBEA",
          200: "#7CB342",
          300: "#24E955",
        },
        red: {
          100: "#FEEAEA",
          200: "#F44336",
          300: "#DA3636",
        },
        orange: {
          100: "#FFF4E5",
          200: "#FF9800",
        },
        overlay: {
          "overlay-black-40": "rgba(0, 0, 0, 0.4)",
          "overlay-black-08": "rgba(0, 0, 0, 0.08)",
          "overlay-white-30": "rgba(255, 255, 255, 0.3)",
          "blue-opacity-20": "rgba(242, 250, 255, 0.2)",
          "blue-opacity-10": "rgba(91, 171, 248, 0.1)",
        },
      },
    },
  },
  plugins: [],
};
