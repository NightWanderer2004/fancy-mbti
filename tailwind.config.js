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
            emerald: {
               ...require('daisyui/src/theming/themes')['emerald'],
               // primary: '#818cf8',
               primary: '#c8d5bb',
               secondary: '#60a5fa',
               accent: '#80989b',
               neutral: '#394e6a',
               // 'base-200': '#eef2ff',
               'base-200': '#d4dcda',
            },
         },
      ],
   },
}
