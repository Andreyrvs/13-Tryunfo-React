module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        epi: 'Epilogue',
        verdana: 'Verdana',
      },
      colors: {
        primary: '#023031',
        pwhite: '#fff',
        primarText: '#2FC18C',
        secondText: '#3D495C',
      },
      spacing: {
        159: '9.938rem',
        404: '25.25rem',
        721: '45.063rem',
        1124: '70.25rem',
        card: '94.311%',
        cardGap: '6.4%',
      },
      fontSize: {
        '34xl': '1.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
