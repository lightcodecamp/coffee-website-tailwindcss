/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem"
      }
    }
  },
  plugins: [],
}

