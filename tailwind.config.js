module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: '#996dff',
                    500: '#8257e6'
                }
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('tailwind-scrollbar'),
    ],
}