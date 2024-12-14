// const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    // "./node_modules/@nextui-org/react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'garamond': ['Garamond', 'serif'],
      },
      colors: {
        text: {
          disabled: '#4F4F4F',
        },
        blue: {
          250: '#F9FBFF',
          120: '#EAF1FF',
          150: '#DFEDFF',
          300: '#0069CF',
          100: '#EBF8FF',
          200: '#0076B6',
          500: '#014386',
          600: '#3182ce',
        },
        gray: {
          100: '#F6F6F6',
          2: '#E7E7E7',
          200: '#D1D1D1',
          300: '#4F4F4F',
          500: '#252525',

          150: '#F9FBFF',
          400: '#9CA3AF',
          600: '#4B5563',
          800: '#1F2937',
        },
        medium_gray: '#A8A8A8',
        positive: {
          100: '#E7F3EB',
          200: '#B6D8C2',
          300: '#92C6A4',
          400: '#13823A',
          500: '#117635',
        },
        white: '#FFFFFF',
        black: '#000',
        red: {
          500: '#F05252',
        },
        green: {
          200: '#E7F3EB',
          300: '#13823A',
          500: '#48bb78',
        },
        nagative: {
          300: '#B61E1D',
          500: '#F8E9E8',
        },
        yellow: {
          100: '#E19133'
        },
        purple: {
          100: '#845EBC'
        }
      },
    },
  },
  plugins: [],
};


