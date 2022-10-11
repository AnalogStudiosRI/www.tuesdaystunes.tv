/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        gray: {
          tt: '#72674c'
        }
      }
    }
  },
  plugins: []
};
