/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        'primary-dark': '#010409',
        'secondary-dark': '#0d1117'
      },
      backgroundImage: {
        'main-wpp': "url('assets/images/wallpaper.webp')"
      }
    }
  },
  plugins: [],
}

