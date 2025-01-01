import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
  plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;
