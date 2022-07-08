/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../packages/ui/**/*.{ts,tsx}", "./**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        test: "#f1f833",
      },
    },
  },
  plugins: [],
};
