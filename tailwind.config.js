/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        backdrop: '#121212',
        primary: '#1ed760',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
      },
      fontSize:{
        s: '.813rem'
      }
    },
  },
  plugins: [
      require("@tailwindcss/line-clamp")
  ],
}
