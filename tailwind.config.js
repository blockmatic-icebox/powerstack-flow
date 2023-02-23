/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    '/ui/_legacy/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      urbanist: ['Urbanist', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
