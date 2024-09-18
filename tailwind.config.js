/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to apply styles to your source files
  ],
  theme: {
    extend: {
      fontSize: {
        "heading0": "3em",
        "heading1": "2em",
      },
      fontWeight: {
        'heading-light': '400',
        'heading-normal': '500',
        'heading-bold': '700',
      },
      colors: {
        'custom-pink': '#fc4e6a',
        'custom-light-pink':'rgb(241 159 120)',
      },
      spacing: {
        //custome class of margin
        "5px": "5px",
      },
    },
  },
  plugins: [],
};
