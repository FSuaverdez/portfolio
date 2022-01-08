module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        dark: "url('img/darkBackground.png')",
        light: "url('img/lightBackground.png')",
      },
      animation: {
        'bounce-slow': 'bounce 6s linear infinite',
      },
    },
  },
  plugins: [],
}
