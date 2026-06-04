/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  plugins: [require("tailwind-scrollbar")],
  theme: {
    extend: {
      fontFamily: {
        title: ["Chillax", "sans-serif"],
        sans: ["Synonym", "sans-serif"],
      },
      colors: {
        bg: "rgb(var(--color-bg))",
        text: "rgb(var(--color-text))",
        accent: "rgb(var(--color-accent))",
        'accent-yellow': "rgb(var(--color-accent-yellow))",
        'accent-pink': "rgb(var(--color-accent-pink))",
        'accent-green': "rgb(var(--color-accent-green))",
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        alternative: "rgb(var(--color-alternative))",
      },
      spacing: {
        'project-card': '25rem',
      },
      borderRadius: {
        'project': '0px',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      }
    },
  },
};
