/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder
    "./public/**/*.html",         // Include any static HTML files in the public directory

  ],

  theme: {
    extend: {
      
      colors: {
        primary:"#2A157c",
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },

      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
    },
  },

  plugins: [],
}

