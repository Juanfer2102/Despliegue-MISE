/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      darkslategray: {
        "100": "#262b32",
        "200": "#252b32",
      },
      colorborder: "#e2e8f0",
      colorwhite: "#fff",
      darkgray: "#969ca4",
      darkorange: "#f97316",
      colortextsecondary: "#64748b",
      olivedrab: "#729517",
      mediumseagreen: "#35af66",
      dimgray: "#5c5c5c",
      gold: "#d5c425",
      principalGreen: "#729517",
      secondaryGreen: "#577004",
      links: "#FEEF08",
      grey: "#F5F5F4",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "#00FF0000",
      greyBlack: "#262B32",
      greyBg: "#3C4147",
      textBg: "#64748B",
      red: "#EE0004",
    },
    screens: {
      mq1850: {
        raw: "screen and (max-width: 1850px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
    fontFamily: {
      "base-medium": "Poppins",
      roboto: "Roboto",
    },
    borderRadius: {
      "80xl": "99px",
      "3xs": "10px",
      "8xs": "5px",
      "border-radius-md": "16px",
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "5xl": "24px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xl: "20px",
      lgi: "19px",
      inherit: "inherit",
    },
    corePlugins: {
      preflight: false,
    },
    extend: {},
  },
  plugins: [],
};
