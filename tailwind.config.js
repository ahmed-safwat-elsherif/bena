/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    // screens: {
    //   sm: "600px",
    //   md: "900px",
    //   lg: "1200px",
    //   xl: "1536px",
    // },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        // screens: {
        //   sm: "600px",
        //   md: "900px",
        //   lg: "1300px",
        // },
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
