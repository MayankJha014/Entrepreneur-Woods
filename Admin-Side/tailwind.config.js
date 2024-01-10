/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "swap"],
        poppins: ["Poppins", "swap"],
      },
    },
  },
  plugins: [],
};
