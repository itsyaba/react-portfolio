/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home": "url('/assets/bg-home.png')"
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'code': ['Press Start 2P'] , 
        'damion': ['Damion'] , 
      },
      boxShadow: {
        "glow": '2px 2px 20px 20px #ff936344'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(96px) translateY(-288px)' },
          '50%': { transform: 'translateX(118px)  translateY(-288px)' },
          '100%': { transform: 'translateX(96px)  translateY(-288px)' },
        },
      },
      animation: {
        'waving-hand': 'wave 3s linear infinite',
      },
      colors: {
        "dark-gray": "#1a191d"
      } , 
      screens: {

        'xxs': '112px',
        
        'xs': '412px',
        // => @media (min-width: 412px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}