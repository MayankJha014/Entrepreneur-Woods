/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sofia-sans-condensed": ["Sofia Sans Condensed", "sans-serif"],
        sofia: ["Sofia", "cursive"],
        "sofia-sans": ["Sofia Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "swap"],

      },
      keyframes: {
        fadeInLeft: {
          "0%": {
            transform: "translate(5rem)",
            opacity: "0",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0rem)",
          },
        },
        fadeInRight: {
          "0%": {
            transform: "translate(-5rem)",
            opacity: "0",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0rem)",
          },
        },
        fadeInTop: {
          "0%": {
            transform: "translateY(5rem)",
            opacity: "0",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0rem)",
          },
        },
        fadeInDown: {
          "0%": {
            transform: "translateY(-5rem)",
            opacity: "0",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0rem)",
          },
        },
      },
      animation: {
        'fadeInLeft-Animation': 'fadeInLeft 2s linear',
        'fadeInRight-Animation': 'fadeInRight 2s linear',
        'fadeInTop-Animation': 'fadeInTop 2s linear',
        'fadeInDown-Animation': 'fadeInDown 2s linear',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
