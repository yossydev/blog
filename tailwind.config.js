import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.tsx"],
  theme: {
    colors: {
      ...colors,
      black: {
        DEFAULT: "#1c1c1c",
      },
    },
    extend: {},
  },
  plugins: [],
};
