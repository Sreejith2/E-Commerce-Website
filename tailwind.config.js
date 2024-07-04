/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'logo-color':'#171717',
        'nav-list':'#626262',
        'nav-btn-bord':'#7a7a7a',
        'btn-color':'#ff4141',
        'newslet-text':'#454545'
      }
    },
  },
  plugins: [],
}

