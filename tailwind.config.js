/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontSize: {
      '6xl': ['48px', '56px'],
      '5xl': ['36px', '44px'],
      '4xl': ['30px', '36px'],
      '3xl': ['27px', '32px'],
      '2xl': ['24px', '28px'],
      xl: ['21px', '28px'],
      lg: ['18px', '28px'],
      lg24: ['18px', '24px'],
      base20: ['15px', '20px'],
      base: ['15px', '24px'],
      sm: ['12px', '20px'],
      sm24: ['12px', '24px'],
      xs: ['9px', '16px'],
    },
    extend: {
      boxShadow: {
        xl: [
          '0px 1px 10px 0px rgba(20, 10, 51, 0.07)',
          '0px 3px 2px 0px rgba(20, 10, 51, 0.03)',
          '0px 2px 4px 0px rgba(20, 10, 51, 0.05)',
        ],
        '2xl': [
          '0px 2px 8px 0px rgba(20, 10, 51, 0.07)',
          '0px 1px 20px 0px rgba(20, 10, 51, 0.03)',
          '0px 4px 10px 0px rgba(20, 10, 51, 0.05)',
        ],
        '3xl': [
          '0px 3px 10px 0px rgba(20, 10, 51, 0.07)',
          '0px 1px 36px 0px rgba(20, 10, 51, 0.03)',
          '0px 6px 20px 0px rgba(20, 10, 51, 0.05)',
        ],
        '4xl': [
          '0px 5px 10px 0px rgba(20, 10, 51, 0.07)',
          '0px 3px 28px 0px rgba(20, 10, 51, 0.03)',
          '0px 8px 20px 0px rgba(20, 10, 51, 0.05)',
        ],
        '5xl': [
          '0px 8px 20px 0px rgba(20, 10, 51, 0.07)',
          '0px 6px 60px 0px rgba(20, 10, 51, 0.03)',
          '0px 16px 48px 0px rgba(20, 10, 51, 0.05)',
        ],
        '6xl': [
          '0px 11px 30px 0px rgba(20, 10, 51, 0.07)',
          '0px 9px 92px 0px rgba(20, 10, 51, 0.03)',
          '0px 24px 76px 0px rgba(20, 10, 51, 0.05)',
        ],
      },
      colors: {
        primary: {
          100: '#2F2388',
        },
        gray: {
          100: '#DDDFE1',
          200: '#C0CBD6',
        },
        yellow:{
          100:'#F7FACD',
        },
        white: {
          100: '#ffffff',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
