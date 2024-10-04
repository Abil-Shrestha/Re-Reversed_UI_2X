/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'departure-mono': ['var(--font-departure-mono)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        rotate: {
          "0%": {transform: "translateZ(0) rotate(0)"},
          "50%": {transform: "translateZ(0) rotate(0.5turn)"},
          "100%": {transform: "translateZ(0) rotate(1turn)"},
        },
        orbit: {
          from: {
            transform:
              "translateX(-50%) translateY(-50%) translateZ(0) rotate(0turn)",
          },
          to: {
            transform:
              "translateX(-50%) translateY(-50%) translateZ(0) rotate(-1turn)",
          },
        },
        item: {
          from: {transform: "translateZ(0) rotate(0turn)"},
          to: {transform: "translateZ(0) rotate(1turn)"},
        },
      },
      boxShadow: {
        sauceLight:
          "0px 1px 1px 0px rgba(0,0,0,.05), 0px 1px 1px 0px #fff inset, 0px 0px 0px 1px hsla(0,0%,100%,.1) inset, 0px 0px 1px 0px rgba(0,0,0,.5)",
        sauceDark:
          "0px 1px 0px 0px hsla(0,0%,100%,.02) inset, 0px 0px 0px 1px hsla(0,0%,100%,.02) inset, 0px 0px 0px 1px rgba(0,0,0,.25)",
      },
    },
  },
  plugins: [],
};
