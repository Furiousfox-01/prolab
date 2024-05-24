/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
        4: "4px",
        5: "5px",
      },
    },
  },
  plugins: [],
};
