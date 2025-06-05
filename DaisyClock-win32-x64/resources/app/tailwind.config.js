// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lilac: '#C3B9DC',
        daisyYellow: '#FCE15D',
      },
      fontFamily: {
        armio: ['Armio', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'], // Add Orbitron
      },
    },
  },
  plugins: [],
};