/** @type {import('tailwindcss').Config} */
module.exports = {
  content: content: [
    "./app/**/*.{html,js}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "Light-Cyan": "var(--Light-Cyan)",
          "Neon-Green": "var(--Neon-Green)",
        },
        neutral: {
          "Grayish-Blue": "var(--Grayish-Blue)",
          "Dark-Grayish-Blue": "var(--Dark-Grayish-Blue)",
          "Dark-Blue": "var(--Dark-Blue)",
        }
      },
      borderRadius: {
        "circel": "50%"
      },
      boxShadow: {
        "diceShadow": "0px 0px 25px var(--Neon-Green)"
      },
      letterSpacing: {
        "5": "5px"
      },
      screens :{
        "Msm": {"max": '640px'},
      }
    },
  },
  plugins: [],
}
