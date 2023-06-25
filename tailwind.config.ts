import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1D9BF0',
                white: '#D9D9D9',
                gray: {
                    600: '#6E767D',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
