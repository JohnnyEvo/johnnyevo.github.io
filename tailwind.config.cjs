/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'title': ['Chillax'],
                'sans': ['Synonym'],
            },
            colors: {
                primary: 'rgb(var(--color-primary))',
                secondary: 'rgb(var(--color-secondary))',
                alternative: 'rgb(var(--color-alternative))',
            },
        }
    },
}
