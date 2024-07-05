/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
               "bg-limited" : "url('../src/assets/bg-limited.jpg')",
               "bg-contact" : "url('../src/assets/contact-bg.jpg')"
              },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontFamily: {
        "recipes" : "Reenie Beanie"
      }
    },
  },
  plugins: [],
}