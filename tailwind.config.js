/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        darkGray: "#191A19",
        blue: "#88B9E1",
        lightGray: "#FFFFFF80",
        liteGray: "#FFFFFFBF",
        offWhite: "#FFFFFF",
        grayish: "#191A1980",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        comforter: ["var(--font-comforter)", "cursive"],
        unlock: ["Unlock", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      screens: {
        large: "1400px",
      },
      underlineOffset: {
        6: "6px",
        10: "10px",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
