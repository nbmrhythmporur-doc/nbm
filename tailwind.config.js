export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
        albra: ["var(--font-albra-bold)", "sans-serif"],
        body: ["var(--font-lato)", "sans-serif"],
        heading: ["var(--font-albra-bold)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px", // laptop
        xl: "1440px", // design baseline
        "2k": "1920px", // large monitors
      },
    },
  },
};
