/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1cb5e3",
        secondary: "#e34a1c",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        slide: {
          "45%": { transform: "translateX(0);" },
          "50%": { transform: "translateX(-290px);" },
          "54%": { transform: "translateX(-75px);" },
          "91%": { transform: "translateX(-75px);" },
          "95%": { transform: "translateX(-290px);" },
          "100%": { transform: "translateX(0);" },
        },
        hide: {
          "0%": { width: "100%;" },
          "45%": { width: "100%;" },
          "50%": { width: "0;", display: "none;" },
          "95%": { display: "block;", width: "0%;" },
          "100%": { width: "100%;" },
        },
        hide2: {
          "0%": { "clip-path": "inset(0 100% 0 0);" },
          "50%": { "clip-path": "inset(0 100% 0 0);" },
          "55%": { "clip-path": "inset(0 0 0 0);" },
          "90%": { "clip-path": "inset(0 0 0 0);" },
          "95%": { "clip-path": "inset(0 100% 0 0);" },
          "100%": { "clip-path": "inset(0 100% 0 0);" },
        },
      },
    },
  },
  plugins: [],
};
