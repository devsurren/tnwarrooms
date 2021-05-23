module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height:{
      5:'5px',
      10:'10px',
      15:'15px',
      50:'50px',
      150:'150px',
      170:'170px',
      200:'200px',
      400:'400px',
      600:'600px',
      800:'800px'
    },
    width:{
      50:'50px',
      150:'150px',
      170:'170px',
      200:'200px',
      250:'250px',
      300:'300px',
      400:'400px',
      600:'600px',
      800:'800px'
    },
    fontFamily:{
      'roboto':'Roboto'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
