//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Common colors
        black: '#000000',
        blue: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
        pink: {
          DEFAULT: '#f2c',
          light: '#ff66ff',
          dark: '#cc0099',
        },
        // Light theme colors
        light: {
          background: '#ffffff',
          foreground: '#000000',
          gray: {
            light: '#f3f4f6',
            DEFAULT: '#d1d5db',
            dark: '#4b5563',
          },
        },
        // Dark theme colors
        dark: {
          background: '#1a202c', // Darker background
          foreground: '#f7fafc', // Lighter text color
          gray: {
            light: '#4b5563',
            DEFAULT: '#2d3748',
            dark: '#1a202c',
          },
        },
        // Additional accent colors
        green: {
          light: '#6ee7b7',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
        yellow: {
          light: '#fde68a',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
      },
      borderWidth: {
        3: "3px",
        4: "4px",
        5: "5px",
      },
    },
  },
  plugins: [],
};
