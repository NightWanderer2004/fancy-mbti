/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         fontFamily: {
            aspekta: ['Aspekta', 'sans-serif'],
            helvetica: ['Helvetica Neue', 'sans-serif'],
         },
      },
   },
   plugins: [require('daisyui'), require('@tailwindcss/typography')],
   daisyui: {
      themes: [
         {
            winter: {
               ...require('daisyui/src/theming/themes')['winter'],
               primary: '#818cf8',
               secondary: '#60a5fa',
               accent: '#34d399',
               neutral: '#394e6a',
               'base-200': '#eef2ff',
            },
         },
      ],
   },
}
