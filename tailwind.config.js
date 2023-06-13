/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: {
          tt: '#72674c'
        },
        black: {
          tt: '#020202'
        },
        orange: {
          tt: '#ef9d00'
        }
      },
      fontFamily: {
        title: ['"Cooper Black"']
      }
    }
  },
  plugins: []
};