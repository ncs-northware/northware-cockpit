const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/theme/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:  {
        sans: ['var(--font-sourcesans)']
      },
      colors: {
        'primary': colors.sky,
        'cockpit': colors.sky,
        'finance': colors.red,
        'trader': colors.orange,
        'secondary': {
          'DEFAULT': '#1E1E1E',
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
}
