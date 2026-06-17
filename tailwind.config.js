module.exports = {
  content: ["./*.html", "./src/scss/**/*.scss"],
  theme: {
    extend: {
      colors: {

        Gray: {
          light: "rgb(139, 40, 41)",          // #272829
          dark: "rgb(16, 17, 18)",            // #101112
        },

        Blue: {
          light: "rgb(24, 3, 138)",          // #18038A
          dark: "rgb(0, 3, 25)",             // #000319
        },

        Purple: {
          primary: "rgb(145, 76, 255)",      // #914BFF
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        56: '3.5rem',
      }
    },
  },
  plugins: [],
};