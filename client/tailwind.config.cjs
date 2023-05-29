/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: (theme) => ({
        Model1: "url('/src/assets/images/img5.jpg')",
        Model2: "url('/src/assets/images/img8.jpg')",
        Model3: "url('/src/assets/images/img13.jpg')",
        Model4: "url('/src/assets/images/img6.jpg')",
      }),
      fontFamily: {
        Montez: ["Montez", "cursive"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        beige: "#FFBB9E",
        purple: "#3406B6",
        neutral: "#F0F0F0",
        accent: "#ECEAFF",
      },
    },
  },
  plugins: [],
};
