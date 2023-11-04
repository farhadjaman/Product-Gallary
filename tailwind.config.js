/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        darkerGrotesque: ['Darker Grotesque', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#E4F6FF',
          200: '#01CC96',
        },
        secondary: '#F5F7FB',
      },
    },
  },
  plugins: [],
};
