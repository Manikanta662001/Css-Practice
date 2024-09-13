/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to apply styles to your source files
  ],
  theme: {
    extend: {
      spacing: {
        //custome class of margin
        "5px": "5px",
      },
    },
  },
  plugins: [],
};
