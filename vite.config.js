import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss({
            theme: {
                extend: {
                    colors: {
                        background: '#2a2827',
                        primary: '#f98f08',
                        secondary: '#45aee4',
                        tertiary: '#dbd5c5',
                    },
                },
            },
        }),
    ],
    base: '/hpk-portfolio',
});
