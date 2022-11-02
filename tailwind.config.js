/* eslint-disable max-len */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '-349': '-21.813rem',
        '-365': '-22.813rem',
      },
      fontFamily: {
        epi: 'Epilogue',
        verdana: 'Verdana',
      },
      colors: {
        primary: '#023031',
        pwhite: '#fff',
        primarText: 'var(--bg-primary)',
        secondText: '#3D495C',
      },
      spacing: {
        159: '9.938rem',
        404: '25.25rem',
        721: '45.063rem',
        1124: '70.25rem',
        1132: '70.875rem',
        card: '94.311%',
        cardGap: '6.4%',
      },
      fontSize: {
        '34xl': '1.75rem',
      },
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
