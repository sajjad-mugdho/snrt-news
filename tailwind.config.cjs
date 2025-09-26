/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          500: "#0ea5a8",
        },
      },
      fontFamily: {
        // Primary UI / headings use Nobel Uno when available, falling back to Tajawal (Arabic-friendly) then system sans
        sans: ['"Nobel Uno"', "Tajawal", "ui-sans-serif", "system-ui"],
        heading: ['"Nobel Uno"', "Tajawal", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
