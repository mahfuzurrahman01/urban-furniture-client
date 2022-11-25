/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          "primary": "#032220",
          "secondary": "#07544e",
          "accent": "#3A4256",
          "neutral": "#333C4D",
          "base-100": "#FEFFD8",

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
