/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "whiteSlate": "#D9D9D9"
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700
      }
    },
  },  
  plugins: [],
}
