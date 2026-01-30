/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                // This tells Tailwind: "Use the font defined in --font-main variable"
                sans: ["var(--font-main)", "sans-serif"],
            },
            colors: {
                // We can also map your Careons colors here for easy use like "bg-primary"
                primary: "var(--color-primary)",
                accent: "var(--color-accent)",
                soft: "var(--color-bg-soft)",
            },
        },
    },
    plugins: [],
};
