module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'dark1':'#22223b',
        'cardbd':'#f72585'
      },
      margin:{
        5:'5px',
        10:'10px',
        15:'15px',
        20:'20px',
        25:'25px',
        30:'30px',
      },
      padding:{
        5:'5px',
        10:'10px',
        15:'15px',
        20:'20px',
        25:'25px',
        30:'30px',
      },
    },
  
    height:{
      5:'5px',
      10:'10px',
      15:'15px',
      20:'20px',
      25:'25px',
      30:'30px',
      35:'35px',
      40:'40px',
      50:'50px',
      150:'150px',
      170:'170px',
      200:'200px',
      400:'400px',
      600:'600px',
      800:'800px',
      'entire':'100vh',
      '100p':'100%1',
      '80vh':'80vh'
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
