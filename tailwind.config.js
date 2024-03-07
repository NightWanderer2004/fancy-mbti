/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         fontFamily: {
            aspekta: ['Aspekta', 'sans-serif'],
            helvetica: ['Helvetica Neue', 'sans-serif'],
         },
         animation: {
            fadeUp: 'fadeUp 700ms ease-in-out forwards',
         },
         keyframes: {
            fadeUp: {
               '0%': {
                  opacity: 0,
                  transform: 'translateY(8px) scale(0.98)',
               },
               '100%': {
                  opacity: 1,
                  transform: 'translateY(0) scale(1)',
               },
            },
         },
      },
   },
   plugins: [require('daisyui'), require('@tailwindcss/typography')],
   daisyui: {
      themes: [
         {
            emerald: {
               ...require('daisyui/src/theming/themes')['emerald'],
               primary: '#c8d5bb',
               secondary: '#60a5fa',
               accent: '#80989b',
               neutral: '#394e6a',
               'base-200': '#d4dcda',
               '--btn-focus-scale': '0.95',
            },
         },
      ],
   },
}
