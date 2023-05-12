/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "4rem",
        },
        screens: {
          1400: "1400px",
          1200: "1200px",
          900: "900px",
          600: "600px",
        },
      },
      colors: {
        babyblue: {
          light: "#BEE6E9",
          dark: "#0F9BA4",
          darker: "#0c8088",
        },
      },
    },
  },
  plugins: [],
};
