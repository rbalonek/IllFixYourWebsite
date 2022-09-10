/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'sm-container': '97%',
        'md-container': '95%',
        'lg-conatiner': '90%'
      },
      height: {
        'sm-container': '700px',
        'md-container': '500px',
        'lg-conatiner': '700px'
      },
    },
  },
  plugins: [],

}
