export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
      },
      screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",   // laptop
      xl: "1440px",   // design baseline
      "2k": "1920px", // large monitors
    },
    },
  },
};
