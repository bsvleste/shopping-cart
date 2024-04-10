/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      animation:{
        menuIn:"menuIn 0.5s ease-in-out",
        menuOut:"menuOut 0.5s ease-in-out"
      },
      keyframes:{
        menuIn:{
          "0%":{
            transform:"translateX(100%)",
          },
          "100%":{
            transform:'translateX(0%)'
          }
        },
        menuOut:{
          "0%":{
            transform:"translateX(0%)",
          },
          "100%":{
            transform:'translateX(100%)'
          }
        }
      },
      gridTemplateColumns:{
        app:"repeat(auto-fit,minmax(200px, 1fr))",
        profile:"max-content 1fr min-content",
        form:"minmax(7.5rem,17.5rem ) minmax(25rem, 1fr) minmax(0, 15rem)"
      },
      fontFamily: {
        sans: "Roboto, sans-serif"
      },
    },
  },
  plugins: [],
}

