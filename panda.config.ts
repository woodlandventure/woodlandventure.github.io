import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            green: { value: 'rgb(141,198,63)' },
            darkGreen: { value: 'rgb(0,104,56)' },
            lightBrown: { value: 'rgb(168,114,70)' },
            darkBrown: { value: 'rgb(96,57,19)' },
            cream: { value: 'rgb(241,218,193)' },
            yellow: { value: 'rgb(241,184,14)' }
          }
        },
      },
      semanticTokens: {
        colors: {
          primary: { value: '{colors.brand.green}' },
          primaryDark: { value: '{colors.brand.darkGreen}' },
          secondary: { value: '{colors.brand.lightBrown}' },
          secondaryDark: { value: '{colors.brand.darkBrown}' },
          background: { value: '{colors.brand.cream}' },
          accent: { value: '{colors.brand.yellow}' }
        },
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
