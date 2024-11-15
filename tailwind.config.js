/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html',                  // fichier HTML principal
  './src/**/*.{html,js}',          // autres fichiers HTML ou JS dans src
  "./node_modules/flowbite/**/*.js", // fichiers de Flowbite nécessaires
      ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '2560px',
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      spacing: {
        // Ajoutez des espacements personnalisés si nécessaire
      }
    }
  },

  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
    require('tailwindcss-intersect')
  ],
}
