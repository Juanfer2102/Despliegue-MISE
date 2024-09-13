/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      barColor1: '#4ECDC4',
      barColor2: '#FF6B6B',
      darkslategray: "#262b32",
      azulclaro: "#00B0F0",
      fucsia: "#FF33CC",
      colorborder: "#e2e8f0",
      colorwhite: "#fff",
      darkgray: "#969ca4",
      darkorange: "#f97316",
      colortextsecondary: "#64748b",
      olivedrab: "#729517",
      mediumseagreen: "#35af66",
      dimgray: "#5c5c5c",
      amarillo: "#FFFF00",
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
      // light mode
      tremor: {
        brand: {
          faint: colors.blue[50],
          muted: colors.transparent,
          subtle: colors.transparent,
          DEFAULT: colors.blue[500],
          emphasis: colors.blue[700],
          inverted: colors.white,
        },
        background: {
          muted: colors.gray[50],
          subtle: colors.gray[100],
          DEFAULT: colors.white,
          emphasis: colors.gray[700],
        },
        border: {
          DEFAULT: 'transparent',
        },
        ring: {
          DEFAULT: colors.gray[200],
        },
        content: {
          subtle: colors.gray[400],
          DEFAULT: colors.gray[500],
          emphasis: colors.gray[700],
          strong: colors.gray[900],
          inverted: colors.white,
        },

      },
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },


    fontFamily: {
      "base-medium": "Poppins",
      roboto: "Roboto",
    },

    boxShadow: {
      // light
      'tremor-input': 'none',
      'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      // dark
      'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    },



    extend: {
      keyframes: {
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        // Dialog
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },

    },
  },

  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|greenFull|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|greenFull|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|greenFull|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|greenFull|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|greenFull|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|greenFull|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],

  plugins: [],
}