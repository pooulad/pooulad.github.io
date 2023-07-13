/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px,#f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px,#1b1b1b 100px);",
      },
    },
  },
  plugins: [],
};
