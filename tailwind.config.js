
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      pColor : '#0BE58A',
      secondaryTextColor: '#150B2B',
      white: '#ffff'
    },
    backgroundImage: {
      'search-icon' : "url('/public/magnifying-glass.png')",
      'bannerImg' : "url('/public/banner.png'),linear-gradient(to top, #150B2B, #150b2b0b)",

    },
    backgroundSize: {
      'bgSize' : '25px',
      'cover': 'cover',
      'contain': 'contain',
    },
    backgroundPosition: {
      left : '10px',
     
    }
  },
  plugins: [],
}

