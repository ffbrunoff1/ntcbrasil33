/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#57ACDC',
        secondary: '#ffffff',
        accent: '#2B4C7E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #57ACDC 0%, #2B4C7E 100%)',
      },
    },
  },
  plugins: [],
};
