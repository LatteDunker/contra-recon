// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: 'rgba(243, 202, 77, 0.2)',
        customPink: 'rgba(255, 151, 154, 0.2)',
        customPurple: 'rgba(203, 171, 255, 0.2)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
