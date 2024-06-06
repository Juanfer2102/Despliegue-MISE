/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      principalGreen: "#729517",
      secondaryGreen: "#577004",
      links: "#FEEF08",
      grey: "#F5F5F4",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "#00FF0000",
      greyBlack: "#262B32",
      greyBg: "#3C4147",
      textBg: "#64748B"
    },
    extend: {},
  },
  plugins: [],
};
