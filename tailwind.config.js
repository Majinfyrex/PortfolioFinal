/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html', "./node_modules/flowbite/**/*.js"],
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
    require('flowbite/plugin')
  ],
}
